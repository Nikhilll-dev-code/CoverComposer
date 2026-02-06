import React from 'react';
const moods = [
  { id: 'happy', icon: '😊' }, { id: 'sad', icon: '😢' },
  { id: 'energetic', icon: '⚡' }, { id: 'calm', icon: '🧘' },
  { id: 'mysterious', icon: '🌌' }
];
const MoodSelector = ({ selected, onChange }) => (
  <div className="control-group">
    <label>Mood</label>
    <div className="mood-grid">
      {moods.map(m => (
        <button key={m.id} className={`mood-card ${selected === m.id ? 'active' : ''}`} onClick={() => onChange(m.id)}>
          <div>{m.icon}</div>
          <small>{m.id}</small>
        </button>
      ))}
    </div>
  </div>
);
export default MoodSelector;