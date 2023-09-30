import React from "react";
import ResumeHeading from "../ResumeHeading";

const Projects = ({ projectsDetails }) => {
  return (
    <div className="resume-screen-container projects-container" key="projects">
      {projectsDetails.map((project, index) => (
        <ResumeHeading
          className="project-data"
          projectUrl={project.projectUrl}
          key={index}
          heading={project.title}
          subHeading={project.subHeading}
          description={project.description}
          fromDate={project.duration.fromDate}
          toDate={project.duration.toDate}
          category="projects"
        />
      ))}
    </div>
  );
};

export default Projects;
