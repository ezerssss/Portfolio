import React from 'react';
import './CommandLine.css';

const CommandLineHelp = () => {
  return (
    <div>
      C:\{'>'} Skills{' '}
      <ul>
        <li>
          <div style={{ display: 'flex', gap: '5px' }}>
            Type 'quit' or click the 'close' or{' '}
            <div id="close-inline" className="circle"></div> to view my
            portfolio in text mode
          </div>
        </li>
        <li>Type 'shprojects' to show my projects and skills</li>
        <li>Type 'help' to show help</li>
        <li>Type 'cls' to clear the terminal</li>
      </ul>
    </div>
  );
};

export default CommandLineHelp;
