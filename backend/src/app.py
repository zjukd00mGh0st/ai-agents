from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.agents.router import router as agents_router


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
