# backend/app/core/midi_engine.py

from app.config import settings
from groq import Groq
from music21 import stream, note, chord, tempo, key
import uuid
import os

# -----------------------------
# BASIC MUSIC THEORY RULES
# -----------------------------

CHORD_MAP = {
    "C": ["C", "E", "G"],
    "G": ["G", "B", "D"],
    "F": ["F", "A", "C"],
    "Am": ["A", "C", "E"],
}

client = Groq(api_key=settings.GROQ_API_KEY)

MOOD_CONFIG = {
    "happy": {
        "scale": "major",
        "chords": ["C", "G", "Am", "F"]
    },
    "sad": {
        "scale": "minor",
        "chords": ["Am", "F", "C", "G"]
    },
    "calm": {
        "scale": "major",
        "chords": ["C", "Am", "F", "G"]
    },
    "energetic": {
        "scale": "major",
        "chords": ["C", "G", "F", "G"]
    }
}

GENRE_TEMPO = {
    "pop": 120,
    "jazz": 90,
    "classical": 70,
    "electronic": 128
}

OUTPUT_DIR = "temp/midi"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# -----------------------------
# MAIN FUNCTION (USED BY BACKEND)
# -----------------------------

def generate_midi(mood: str, genre: str, tempo_value: int | None = None) -> str:
    """
    Generates a MIDI file based on mood and genre.
    Returns path to MIDI file.
    """

    mood = mood.lower()
    genre = genre.lower()

    # Defaults
    mood_data = MOOD_CONFIG.get(mood, MOOD_CONFIG["happy"])
    bpm = tempo_value if tempo_value else GENRE_TEMPO.get(genre, 120)

    s = stream.Stream()

    # Tempo
    s.append(tempo.MetronomeMark(number=bpm))

    # Key
    if mood_data["scale"] == "minor":
        s.append(key.Key("A", "minor"))
    else:
        s.append(key.Key("C", "major"))

    # Chord progression
    for chord_name in mood_data["chords"]:
        notes = CHORD_MAP.get(chord_name, ["C", "E", "G"])
        c = chord.Chord(notes)
        c.quarterLength = 2
        s.append(c)

        # Simple melody note on top
        melody_note = note.Note(notes[0])
        melody_note.octave = 5
        melody_note.quarterLength = 1
        s.append(melody_note)

    # Save MIDI
    file_id = str(uuid.uuid4())
    file_path = os.path.join(OUTPUT_DIR, f"{file_id}.mid")
    s.write("midi", file_path)

    return f"{file_id}.mid"
