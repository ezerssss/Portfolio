import React from 'react';
import AnimeYabu from './AnimeYabu/AnimeYabu';
import GraphTraversalVisualizer from './GraphTraversalVisualizer/GraphTraversalVisualizer';
import Palanca from './Palanca/Palanca';
import Skvllpvnkz from './Skvllpvnkz/Skvllpvnkz';
import Uprev from './Uprev/Uprev';

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>
            <div className="indent">
                <Uprev />
                <Skvllpvnkz />
                <Palanca />
                <GraphTraversalVisualizer />
                <AnimeYabu />
            </div>
        </>
    );
};

export default Projects;
