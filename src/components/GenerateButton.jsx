import React from 'react';

const GenerateButton = ({ onClick, isLoading }) => {
  return (
    <button 
      className={`generate-btn ${isLoading ? 'loading' : ''}`}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <span className="spinner-text">✨ Composing...</span>
      ) : (
        "Generate Music"
      )}
    </button>
  );
};

export default GenerateButton;