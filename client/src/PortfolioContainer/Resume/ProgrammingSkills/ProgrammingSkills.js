// programmingSkills.js

import React from "react";

const ProgrammingSkills = ({ programmingSkillsDetails }) => {
  return (
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills">
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgrammingSkills;
