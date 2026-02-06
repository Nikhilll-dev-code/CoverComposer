from fastapi import APIRouter

router = APIRouter()

@router.post("/{project_id}")
def transform_project(project_id: str):
    """
    Apply transformations to an existing project
    """
    return {
        "project_id": project_id,
        "status": "transform started"
    }
