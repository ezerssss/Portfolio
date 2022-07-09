import React, { useState } from 'react';
import plusSignLogo from '../../../images/plus.png';
import FadeInOut from '../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';

const PersonalDetails = () => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  return (
    <>
      <h1>
        <span>
          Ezra I. Magbanua{' '}
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
      </h1>
      <div className="indent">
        <FadeInOut show={showFullDetails} children={<FullDetails />} />
        <FadeInOut show={!showFullDetails} children={<MinimalDetails />} />
      </div>
    </>
  );
};

export default PersonalDetails;
