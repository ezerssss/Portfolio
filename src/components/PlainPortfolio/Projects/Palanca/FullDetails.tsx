import React from 'react';
import PalancaDemo from '../../../../images/palanca.mp4';

const FullDetails = () => {
  return (
    <>
      <p>
        Technologies Used:{' '}
        <span className="gray">Node, React Typescript, Firebase</span>
      </p>
      <p>
        Description:{' '}
        <span className="gray">
          A personal website developed for my High School Batch. A place where
          other people (aimed at younger batches) can send us letters, whether
          anonymously or not.
        </span>
      </p>
      <video controls width="100%">
        <source
          src={PalancaDemo}
          type="video/mp4"
          className="skvllpvnkz-image"
        />
      </video>
      <p className="gray">
        Visit the GitHub Repo:{' '}
        <u>
          <a
            href="https://github.com/ezerssss/Gayang-Mingor-Palanca"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/ezerssss/Gayang-Mingor-Palanca
          </a>
        </u>
      </p>
    </>
  );
};

export default FullDetails;
