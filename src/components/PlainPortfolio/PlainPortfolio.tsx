import React from 'react';
import Experience from './Experience/Experience';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import './PlainPortfolio.css';
import Projects from './Projects/Projects';

interface IProps {
  showCommandLine: boolean;
  setShowCommandLine: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlainPortfolio = (props: IProps) => {
  const { showCommandLine, setShowCommandLine } = props;
  return (
    <>
      <div
        id="plain-container"
        style={showCommandLine ? { filter: 'blur(10px)' } : {}}
      >
        <div>
          <u
            className="gray"
            style={{ float: 'right' }}
            onClick={() => setShowCommandLine(true)}
          >
            open terminal
          </u>
          <PersonalDetails />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default PlainPortfolio;
