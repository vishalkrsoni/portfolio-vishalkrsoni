import React from 'react';
import ResumeHeading from './ResumeHeading'; // Assuming you have a ResumeHeading component

const Experience = ({ heading, subHeading, fromDate, toDate, descriptions }) => {
  return (
    <div className="experience-container">
      <ResumeHeading heading={heading} subHeading={subHeading} fromDate={fromDate} toDate={toDate} />
      <div className="experience-description">
        {descriptions.map((text, index) => (
          <span className="resume-description-text" key={index}>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
