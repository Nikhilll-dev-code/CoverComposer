import React, { useState } from "react";

import MoodSelector from "./components/MoodSelector";
import GenrePicker from "./components/GenrePicker";
import TempoSlider from "./components/TempoSlider";
import ProgressBar from "./components/ProgressBar";
import AudioPlayer from "./components/AudioPlayer";
import GenerateButton from "./components/GenerateButton";

const GeneratorPage = () => {
  const [config, setConfig] = useState({
    mood: "energetic",
    genre: "electronic",
    tempo: 120,
  });

  const [status, setStatus] = useState("idle"); // idle | generating | complete
  const [progress, setProgress] = useState(0);
  const [generatedData, setGeneratedData] = useState(null);

  /**
   * Called when backend successfully generates music
   * (triggered from GenerateButton)
   */
  const handleGenerated = (data) => {
    setGeneratedData(data);
    setStatus("complete");
    setProgress(100);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>CoverComposer</h1>
        <p>Generative AI Music Studio</p>
      </header>

      <div className="grid-layout">
        {/* LEFT: CONTROLS */}
        <aside className="controls-card">
          <MoodSelector
            selected={config.mood}
            onChange={(val) =>
              setConfig((prev) => ({ ...prev, mood: val }))
            }
          />

          <GenrePicker
            selected={config.genre}
            onChange={(val) =>
              setConfig((prev) => ({ ...prev, genre: val }))
            }
          />

          <TempoSlider
            value={config.tempo}
            onChange={(val) =>
              setConfig((prev) => ({ ...prev, tempo: val }))
            }
          />

          {/* 🔴 REAL BACKEND INTEGRATION */}
          <GenerateButton
            mood={config.mood}
            genre={config.genre}
            tempo={config.tempo}
            onGenerated={handleGenerated}
            onStart={() => {
              setStatus("generating");
              setProgress(30); // simple visual feedback
            }}
          />
        </aside>

        {/* RIGHT: OUTPUT */}
        <section className="output-card">
          <div className="status-zone">
            {status === "idle" && (
              <p>Adjust settings and click generate to start.</p>
            )}

            {status === "generating" && (
              <ProgressBar progress={progress} />
            )}

            {status === "complete" && generatedData && (
              <AudioPlayer data={generatedData} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneratorPage;
