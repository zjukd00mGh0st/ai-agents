import os
import fitz


def extract_text_from_pdf(pdf_path: str) -> str:
    if not os.path.exists(pdf_path):
        raise Exception("The pdf document doesn't exists")

    text = ""

    doc = fitz.open(pdf_path) 

    for page_num in range(len(doc)):
        page = doc.load_page(page_num)
        text += page.get_text()

    return text
