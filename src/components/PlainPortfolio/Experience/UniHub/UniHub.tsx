import React, { useState } from 'react';
import FadeInOut from '../../../FadeInOut';
import FullDetails from './FullDetails';
import MinimalDetails from './MinimalDetails';

const UniHub = () => {
    const [showFullDetails, setShowFullDetails] = useState(false);

    return (
        <>
            <FadeInOut
                show={showFullDetails}
                children={
                    <FullDetails
                        showFullDetails={showFullDetails}
                        setShowFullDetails={setShowFullDetails}
                    />
                }
            />

            <FadeInOut
                show={!showFullDetails}
                children={
                    <MinimalDetails
                        showFullDetails={showFullDetails}
                        setShowFullDetails={setShowFullDetails}
                    />
                }
            />
        </>
    );
};

export default UniHub;
