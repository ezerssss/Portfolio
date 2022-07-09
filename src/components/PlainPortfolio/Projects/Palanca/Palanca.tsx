import React, { useState } from 'react';
import plusSignLogo from '../../../../images/plus.png';
import FadeInOut from '../../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';

const Palanca = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <>
      <h3>
        <span>
          <u>
            <a
              href="https://gayang-mingor-palancas.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Gayang Mingor Palanca
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

export default Palanca;
