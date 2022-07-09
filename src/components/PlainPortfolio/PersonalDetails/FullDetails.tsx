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
            Full-stack Web Developer based in Cebu, Philippines. Hard worker
            with a burning passion in learning new things about technology
            everyday. Interested in finding the best solutions to complex
            problems. Always reading about the latest Industry standards. HARD
            WORKER, PASSIONATE, DEDICATED.
          </span>
        </p>
        <h3>Education</h3>
        <div className="indent">
          <h4>High School</h4>
          <div className="indent gray">
            <p>
              Philippine Science High School - Central Visayas Campus (2016 -
              2022)
            </p>
            <p>Graduated with High Honors</p>
            <p>
              Physics Core - Computer Science Elective & Agriculture Elective
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
