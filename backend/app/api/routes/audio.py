from fastapi import APIRouter

router = APIRouter()

@router.get("/{audio_id}")
def get_audio(audio_id: str):
    """
    Retrieve rendered audio by ID
    """
    return {
        "audio_id": audio_id,
        "status": "ready"
    }
