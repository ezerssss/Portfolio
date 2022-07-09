import React from 'react';
import './CommandLine.css';

interface IProps {
  showSkills: boolean;
}

const CommandLineDetails = (props: IProps) => {
  const { showSkills } = props;
  return (
    <>
      {showSkills && (
        <div>
          C:\{'>'} Skills{' '}
          <ul>
            <li>HTML</li>
            <li>CSS (Styled-Components, Bootstrap)</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Node</li>
            <li>React</li>
            <li>Express</li>
            <li>Python</li>
          </ul>
        </div>
      )}

      <div>
        C:\{'>'} Projects{' '}
        <ul>
          <li>
            Skvllpvnkz Website (
            <u>
              <a
                href="https://app.skvllpvnkz.io/"
                rel="noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            </u>
            , <span>Front End Developer</span>)
          </li>
          <li>
            Gayang Mingor Palanca Website (
            <u>
              <a
                href="https://gayang-mingor-palancas.vercel.app/"
                rel="noreferrer"
                target="_blank"
              >
                Live Site
              </a>
            </u>
            ,{' '}
            <u>
              <a
                href="https://github.com/ezerssss/Gayang-Mingor-Palanca"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
            </u>
            )
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommandLineDetails;
