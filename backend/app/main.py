from fastapi import FastAPI, Request
from starlette.middleware.cors import CORSMiddleware
from fastapi.routing import APIRoute
from app.api.main import api_router
from app.core.config import settings

def custom_generate_unique_id(route: APIRoute) -> str:
    return f"{route.tags[0]}-{route.name}"

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_V_STR}/openapi.json",
    generate_unique_id_function=custom_generate_unique_id,
    redirect_slashes=False,
)

@app.middleware("http")
async def add_path_to_response(request: Request, call_next):
    response = await call_next(request)
    # Add path to response headers
    response.headers["X-Request-Path"] = request.url.path
    # Optionally, log the path
    print(f"Request path: {request.url.path}")
    return response

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://iconluxury.shop"],
    allow_credentials=False,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Accept", "Content-Type", "Authorization"],
)

app.include_router(api_router, prefix=settings.API_V1_STR)

@app.get("/health", tags=["health"])
async def health_check():
    return {"status": "healthy"}