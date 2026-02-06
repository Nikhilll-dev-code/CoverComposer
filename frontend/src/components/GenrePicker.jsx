import React from 'react';
const genres = ['Pop', 'Rock', 'Jazz', 'Electronic', 'Classical'];
const GenrePicker = ({ selected, onChange }) => (
  <div className="control-group">
    <label>Genre</label>
    <div className="genre-pill-container">
      {genres.map(g => (
        <button key={g} className={`genre-pill ${selected === g.toLowerCase() ? 'active' : ''}`} onClick={() => onChange(g.toLowerCase())}>
          {g}
        </button>
      ))}
    </div>
  </div>
);
export default GenrePicker;