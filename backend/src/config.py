from os import getenv
from dotenv import load_dotenv

load_dotenv()

GEMINI_API_KEY = getenv("GEMINI_API_KEY")

if not GEMINI_API_KEY:
    raise Exception("Missing Environment Variable")