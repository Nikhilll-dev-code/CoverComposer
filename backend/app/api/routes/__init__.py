from fastapi import APIRouter

from .generation import router as generation_router
from .audio import router as audio_router
from .transform import router as transform_router
from .projects import router as projects_router
from .export import router as export_router

router = APIRouter()

router.include_router(generation_router, prefix="/generate", tags=["Generation"])
router.include_router(audio_router, prefix="/audio", tags=["Audio"])
router.include_router(transform_router, prefix="/transform", tags=["Transform"])
router.include_router(projects_router, prefix="/projects", tags=["Projects"])
router.include_router(export_router, prefix="/export", tags=["Export"])
