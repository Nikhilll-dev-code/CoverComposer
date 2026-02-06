from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def list_projects():
    """
    List all music projects
    """
    return {
        "projects": []
    }
