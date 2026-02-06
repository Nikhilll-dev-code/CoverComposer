import React from "react";

export default function AudioPlayer({ data }) {
  if (!data?.audio_url) return null;

  return (
    <div
      className="audio-player-card"
      style={{ textAlign: "center", width: "100%" }}
    >
      <div style={{ fontSize: "50px", marginBottom: "20px" }}>🎵</div>

      <audio
        controls
        src={data.audio_url}
        style={{ width: "100%" }}
      />

      <br /><br />

      <a
        href={data.audio_url}
        download
        className="generate-btn"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        Download Track
      </a>
    </div>
  );
}
