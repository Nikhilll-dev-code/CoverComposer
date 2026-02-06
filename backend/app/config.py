from pydantic import BaseSettings
import os
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY is not set")

class Settings(BaseSettings):
    app_name: str = "CoverComposer"
    debug: bool = True

    class Config:
        env_file = ".env"

settings = Settings()
