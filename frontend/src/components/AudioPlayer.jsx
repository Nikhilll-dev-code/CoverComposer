import React from 'react';
const AudioPlayer = ({ src }) => (
  <div className="audio-player-card" style={{textAlign: 'center', width: '100%'}}>
    <div style={{fontSize: '50px', marginBottom: '20px'}}>🎵</div>
    <audio controls src={src} style={{width: '100%'}} />
    <br /><br />
    <a href={src} download className="generate-btn" style={{textDecoration: 'none', display: 'inline-block'}}>Download Track</a>
  </div>
);
export default AudioPlayer;