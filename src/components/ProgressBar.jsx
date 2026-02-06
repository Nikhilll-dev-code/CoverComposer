import React from 'react';
const ProgressBar = ({ progress }) => (
  <div style={{width: '100%'}}>
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <span>AI Composition in progress...</span>
      <span>{progress}%</span>
    </div>
    <div className="progress-bar-container">
      <div className="progress-fill" style={{ width: `${progress}%` }}></div>
    </div>
  </div>
);
export default ProgressBar;