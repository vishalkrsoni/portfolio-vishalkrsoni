import React from "react";
import ResumeHeading from "./ResumeHeading";

const Interests = () => {
  return (
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Chess"
        description="I love to play chess and have won notable prizes including Gold and Silver medals."
      />
      <ResumeHeading
        heading="Poetry"
        description="Literature is something which always captivated me, apart from coding. So, I love to scribble my thoughts out most often."
      />
      <ResumeHeading
        heading="Poker"
        description="I like to challenge my reflexes, decision making and calculations a lot while trying to read out the person sitting in front.
      pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>
  );
};

export default Interests;
