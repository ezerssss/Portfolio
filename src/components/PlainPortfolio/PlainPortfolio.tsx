import React from 'react';
import Experience from './Experience/Experience';
import PersonalDetails from './PersonalDetails/PersonalDetails';
import './PlainPortfolio.css';
import Projects from './Projects/Projects';
import Plus from '../../images/plus.png';

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
        style={
          showCommandLine ? { filter: 'blur(10px)', pointerEvents: 'none' } : {}
        }
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
          <p className="gray" style={{ marginTop: '50px' }}>
            <span>
              \\ click the <img src={Plus} alt="+" height={10} width={10} /> for
              more info
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default PlainPortfolio;
