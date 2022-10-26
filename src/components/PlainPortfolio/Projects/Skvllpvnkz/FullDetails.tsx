import React from 'react';
import HideoutPage from '../../../../images/skvllpvnkz2.png';
import StorePage from '../../../../images/skvllpvnkz3.png';
import GalleryPage from '../../../../images/skvllpvnkz4.png';

const FullDetails = () => {
    return (
        <>
            <p>
                Technologies Used:{' '}
                <span className="gray">
                    React | Typescript | Firebase | Web3 SDK (ethers.js)
                </span>
            </p>
            <p>
                Description:{' '}
                <span className="gray">
                    An all-in-one website for Skvllpvnkz NFT (non-fungible
                    token) owners where they can browse for other NFTs in the
                    same collection, earn "ammo" tokens; spend them in raffles,
                    and other digital items.
                </span>
            </p>

            <h3>Some of the Pages I made</h3>
            <div className="gray">
                <img
                    src={HideoutPage}
                    alt="Hideout Page"
                    width="100%"
                    className="skvllpvnkz-image"
                />
                <p>
                    Page where a counter is updating in sync with other pages
                    (done using Redux). This is the page where they can earn
                    "ammo" tokens.
                </p>
                <img
                    src={StorePage}
                    alt="Store Page"
                    width="100%"
                    className="skvllpvnkz-image"
                />
                <p>
                    The store page where they can buy digital items using the
                    'ammo' tokens. These items are limited; that's why they have
                    an 'open' period (this is handled by listening to a
                    Firestore event).
                </p>
                <img
                    src={GalleryPage}
                    alt="Store Page"
                    width="100%"
                    className="skvllpvnkz-image"
                />
                <p>
                    The Gallery Page where 10, 000 NFT Images are shown. Various
                    techniques were used to implement this system (Lazy Loading,
                    React.memo, useCallbacks and other React optimizations)
                </p>
            </div>
        </>
    );
};

export default FullDetails;
