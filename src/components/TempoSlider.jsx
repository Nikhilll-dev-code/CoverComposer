import React from 'react';
const TempoSlider = ({ value, onChange }) => (
  <div className="control-group">
    <label>Tempo: {value} BPM</label>
    <input type="range" min="60" max="200" value={value} onChange={(e) => onChange(e.target.value)} className="modern-slider" style={{width: '100%'}} />
  </div>
);
export default TempoSlider;