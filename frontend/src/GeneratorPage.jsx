import React, { useState, useEffect, useRef } from 'react';
import MoodSelector from './components/MoodSelector';
import GenrePicker from './components/GenrePicker';
import TempoSlider from './components/TempoSlider';
import ProgressBar from './components/ProgressBar';
import AudioPlayer from './components/AudioPlayer';

const GeneratorPage = () => {
  const [config, setConfig] = useState({ mood: 'energetic', genre: 'electronic', tempo: 120 });
  const [status, setStatus] = useState('idle'); // idle, generating, complete
  const [progress, setProgress] = useState(0);
  const [audioUrl, setAudioUrl] = useState(null);

  const handleGenerate = async () => {
    setStatus('generating');
    setProgress(0);

    // MOCK WEBSOCKET LOGIC FOR HACKATHON DEMO
    // In production, replace this with actual WebSocket listener
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('complete');
          setAudioUrl('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Mock audio
          return 100;
        }
        return prev + 10;
      });
    }, 800);
  };

  return (
    <div className="dashboard-container">
      <header>
        <h1>CoverComposer</h1>
        <p>Generative AI Music Studio</p>
      </header>

      <div className="grid-layout">
        <aside className="controls-card">
          <MoodSelector selected={config.mood} onChange={(val) => setConfig({...config, mood: val})} />
          <GenrePicker selected={config.genre} onChange={(val) => setConfig({...config, genre: val})} />
          <TempoSlider value={config.tempo} onChange={(val) => setConfig({...config, tempo: val})} />
          
          <button 
            className="generate-btn" 
            onClick={handleGenerate} 
            disabled={status === 'generating'}
          >
            {status === 'generating' ? 'Generating...' : 'Generate Music'}
          </button>
        </aside>

        <section className="output-card">
          <div className="status-zone">
            {status === 'idle' && <p>Adjust settings and click generate to start.</p>}
            {status === 'generating' && <ProgressBar progress={progress} />}
            {status === 'complete' && <AudioPlayer src={audioUrl} />}
          </div>
        </section>
      </div>
    </div>
  );
};

export default GeneratorPage;