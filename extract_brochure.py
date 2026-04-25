from pathlib import Path
from pypdf import PdfReader


PDF_PATH = Path(r"C:\Users\vg019\Downloads\Brochure Final (3) (1).pdf")
OUTPUT_DIR = Path(r"C:\Users\vg019\Documents\Codex\2026-04-25-want-to-build-websited-through-catelogue\brochure_extract")
TEXT_DIR = OUTPUT_DIR / "pages"
IMAGE_DIR = OUTPUT_DIR / "images"


def main() -> None:
    OUTPUT_DIR.mkdir(exist_ok=True)
    TEXT_DIR.mkdir(exist_ok=True)
    IMAGE_DIR.mkdir(exist_ok=True)

    reader = PdfReader(str(PDF_PATH))
    summary_lines: list[str] = [f"pages={len(reader.pages)}"]

    for page_index, page in enumerate(reader.pages, start=1):
      text = page.extract_text() or ""
      (TEXT_DIR / f"page-{page_index:03d}.txt").write_text(text, encoding="utf-8")
      summary_lines.append(f"page-{page_index:03d}-chars={len(text)}")

      try:
          images = list(page.images)
      except Exception as error:
          summary_lines.append(f"page-{page_index:03d}-images-error={error}")
          images = []

      for image_index, image_file in enumerate(images, start=1):
          image_name = Path(image_file.name)
          stem = image_name.stem or f"page-{page_index:03d}-{image_index:02d}"
          suffix = image_name.suffix or ".bin"
          image_path = IMAGE_DIR / f"page-{page_index:03d}-{image_index:02d}-{stem}{suffix}"
          image_path.write_bytes(image_file.data)
          summary_lines.append(f"image={image_path.name}")

    (OUTPUT_DIR / "summary.txt").write_text("\n".join(summary_lines), encoding="utf-8")


if __name__ == "__main__":
    main()
