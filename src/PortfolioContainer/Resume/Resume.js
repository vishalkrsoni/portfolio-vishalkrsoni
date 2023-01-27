import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* Re-usable component--headings */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"> </div>
          <span>
            
            {props.category === "projects" ? (
              <a href={props.projectUrl ? props.projectUrl : " "}>
                {props.heading ? props.heading : ""}
              </a>
            ) : props.heading ? (
              props.heading
            ) : (
              ""
            )}
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 97 },
    { skill: "React JS", ratingPercentage: 91 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 90 },
    { skill: "Core Java", ratingPercentage: 85 },
    { skill: "SpringBoot", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "SQL", ratingPercentage: 95 },
   

  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      projectUrl: "https://talkies-8bc89.web.app/",
      duration: { fromDate: "June'22", toDate: "July'22" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: ReactJs, Bootsrap, NodeJs, ExpressJs ",
    },
    {
      title: "Talkies",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "Sept'22", toDate: "Nov'22" },
      description:
        "A movie platform which can handle a load of 10000 users. Where users can watch their favourite movies and Web-Series. I've also implemented subscription model and Stripe payment module",
      subHeading:
        "Technologies Used: FireBase, ReactJs, NodeJs, ExpressJs, Stripe",
    },
    {
      title: "Easy-Buy",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application designed to sell products online wth payment system integration place.",
      subHeading: "Technologies Used: React JS, Redux, ExpressJs, NodeJs",
    },
    {
      title: "Be-In-Touch",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A real-time chatting application which provides us calling feature as well.",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux,SocketIo",
    },
    {
      title: "My-Moments ",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An application which allows users to share theirs momeries by sharing their memories in terms of Images and GeoLocation",
      subHeading:
        "Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux, Google-Geo-Location",
    },
  ];

  const resumeDetails = [
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
    </div>,

    /* WORK EXPERIENCE */
    <div
      className="resume-screen-container work-experience-container"
      key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"IndoAlpine Labs"}
          subHeading={"Operations Head"}
          fromDate={"Jan'18"}
          toDate={"June'19"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked on operations and marketing and the strategies.
          </span>
        </div>

        <div className="experience-description">
          <span className="resume-description-text">
            - Managed front desk operations and customer interactions. Evaluated
            workflow and productivity by making changes where necessary.
          </span>
          <br />
          <span className="resume-description-text">
            - Identified and resolved unauthorized, unsafe or ineffective
            practices, requirements and challenges of our business.
          </span>
          <br />
          <span className="resume-description-text">
            -Arranged necessary meetings with the suppliers and smoothly cracked
            the deal.{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"PrepLeaf"}
          subHeading={"Software Intern"}
          fromDate={"July'19"}
          toDate={"Mar'20"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked on Operations, database and UI design.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Used ReactJs , Redux for app and state management.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented and updated PrepSeed application module.
          </span>
          <br />
          <span className="resume-description-text">
            -Carried out day-by-day duties accurately and efficiently.{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"FlipTree Technologies"}
          subHeading={"SERVER DEVELOPER"}
          fromDate={"Feb'22"}
          toDate={"June'22"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Worked as a server developer using Java and NodeJs.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Effectively coded software changes and alterations based on
            specific design specifications for FlipTree app.
          </span>
          <br />
          <span className="resume-description-text">
            - Implemented the API's required for our Lumi matrimony app, after
            learning JavaScript and NodeJs technologies.
          </span>
          <br />
          <span className="resume-description-text">
            -Successfully identified, diagnosed, and fixed website problems,
            including broken links, typographical errors, and formatting issues.{" "}
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
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
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container projects-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          className="project-data"
          projectUrl={projectsDetails.projectUrl}
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          category="projects"
        />
      ))}
    </div>,

    /* Interests */
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
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}>
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal">
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
