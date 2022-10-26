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
                            href="https://www.symph.co/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Symph
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
                    <span className="gray">
                        July - September 2022 (3 Months)
                    </span>
                </p>
                <p>
                    Position: <span className="gray">Web Developer Intern</span>
                </p>
            </div>
        </>
    );
};

export default FullDetails;
