from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # App
    app_name: str = "CoverComposer"
    GROQ_API_KEY: str
    DEBUG: bool = True
    
    # Database
    DATABASE_URL: str = "sqlite:///./covercomposer.db"
    
    # API Settings
    API_HOST: str = "0.0.0.0"
    API_PORT: int = 8000
    CORS_ORIGINS: str = "http://localhost:3000,http://localhost:5173"
    
    # Audio Settings
    TEMP_AUDIO_DIR: str = "./temp"
    SAMPLE_RATE: int = 44100
    MAX_AUDIO_DURATION: int = 300
    
    @property
    def cors_origins_list(self):
        """Convert comma-separated string to list"""
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",")]
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()