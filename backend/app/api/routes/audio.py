from fastapi import APIRouter, HTTPException
from fastapi.responses import FileResponse
import os

router = APIRouter()

AUDIO_DIR = "temp/midi"

@router.get("/audio/{audio_id}")
def get_audio(audio_id: str):
    file_path = os.path.join(AUDIO_DIR, audio_id)

    print("Looking for audio at:", os.path.abspath(file_path))
    if not os.path.exists(file_path):
        raise HTTPException(status_code=404, detail="Audio not found")

    return FileResponse(
        file_path,
        media_type="audio/midi",
        filename=audio_id,
    )
