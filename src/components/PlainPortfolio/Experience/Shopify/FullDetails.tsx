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
                        <a>CONVO | E-Commerce Agency</a>
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
                        September - November 2022 (3 Months)
                    </span>
                </p>
                <p>
                    Position:{' '}
                    <span className="gray">Shopify Theme Developer</span>
                </p>
                <p>
                    Responsibility:{' '}
                    <span className="gray">
                        Developed and customized themes. Provided support for
                        various clients in customizing and adjusting their
                        shopify stores.
                    </span>
                </p>
            </div>
        </>
    );
};

export default FullDetails;
