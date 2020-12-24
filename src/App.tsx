import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Note: imports from src/tailwindcss-classnames, not the actual npm package. See compilerOptions.baseUrl in tsconfig.json
import { classnames } from 'tailwindcss-classnames';

const bg = classnames('bg-ch-pink');

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <p className={classnames(bg, 'text-black', 'p-4', 'rounded', 'mb-4')}>Tailwind, with built-in tooling for custom configs</p>
        <iframe
          width="560"
          height="315"
          // Chopin - Complete Nocturnes (Brigitte Engerer)
          src="https://www.youtube-nocookie.com/embed/liTSRH4fix4"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </header>
    </div>
  );
}

export default App;
