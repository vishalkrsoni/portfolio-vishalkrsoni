import React from "react";
import ResumeHeading from "../ResumeHeading";

const Education = () => {
  return (
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Jaypee Institute of Information Technology, Noida"}
        subHeading={"BACHELOR OF TECHNOLOGY (Computer Science)"}
        fromDate={"2013"}
        toDate={"2017"}
      />

      <ResumeHeading
        heading={"Gulab Memorial College, Bettiah "}
        subHeading={"INTERMEDIATE (PCM)"}
        fromDate={"2010"}
        toDate={"2012"}
      />
      <ResumeHeading
        heading={"Jawahar Navodaya Vidyalaya, Vrindavan"}
        subHeading={"HIGH SCHOOL (Matriculation)"}
        fromDate={"2005"}
        toDate={"2010"}
      />
    </div>
  );
};

export default Education;
