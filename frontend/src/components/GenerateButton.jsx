import React, { useState } from "react";
import { generateMusic } from "../services/api";

console.log("GenerateButton file loaded");

export default function GenerateButton({
  mood,
  genre,
  tempo,
  onGenerated,
  onStart, 
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    console.log("Generate button clicked");
    setLoading(true);
    setError(null);

    // Notify parent that generation started
    if (onStart) {
      onStart();
    }

    try {
      const response = await generateMusic({
        mood,
        genre,
        tempo,
      });

      console.log("Music generated:", response);

      if (onGenerated) {
        onGenerated(response);
      }
    } catch (err) {
      console.error(err);
      setError("Failed to generate music. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          backgroundColor: "#4f46e5",
          color: "#fff",
        }}
      >
        {loading ? "Generating..." : "Generate Music"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          {error}
        </p>
      )}
    </div>
  );
}
