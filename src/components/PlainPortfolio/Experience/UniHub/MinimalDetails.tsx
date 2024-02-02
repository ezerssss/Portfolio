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
                        <a
                            href="https://play.google.com/store/apps/details?id=com.unihubteam.unihub&hl=en&gl=US"
                            target="_blank"
                            rel="noreferrer"
                        >
                            UniHub
                        </a>
                    </u>{' '}
                    (May 2023 - Jan 2024){' '}
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
            <p className="indent">Lead Developer</p>
        </>
    );
};

export default MinimalDetails;
