from fastapi import APIRouter
from app.core.midi_engine import generate_midi

router = APIRouter()

@router.post("/generate/")
def generate_music(payload: dict):
    mood = payload.get("mood", "happy")
    genre = payload.get("genre", "pop")
    tempo = payload.get("tempo", 120)

    # generate_midi NOW returns ONLY the filename, e.g. "uuid.mid"
    audio_id = generate_midi(mood, genre, tempo)

    return {
        "status": "success",
        "audio_id": audio_id,
        "audio_url": f"http://127.0.0.1:8000/api/v1/audio/{audio_id}"
    }
