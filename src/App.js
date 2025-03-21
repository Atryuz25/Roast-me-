import React, { useState } from 'react';
import './App.css';
import RoastForm from './components/RoastForm';
import RoastResponse from './components/RoastResponse';

const App = () => {
  const [userInput, setUserInput] = useState('');
  const [roast, setRoast] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [level, setLevel] = useState('Mild'); // Track selected level

  const handleSubmit = async (input) => {
    setUserInput(input);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/roast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ message: input, level }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRoast(data.roast || `Error: ${data.error || 'Unknown error'}`);
    } catch (error) {
      setRoast(`Failed to get roast: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <i className="fas fa-fire-alt"></i> Roast Me Bot
        </h1>
        <main>
          <RoastForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            level={level}
            setLevel={setLevel}
          />
          <RoastResponse roast={roast} isLoading={isLoading} />
        </main>
      </header>
    </div>
  );
};

export default App;