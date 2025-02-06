import React from 'react';
import Sarangi from './components/Sarangi/Sarangi';
import Logger from './components/Logger/Logger';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import useSarangiPlayer from './hooks/useSarangiPlayer';

const App = () => {
  const { strings, keysLogged, handleClick } = useSarangiPlayer();

  return (
    <ErrorBoundary>
      <div className="app">
        <ErrorBoundary>
          <Sarangi strings={strings} handleClick={handleClick} />
        </ErrorBoundary>
        <ErrorBoundary>
          <Logger keysLogged={keysLogged} />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default App;