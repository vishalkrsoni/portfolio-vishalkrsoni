import React from "react";
import Marquee from "react-fast-marquee";
import { skillsData } from "./skillsData";
import { skillsImage } from "./skillsImage";
import "./skills.css";

function Skills() {
  return (
    <div className="skills" style={{ backgroundColor: "white" }}>
      {/* <div className="skillsHeader">
        <h5>Skills</h5>
      </div> */}
      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left">
            {skillsData.map((skill, id) => (
              <div className="skill--box" key={id}>
                <img src={skillsImage(skill)} alt={skill} />
                <h3 style={{ color: "tomato" }}>{skill}</h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
