from fastapi import FastAPI, WebSocket
from app.api.routes import router as api_router
from app.api.websocket import manager

app = FastAPI(
    title="CoverComposer API",
    version="0.1.0"
)

app.include_router(api_router, prefix="/api/v1")


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            await websocket.receive_text()
    except Exception:
        manager.disconnect(websocket)


@app.get("/health")
def health_check():
    return {"status": "ok"}
