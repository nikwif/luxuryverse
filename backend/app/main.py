from fastapi import FastAPI
from fastapi.routing import APIRoute
from starlette.middleware.cors import CORSMiddleware

from app.api.main import api_router
from app.core.config import settings

def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V_STR}/openapi.json",
    generate_unique_id_function=custom_generate_unique_id,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://iconluxury.today"],
    allow_credentials=False,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["Accept"],
)
app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/health", tags=["health"])  # Add tags here
async def health_check():
    return {"status": "healthy"}