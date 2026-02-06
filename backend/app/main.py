from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes import router as api_router
from app.api.routes.websocket import manager
from app.config import settings

app = FastAPI(
    title="CoverComposer API",
    version="0.1.0",
    debug=settings.DEBUG
)

# CORS - use the property that converts string to list
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,  # Changed this line
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router, prefix="/api/v1")

# WebSocket endpoint
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            await websocket.receive_text()
    except Exception:
        manager.disconnect(websocket)

# Health check
@app.get("/health")
def health_check():
    return {"status": "ok", "app": settings.app_name}

# Root endpoint
@app.get("/")
def root():
    return {
        "message": "CoverComposer API",
        "docs": "/docs",
        "health": "/health"
    }