import uprev1 from '../../../../images/uprev1.png';
import uprev2 from '../../../../images/uprev2.png';
import uprev3 from '../../../../images/uprev3.png';
import uprev4 from '../../../../images/uprev4.png';
import uprev5 from '../../../../images/uprev5.png';
import uprev6 from '../../../../images/uprev6.png';

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
                    Web application for UP students where they can take and
                    create quizzes.
                </span>
            </p>
            <div className="gray">
                <img alt="login page" width="100%" src={uprev1} />
                <p>Login to the site using an @up.edu.ph email</p>
                <img alt="homepage" width="100%" src={uprev2} />
                <p>
                    Home page where students can pick which subject to take
                    quizzes from.
                </p>
                <img alt="create quiz homepage" width="100%" src={uprev3} />
                <p>
                    Students can also create their own quizzes which to help
                    their fellow students
                </p>
                <img alt="quiz list" width="100%" src={uprev4} />
                <p>The list of student created quizzes</p>
                <img alt="quiz page" width="100%" src={uprev5} />
                <p>A sample quiz</p>
                <img alt="create quiz" width="100%" src={uprev6} />
                <p>Students can also create their own quizzes</p>
            </div>
            <p className="gray">
                Visit the GitHub Repo:{' '}
                <u>
                    <a
                        href="https://github.com/ezerssss/uprev"
                        target="_blank"
                        rel="noreferrer"
                    >
                        https://github.com/ezerssss/uprev
                    </a>
                </u>
            </p>
        </>
    );
};

export default FullDetails;
