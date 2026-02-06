from fastapi import APIRouter

router = APIRouter()

@router.post("/")
def generate_music():
    return {"message": "generation endpoint"}
