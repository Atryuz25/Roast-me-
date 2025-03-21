import React, { useState } from 'react';

const RoastForm = ({ onSubmit, isLoading, level, setLevel }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <i className="fas fa-comment-alt input-icon"></i>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter message"
          disabled={isLoading}
        />
      </div>
      <div className="level-buttons">
        <button
          type="button"
          className={`level-btn ${level === 'Mild' ? 'active' : ''}`}
          onClick={() => setLevel('Mild')}
          disabled={isLoading}
        >
          <i className="fas fa-leaf"></i> Mild
        </button>
        <button
          type="button"
          className={`level-btn ${level === 'Spicy' ? 'active' : ''}`}
          onClick={() => setLevel('Spicy')}
          disabled={isLoading}
        >
          <i className="fas fa-pepper-hot"></i> Spicy
        </button>
        <button
          type="button"
          className={`level-btn ${level === 'Extreme' ? 'active' : ''}`}
          onClick={() => setLevel('Extreme')}
          disabled={isLoading}
        >
          <i className="fas fa-bomb"></i> Extreme
        </button>
      </div>
      <button type="submit" disabled={isLoading}>
        <i className="fas fa-fire"></i> {isLoading ? 'Roasting...' : 'Roast Me!'}
      </button>
    </form>
  );
};

export default RoastForm;