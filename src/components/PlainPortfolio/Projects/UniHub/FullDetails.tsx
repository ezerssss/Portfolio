import unihub1 from '../../../../images/unihub-homepage.png';
import unihub2 from '../../../../images/unihub-buy.png';
import unihub3 from '../../../../images/unihub-sell.png';
import uprev4 from '../../../../images/uprev4.png';
import uprev5 from '../../../../images/uprev5.png';
import uprev6 from '../../../../images/uprev6.png';

const FullDetails = () => {
    return (
        <>
            <p>
                Technologies Used:{' '}
                <span className="gray">
                    React Native | Expo | Typescript | Firebase | Firestore |
                    Firebase Cloud Functions | Algolia Search | Mixpanel |
                    TailwindCSS
                </span>
            </p>
            <p>
                Description:{' '}
                <span className="gray">
                    Looking for an old textbook? What about Arduino kits?
                    Clothes? Anything at all - someone from your school might be
                    selling it! UniHub is an all in one university marketplace
                    made by students, for the students.
                </span>
            </p>
            <div
                className="gray"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <img alt="unihub home page" width="50%" src={unihub1} />
                <p>Find stuff from your college!</p>
                <img alt="buy" width="50%" src={unihub2} />
                <p>A cool way of buying at school!</p>
                <img alt="sell" width="50%" src={unihub3} />
                <p>Selling made easy for students!</p>
            </div>
        </>
    );
};

export default FullDetails;
