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
                            href="https://www.symph.co/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Symph
                        </a>
                    </u>{' '}
                    (Jul - Sep 2022){' '}
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
            <p className="indent">Web Developer Intern</p>
        </>
    );
};

export default MinimalDetails;
