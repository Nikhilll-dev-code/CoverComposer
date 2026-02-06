from fastapi import APIRouter
from .generation import router as generation_router
from .audio import router as audio_router
from .transform import router as transform_router
from .projects import router as projects_router
from .export import router as export_router

router = APIRouter()

router.include_router(generation_router, tags=["generation"])
router.include_router(audio_router, tags=["audio"])
router.include_router(transform_router, tags=["transform"])
router.include_router(projects_router, tags=["projects"])
router.include_router(export_router, tags=["export"])
