import React, { useState } from 'react';
import plusSignLogo from '../../../../images/plus.png';
import FadeInOut from '../../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';

const UniHub = () => {
    const [showFullDetails, setShowFullDetails] = useState(false);

    return (
        <>
            <h3>
                <span>
                    <u>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.unihubteam.unihub&hl=en&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            UniHub
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
                <FadeInOut
                    show={!showFullDetails}
                    children={<MinimalDetails />}
                />
            </div>
        </>
    );
};

export default UniHub;
