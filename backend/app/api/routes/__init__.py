from fastapi import APIRouter
from . import generation, audio, transform, projects, export

router = APIRouter()

# Include all route modules
router.include_router(generation.router, prefix="/generate", tags=["generation"])
router.include_router(audio.router, prefix="/audio", tags=["audio"])
router.include_router(transform.router, prefix="/transform", tags=["transform"])
router.include_router(projects.router, prefix="/projects", tags=["projects"])
router.include_router(export.router, prefix="/export", tags=["export"])