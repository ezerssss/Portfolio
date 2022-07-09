import React, { useState } from 'react';
import FadeInOut from '../../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';
import plusSignLogo from '../../../../images/plus.png';

const Skvllpvnkz = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <>
      <h3>
        <span>
          <u>
            <a
              href="https://app.skvllpvnkz.io/"
              target="_blank"
              rel="noreferrer"
            >
              Skvllpvnkz Web3 DApp
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
        <FadeInOut show={showFullDetails} children={<FullDetails />} />
        <FadeInOut show={!showFullDetails} children={<MinimalDetails />} />
      </div>
    </>
  );
};

export default Skvllpvnkz;
