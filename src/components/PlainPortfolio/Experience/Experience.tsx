import React from 'react';
import Skvllpvnkz from './Skvllpvnkz/Skvllpvnkz';
import Symph from './Symph/Symph';
import Shopify from './Shopify/Shopify';
import UniHub from './UniHub/UniHub';

const Experience = () => {
    return (
        <>
            <h1>Experience</h1>
            <div className="indent">
                <UniHub />
                <Shopify />
                <Symph />
                <Skvllpvnkz />
            </div>
        </>
    );
};

export default Experience;
