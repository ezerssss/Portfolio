import React from 'react';
import plusSignLogo from '../../../../images/plus.png';

interface IProps {
  showFullDetails: boolean;
  setShowFullDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const FullDetails = (props: IProps) => {
  const { showFullDetails, setShowFullDetails } = props;
  return (
    <>
      <h3>
        <span>
          <u>
            <a href="https://skvllpvnkz.io/" target="_blank" rel="noreferrer">
              Skvllpvnkz
            </a>
          </u>{' '}
          <img
            src={plusSignLogo}
            alt="See more"
            height={13}
            width={13}
            className="plus"
            onClick={() => {
              setShowFullDetails(!showFullDetails);
            }}
          />
        </span>
      </h3>
      <div className="indent">
        <p>
          Duration: <span className="gray">January - May 2022 (5 Months)</span>
        </p>
        <p>
          Position: <span className="gray">Full-stack Front End Developer</span>
        </p>
        <p>
          Responsibility:{' '}
          <span className="gray">
            Created all of the main functions and UI of the Web3 DApp. Was
            responsible in integrating both backend services and solidity
            contracts.
          </span>
        </p>
      </div>
    </>
  );
};

export default FullDetails;
