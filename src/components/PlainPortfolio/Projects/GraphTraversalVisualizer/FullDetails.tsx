import Graph from '../../../../images/graph.png';

const FullDetails = () => {
    return (
        <>
            <p>
                Technologies Used:{' '}
                <span className="gray">React | Typescript</span>
            </p>
            <p>
                Description:{' '}
                <span className="gray">
                    A simple grid graph traversal visualizer.
                </span>
            </p>
            <img alt="graph" width="100%" src={Graph} />
            <p className="gray">
                Visit the GitHub Repo:{' '}
                <u>
                    <a
                        href="https://github.com/ezerssss/graph-traversal-visualizer"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/ezerssss/graph-traversal-visualizer
                    </a>
                </u>
            </p>
        </>
    );
};

export default FullDetails;
