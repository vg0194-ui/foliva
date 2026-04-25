# Foliva Multi-Page Website

This workspace now contains a multi-page Foliva website plus a local Node backend for inquiry submissions.

## Main pages

- `index.html` - homepage
- `products/index.html` - full product catalogue
- `products/*.html` - dedicated product detail pages

## Main scripts

- `js/products-data.js` - shared product data
- `js/home.js` - homepage product rendering
- `js/products-page.js` - catalogue filters and rendering
- `js/product-page.js` - per-product page population
- `js/inquiry.js` - backend-backed inquiry form logic
- `server.js` - local backend and static file server

## Run locally

1. `npm start`
2. Open `http://localhost:3000`

## Inquiry storage

- Submitted inquiries are appended to `data/inquiries.jsonl`

## Deploy for live hosting

This project is now prepared for a Node hosting platform such as Render.

### Render

1. Push this project to a GitHub repository.
2. In Render, create a new `Web Service` from that repository.
3. Render can read `render.yaml` automatically, or you can set:
   - Build command: `npm install`
   - Start command: `npm start`
4. After deploy, the site will serve:
   - `/` -> homepage
   - `/products/` -> catalogue page
   - `/api/inquiry` -> inquiry submission endpoint

### Notes

- Inquiry submissions are stored on the server filesystem in `data/inquiries.jsonl`.
- On many cloud hosts, filesystem storage is not permanent across rebuilds or instance changes.
- For production, the next upgrade is to store inquiries in a database instead of a local file.
