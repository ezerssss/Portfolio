import React, { useState } from 'react';
import './App.css';
import CommandLine from './components/CommandLine/CommandLine';
import PlainPortfolio from './components/PlainPortfolio/PlainPortfolio';

const App = () => {
  const [showCommandLine, setShowCommandLine] = useState(false);
  return (
    <div className="flex" style={{ marginTop: '10px' }}>
      {showCommandLine && (
        <CommandLine setShowCommandLine={setShowCommandLine} />
      )}
      <PlainPortfolio
        showCommandLine={showCommandLine}
        setShowCommandLine={setShowCommandLine}
      />
    </div>
  );
};

export default App;
