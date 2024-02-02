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
                <p>
                    Duration:{' '}
                    <span className="gray">May 2023 - Jan 2024 (8 Months)</span>
                </p>
                <p>
                    Position: <span className="gray">Lead Developer</span>
                </p>
                <p>
                    Responsibility:{' '}
                    <span className="gray">
                        Led development in both mobile (React Native) and Cloud
                        functions (Firebase Functions). Enforced coding
                        conventions and good practices. Facilitated the growth
                        of the development team - leading by example.
                    </span>
                </p>
            </div>
        </>
    );
};

export default FullDetails;
