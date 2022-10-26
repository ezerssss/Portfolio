import React, { useState } from 'react';
import plusSignLogo from '../../../../images/plus.png';
import FadeInOut from '../../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';

const Uprev = () => {
    const [showFullDetails, setShowFullDetails] = useState(false);

    return (
        <>
            <h3>
                <span>
                    <u>
                        <a
                            href="https://uprev.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            uprev.
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

export default Uprev;
