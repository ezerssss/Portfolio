import React, { useCallback, useRef, useState } from 'react';
import CommandLineDetails from './CommandLineDetails';
import './CommandLine.css';
import { copyToClipboard } from '../../helpers/clipboard';
import CommandLineHelp from './CommandLineHelp';
import { commands } from '../../constants/commands';

interface IProps {
  setShowCommandLine: React.Dispatch<React.SetStateAction<boolean>>;
}

const CommandLine = (props: IProps) => {
  const { setShowCommandLine } = props;
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [showCommandLineDetails, setShowCommandLineDetails] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showCommandLineHelp, setShowCommandLineHelp] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const commandHistoryLimit = showSkills ? 3 : 11;

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const clearCommandHistory = useCallback(() => {
    setShowCommandLineDetails(false);
    setShowCommandLineHelp(false);
    setCommandHistory([]);
    focusInput();
  }, []);

  const handleCommandLineDetails = () => {
    if (showSkills) {
      return setShowSkills(false);
    }
    setShowCommandLineDetails(false);
  };

  const addCommandToHistory = (command: string) => {
    if (commandHistory.length >= commandHistoryLimit) {
      if (showCommandLineDetails) {
        return handleCommandLineDetails();
      }
      const reducedHistory = commandHistory.slice(1);
      return setCommandHistory([...reducedHistory, command]);
    }
    setCommandHistory([...commandHistory, command]);
  };

  const handleCopy = (text: string) => {
    addCommandToHistory('Copied email address to clipboard');
    copyToClipboard(text);
    focusInput();
  };

  const handleHelp = () => {
    clearCommandHistory();
    setShowCommandLineHelp(true);
  };

  const handleInput = (event: any) => {
    if (event.key !== 'Enter') {
      return;
    }
    const inputtedCommand = event.target.value.toLowerCase();
    if (commands.find((command) => command === inputtedCommand)) {
      clearCommandHistory();
      if (inputtedCommand === 'shprojects') {
        setShowSkills(true);
        setShowCommandLineDetails(true);
      } else if (inputtedCommand === 'help') {
        setShowCommandLineHelp(true);
      }
    }
    event.target.value = '';
  };

  const closeCommandLine = () => setShowCommandLine(false);

  return (
    <div id="command-line" onClick={() => focusInput()}>
      <div style={{ height: '97%' }}>
        <span>
          <p>
            Ezra Magbanua{' '}
            <small onClick={() => handleCopy('magbanuaezra@gmail.com')}>
              [magbanuaezra@gmail.com]
            </small>
          </p>
          <div id="close" className="circle" onClick={closeCommandLine}></div>
          <div id="resize" className="circle" onClick={closeCommandLine}></div>
          <div id="hide" className="circle" onClick={closeCommandLine}></div>
        </span>
        <p style={{ marginBottom: '15px' }}>
          Full-stack Developer. [React, Express, Firebase]
        </p>
        {showCommandLineDetails && (
          <CommandLineDetails showSkills={showSkills} />
        )}
        {showCommandLineHelp && <CommandLineHelp />}
        {commandHistory.map((command, index) => (
          <p key={index}>
            C:\{'>'} {command}
          </p>
        ))}
        <span>
          C:\{'>'}
          <input autoFocus ref={inputRef} onKeyDown={handleInput} />
        </span>
      </div>
      <div className="flex" style={{ gap: '15px' }}>
        <u onClick={clearCommandHistory}>clear </u>
        <u onClick={closeCommandLine}>close </u>
        <u onClick={handleHelp}>help </u>
      </div>
    </div>
  );
};

export default CommandLine;
