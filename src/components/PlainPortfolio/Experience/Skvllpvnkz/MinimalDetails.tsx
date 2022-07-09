import React from 'react';
import plusSignLogo from '../../../../images/plus.png';

interface IProps {
  showFullDetails: boolean;
  setShowFullDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const MinimalDetails = (props: IProps) => {
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
          (Jan - May 2022){' '}
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
      <p className="indent">Full-stack Front End Developer</p>
    </>
  );
};

export default MinimalDetails;
