from fastapi import APIRouter

router = APIRouter()

@router.post("/{project_id}")
def export_project(project_id: str):
    """
    Export project audio files
    """
    return {
        "project_id": project_id,
        "status": "export started"
    }
