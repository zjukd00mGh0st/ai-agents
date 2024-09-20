import uvicorn
from os import getenv
from dotenv import load_dotenv

load_dotenv()

HOST = getenv("HOST")
PORT = getenv("PORT")

if __name__ == "__main__":
    uvicorn.run(
        "src.app:get_app", 
        port=int(PORT), 
        host=HOST, 
        log_level="info"
    )
