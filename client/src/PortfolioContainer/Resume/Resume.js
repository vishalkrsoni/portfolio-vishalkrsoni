import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import Skills from "../Skills/Skills";

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
              <a href={props.projectUrl ? props.projectUrl : ""}>
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
    { skill: "Typescript", ratingPercentage: 89 },
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 95 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Mongo DB", ratingPercentage: 86 },
    { skill: "SQL", ratingPercentage: 95 },
    { skill: "Node JS", ratingPercentage: 95 },
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "FastAPI", ratingPercentage: 80 },
    { skill: "KAFKA", ratingPercentage: 75 },
    { skill: "Redis", ratingPercentage: 88 },
    { skill: "AWS", ratingPercentage: 82 },
  ];

  const workExperiencePeriods = [
    { fromDate: "Sep'18", toDate: "Dec'21" },
    { fromDate: "Feb'22", toDate: "Jun'22" },
    { fromDate: "Apr'23", toDate: "Dec'23" },
    { fromDate: "Dec'23", toDate: "May'24" },
    { fromDate: "May'24", toDate: "May'26" },
  ];

  const monthMap = {
    jan: 0,
    january: 0,
    feb: 1,
    february: 1,
    mar: 2,
    march: 2,
    apr: 3,
    april: 3,
    may: 4,
    jun: 5,
    june: 5,
    jul: 6,
    july: 6,
    aug: 7,
    august: 7,
    sep: 8,
    sept: 8,
    september: 8,
    oct: 9,
    october: 9,
    nov: 10,
    november: 10,
    dec: 11,
    december: 11,
  };

  const parseResumeDate = (dateLabel) => {
    const normalizedDate = dateLabel.toLowerCase().replace("'", "");
    const monthName = normalizedDate.replace(/\d/g, "");
    const year = Number(normalizedDate.replace(/\D/g, ""));

    return {
      month: monthMap[monthName],
      year: year < 100 ? 2000 + year : year,
    };
  };

  const getInclusiveMonths = ({ fromDate, toDate }) => {
    const from = parseResumeDate(fromDate);
    const to = parseResumeDate(toDate);

    return (to.year - from.year) * 12 + to.month - from.month + 1;
  };

  const totalExperienceMonths = workExperiencePeriods.reduce(
    (totalMonths, period) => totalMonths + getInclusiveMonths(period),
    0
  );
  const totalExperienceYears = Math.floor(totalExperienceMonths / 12);
  const remainingExperienceMonths = totalExperienceMonths % 12;
  const totalExperienceLabel = `${totalExperienceYears}+ years${
    remainingExperienceMonths
      ? ` (${totalExperienceYears} years ${remainingExperienceMonths} months)`
      : ""
  }`;

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      projectUrl: "https://portfolio-vishalkrsoni.web.app/",
      duration: { fromDate: "June'22", toDate: "July'22" },
      description:
        "A personal portfolio website that brings my profile, experience, and projects together in one place.",
      subHeading: "Technologies Used: React.js, Bootstrap, Node.js, Express.js",
    },
    {
      title: "Talkies",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "Sept'22", toDate: "Nov'22" },
      description:
        "A movie streaming platform built to support up to 10,000 users, with subscriptions and Stripe payment integration for movies and web series.",
      subHeading:
        "Technologies Used: Firebase, React.js, Node.js, Express.js, Stripe",
    },
    {
      title: "Easy-Buy",
      projectUrl: "https://talkies-8bc89.web.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerce application for selling products online, complete with payment system integration.",
      subHeading: "Technologies Used: React.js, Redux, Express.js, Node.js",
    },
    {
      title: "The Tech Geek",
      projectUrl: "https://euphonious-halva-ae97a5.netlify.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description: "A blogging platform for publishing and reading technical articles.",
      subHeading:
        "Technologies Used: React.js, MongoDB, Express.js, Node.js, Redux",
    },
    {
      title: "Chit Chat",
      projectUrl: "https://euphonious-halva-ae97a5.netlify.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A real-time chat application with integrated calling features.",
      subHeading:
        "Technologies Used: React Native, MongoDB, Express.js, Node.js, Redux, Socket.IO",
    },
    {
      title: "My-Moments ",
      projectUrl: "https://my-moments.onrender.com",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A memory-sharing application that lets users post moments with images and geolocation data.",
      subHeading:
        "Technologies Used: MongoDB, Express.js, React.js, Node.js, Redux, Google Geolocation",
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
          heading={"ACL Digital, Bangalore"}
          subHeading={"Senior Software Engineer"}
          fromDate={workExperiencePeriods[4].fromDate}
          toDate={workExperiencePeriods[4].toDate}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>Microservices Architecture: </b> Designed and implemented
            scalable microservices with Node.js, TypeScript, Redis, and
            PostgreSQL, improving system performance by up to 80%.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Service Ownership: </b> Developed and managed three
            microservices, including two API services and one WebSocket service,
            to support scalable product workflows.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Client Collaboration: </b> Led direct client interactions,
            gathered requirements, refined features, and translated business
            needs into technical solutions.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Real-Time Communication: </b> Enhanced real-time communication
            with WebSockets, ensuring instant updates and a seamless user
            experience.
          </span>
          <br />

          <span className="resume-description-text">
            <b>API Performance Optimization: </b> Reduced API latency and
            database load through efficient caching strategies and optimized
            database queries.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Scalability: </b> Designed systems capable of supporting a
            growing user base and high-traffic events.
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"91Social"}
          subHeading={"Senior Software Developer"}
          fromDate={workExperiencePeriods[3].fromDate}
          toDate={workExperiencePeriods[3].toDate}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>Complex Feature Delivery: </b> Led implementation of complex
            product features with a focus on robustness, scalability, and
            maintainable delivery.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Backend Performance Optimization: </b> Improved backend
            performance through database tuning, caching strategies, and
            asynchronous processing.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Smart Ticketing System: </b> Led development of a smart online
            ticketing system using TypeScript within a monorepo architecture.
          </span>
          <br />

          <span className="resume-description-text">
            <b>AI Feature Integration: </b> Collaborated with cross-functional
            teams to integrate AI capabilities for advanced ticket management.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Feature Launch Support: </b> Supported successful feature
            releases and contributed to measurable performance improvements.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Application State Management: </b> Improved application
            responsiveness by managing complex state with Redux Toolkit and
            Thunk middleware.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Project: </b> Worked on Lakers Bay, a smart ticketing service
            focused on advanced ticket management and operational efficiency.
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Lancesoft Bangalore"}
          subHeading={"MERN Stack Developer"}
          fromDate={workExperiencePeriods[2].fromDate}
          toDate={workExperiencePeriods[2].toDate}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>SaaS Platform Development: </b> Architected a SaaS banking
            service management platform powered by Vite.js and the MERN stack.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Full-Stack Engineering: </b> Developed and maintained robust,
            scalable web applications across React, Node.js, Express.js, and
            MongoDB.
          </span>
          <br />
          <span className="resume-description-text">
            <b>API Development: </b> Designed and implemented RESTful APIs for
            seamless integration between frontend and backend systems.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Cross-Functional Collaboration: </b> Collaborated with frontend,
            backend, and UI/UX teams to define and deliver responsive,
            visually polished user interfaces.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Project: </b> Contributed to Cadenz Profiles, improving banking
            service workflows and profile management.
          </span>
          <br />
        </div>
      </div>
  

      <div className="experience-container">
        <ResumeHeading
          heading={"Fliptree"}
          subHeading={"Java Developer"}
          fromDate={workExperiencePeriods[1].fromDate}
          toDate={workExperiencePeriods[1].toDate}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <b>Service Platform Development: </b> Contributed to a service
            aggregation and booking platform using Java Spring Boot, inspired by
            UrbanClap's service model.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Payment Integration: </b> Integrated Stripe for secure and
            seamless payment processing across user transactions.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Performance Optimization: </b> Used Redis caching for frequently
            accessed data, significantly improving application performance.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Booking Features: </b> Implemented service booking and
            management features to improve usability and operational flow.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Lumi Matrimony: </b> Developed a matrimonial website with Node.js
            and Redis caching, focusing on matchmaking features and smooth site
            performance.
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"PrepLeaf"}
          subHeading={"Software Engineer"}
          fromDate={workExperiencePeriods[0].fromDate}
          toDate={workExperiencePeriods[0].toDate}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>Component Development: </b> Built visually appealing components
            and robust Node.js APIs to enhance application functionality.
          </span>
          <br />
          <span className="resume-description-text">
            <b>UI Collaboration: </b> Worked closely with design teams to build
            an intuitive and user-friendly interface for the Prep-seed app.
          </span>
          <br />
          <span className="resume-description-text">
            <b>State Management: </b> Implemented efficient app development
            practices and state management techniques to deliver a seamless user
            experience.
          </span>
          <br />

          <span className="resume-description-text">
            <b>Team Delivery: </b> Supported project success through proactive
            problem-solving, teamwork, and consistent delivery against project
            deadlines.
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
        description="I am an avid chess player with multiple college-level prizes, including gold and silver medals, earned through strategic play and consistent practice."
      />
      <ResumeHeading
        heading="Poetry"
        description="I enjoy literature and creative writing, using poetry as a way to express ideas, emotions, and personal observations."
      />
      <ResumeHeading
        heading="Poker"
        description="I enjoy poker for its mix of probability, quick decision-making, and strategic thinking, and I have earned multiple titles in online play."
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
    <div>
      <div className="resume-container screen-container fade-in">
        <div className="resume-content" id={props.id || ""}>
          <ScreenHeading
            title={"Resume"}
            subHeading={`My Formal Bio Details | ${totalExperienceLabel} experience`}
          />
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

      <div className="skill__scroll__container">
        <ScreenHeading title={"Skills"} className="skill__scroll__heading" />
        <div className="skills_scroll">
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default Resume;
