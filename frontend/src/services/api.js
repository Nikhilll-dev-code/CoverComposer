const API_BASE = "http://127.0.0.1:8000";

export async function generateMusic(payload) {
  const response = await fetch(`${API_BASE}/api/v1/generate/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to generate music");
  }

  return response.json();
}
