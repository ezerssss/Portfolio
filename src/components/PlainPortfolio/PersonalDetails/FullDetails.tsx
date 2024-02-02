import React from 'react';
import { copyToClipboard } from '../../../helpers/clipboard';
import personal from '../../../images/personal.png';

const FullDetails = () => {
    return (
        <div className="flex" style={{ flexWrap: 'wrap' }}>
            <img src={personal} alt="personal" id="face" height={400} />
            <div>
                <p>
                    Address: <span className="gray">Cebu, Philippines</span>
                </p>
                <p>
                    Mobile Number:{' '}
                    <span
                        className="gray pointer"
                        onClick={() => {
                            copyToClipboard('magbanuaezra@gmail.com');
                        }}
                    >
                        09109607543
                    </span>
                </p>
                <p>
                    Email Address:{' '}
                    <span
                        className="gray pointer"
                        onClick={() => {
                            copyToClipboard('magbanuaezra@gmail.com');
                        }}
                    >
                        magbanuaezra@gmail.com
                    </span>
                </p>
                <p>
                    Description:{' '}
                    <span className="gray">
                        Experienced and versatile professional with a strong
                        background in web technologies, including React,
                        Next.js, HTML, CSS, JavaScript, and GCP services such as
                        Firebase and Cloud functions. As the main frontend
                        developer for a crypto startup, I contributed to the
                        success of the project. Additionally, I served as an
                        intern, actively participating in the development of
                        internal tools. My freelancing experience extends to
                        Shopify, where I successfully undertook various
                        projects. As the head software developer for a startup,
                        I managed all aspects of application development,
                        specializing in React Native for frontend development
                        and gaining valuable insights into cloud services,
                        including expertise in cloud functions and overall cloud
                        development.
                    </span>
                </p>
                <h3>Education</h3>
                <div className="indent">
                    <h4>College</h4>
                    <div className="indent gray">
                        <p>University of the Philippines Visayas</p>
                        <p>BS Computer Science (2022 - Ongoing)</p>
                    </div>
                    <h4>High School</h4>
                    <div className="indent gray">
                        <p>
                            Philippine Science High School - Central Visayas
                            Campus (2016 - 2022)
                        </p>
                        <p>Graduated with High Honors</p>
                        <p>
                            Physics Core - Computer Science Elective &
                            Agriculture Elective
                        </p>
                    </div>
                </div>
                <h3>Interests</h3>
                <div className="indent">
                    <p>Gaming</p>
                    <p>Sleeping</p>
                    <p>Coding</p>
                    <p>Geting a lot of money</p>
                </div>
            </div>
        </div>
    );
};

export default FullDetails;
