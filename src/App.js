import React from 'react';
import Sarangi from './components/Sarangi/Sarangi';
import Logger from './components/Logger/Logger';
import useSarangiPlayer from './hooks/useSarangiPlayer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import './App.scss';

const App = () => {
  const { keysLogged, handleClick } = useSarangiPlayer();

  return (
    <ErrorBoundary>
      <div className="app">
        <h1>Sarangi</h1>
        <ErrorBoundary>
          <Sarangi handleClick={handleClick} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Logger keysLogged={keysLogged} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App; 