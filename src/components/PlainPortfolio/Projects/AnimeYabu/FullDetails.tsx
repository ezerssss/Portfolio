import AnimeYabu from '../../../../images/animeyabu.png';

const FullDetails = () => {
    return (
        <>
            <p>
                Technologies Used:{' '}
                <span className="gray">
                    React | Typescript | Firebase Authentication | Firestore |
                    TailwindCSS
                </span>
            </p>
            <p>
                Description:{' '}
                <span className="gray">
                    A simple website to test out Firebase Authentication.
                </span>
            </p>
            <img alt="animeyabu." width="100%" src={AnimeYabu} />
            <p className="gray">
                Visit the GitHub Repo:{' '}
                <u>
                    <a
                        href="https://github.com/ezerssss/anime-yabu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/ezerssss/anime-yabu
                    </a>
                </u>
            </p>
        </>
    );
};

export default FullDetails;
