import React from "react";
import Experience from "./experience";

const WorkExperience = () => {
  return (
    <div
      className="resume-screen-container work-experience-container"
      key="work-experience">
      <Experience
        heading="IndoAlpine Labs"
        subHeading="Operations Head"
        fromDate="Jan'18"
        toDate="Oct'19"
        descriptions={[
          "Worked on operations and marketing and the strategies.",
          "- Managed front desk operations and customer interactions. Evaluated workflow and productivity by making changes where necessary.",
          "- Identified and resolved unauthorized, unsafe or ineffective practices, requirements, and challenges of our business.",
          "- Arranged necessary meetings with the suppliers and smoothly cracked the deal.",
        ]}
      />

      <Experience
        heading="PrepLeaf"
        subHeading="System Engineer"
        fromDate="Oct'19"
        toDate="Nov'20"
        descriptions={[
          "Worked on Operations, database, and UI design.",
          "- Used ReactJs, Redux for app and state management.",
          "- Implemented and updated PrepSeed application module.",
          "- Carried out day-by-day duties accurately and efficiently.",
        ]}
      />

      <Experience
        heading="FlipTree Technologies"
        subHeading="SERVER DEVELOPER"
        fromDate="Feb'22"
        toDate="June'22"
        descriptions={[
          "Worked as a server developer using Java and NodeJs.",
          "- Effectively coded software changes and alterations based on specific design specifications for FlipTree app.",
          "- Implemented the APIs required for our Lumi matrimony app, after learning JavaScript and NodeJs technologies.",
          "- Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues.",
        ]}
      />
    </div>
  );
};

export default WorkExperience;
