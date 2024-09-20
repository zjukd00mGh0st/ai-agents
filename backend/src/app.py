from fastapi import FastAPI
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
from .routers.agents.router import router as agents_router
from .config import GEMINI_API_KEY


genai.configure(api_key=GEMINI_API_KEY)


def get_app():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=[
            "http://localhost",
            "http://localhost:5173",
        ],
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.include_router(agents_router, prefix="/api/agents")

    @app.get("/")
    def index():
        return 200

    return app
