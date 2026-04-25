const http = require("http");
const fs = require("fs");
const path = require("path");

const rootDir = __dirname;
const dataDir = path.join(rootDir, "data");
const inquiryLogPath = path.join(dataDir, "inquiries.jsonl");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".pdf": "application/pdf",
  ".txt": "text/plain; charset=utf-8"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function getSafeFilePath(requestPath) {
  const normalizedPath = decodeURIComponent(requestPath.split("?")[0]);
  const relativePath = normalizedPath === "/" ? "/index.html" : normalizedPath;
  const filePath = path.normalize(path.join(rootDir, relativePath));
  if (!filePath.startsWith(rootDir)) {
    return null;
  }
  return filePath;
}

function serveFile(response, filePath) {
  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    response.writeHead(200, { "Content-Type": mimeTypes[extension] || "application/octet-stream" });
    response.end(content);
  });
}

function validateInquiry(payload) {
  return payload && payload.name && payload.email && payload.message;
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    sendJson(response, 400, { error: "Missing request URL." });
    return;
  }

  if (request.method === "POST" && request.url === "/api/inquiry") {
    try {
      const rawBody = await readRequestBody(request);
      const payload = JSON.parse(rawBody || "{}");
      if (!validateInquiry(payload)) {
        sendJson(response, 400, { error: "Name, email, and message are required." });
        return;
      }

      fs.mkdirSync(dataDir, { recursive: true });
      const record = {
        ...payload,
        createdAt: new Date().toISOString()
      };
      fs.appendFileSync(inquiryLogPath, `${JSON.stringify(record)}\n`, "utf8");
      sendJson(response, 200, { ok: true });
    } catch (error) {
      sendJson(response, 500, { error: "Unable to store inquiry." });
    }
    return;
  }

  if (request.method === "GET" && request.url === "/api/health") {
    sendJson(response, 200, { ok: true });
    return;
  }

  if (request.method !== "GET") {
    sendJson(response, 405, { error: "Method not allowed." });
    return;
  }

  const filePath = getSafeFilePath(request.url);
  if (!filePath) {
    sendJson(response, 400, { error: "Invalid path." });
    return;
  }

  let finalPath = filePath;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    finalPath = path.join(filePath, "index.html");
  }

  serveFile(response, finalPath);
});

const port = Number(process.env.PORT || 3000);
server.listen(port, () => {
  console.log(`Foliva site running at http://localhost:${port}`);
});
