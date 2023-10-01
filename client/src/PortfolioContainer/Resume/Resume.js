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
      projectUrl: "https://portfolio-vishalkrsoni.web.app/",
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
      title: "The Tech Geek",
      projectUrl: "https://euphonious-halva-ae97a5.netlify.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A blogging website to add and read technical blogs and more",
      subHeading:
        "Technologies Used:  ReactJs, Mongo DB, Express Js, Node Js, Redux",
    },
    {
      title: "Chit Chat",
      projectUrl: "https://euphonious-halva-ae97a5.netlify.app/",

      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A real-time chatting application which provides us calling feature as well.",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux,SocketIo",
    },
    {
      title: "My-Moments ",
      projectUrl: "https://my-moments.onrender.com",

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
          heading={"Lancesoft (Client-Lentra AI)"}
          subHeading={"Mern Stack developer"}
          fromDate={"Apr'23"}
          toDate={"Oct'23"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>Web Application Development : </b> Leveraged Vite.js to design
            and develop a high-performance web application, ensuring seamless
            user experiences.
          </span>
          <br />

          <span className="resume-description-text">
            <b>State Management : </b> Utilized Redux Toolkit and Thunk
            middleware to efficiently manage application state and handle
            asynchronous API calls, enhancing application responsiveness.
          </span>
          <br />
          <span className="resume-description-text">
            <b> React Documentation : </b> Implemented Storybook to create
            comprehensive documentation for the React application, improving
            codebase understanding and developer collaboration.
          </span>
          <br />

          <span className="resume-description-text">
            <b>API Integration: </b> Successfully integrated Axios into both the
            React frontend and Node.js backend to facilitate seamless
            communication with external APIs, enhancing data retrieval and
            processing capabilities.
          </span>
          <br />

          <span className="resume-description-text">
            <b>API Documentation : </b> Automated API documentation using
            Swagger and API-curio, making it easier for the team to understand
            and utilize APIs effectively.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Continuous Integration : </b> Set up Bitbucket pipelines for
            streamlined code commits and automated testing, ensuring code
            quality and reliability.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Security and Access Control : </b> Designed and implemented
            robust authentication and authorization mechanisms to safeguard data
            and control user access effectively.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Code Quality Assurance : </b> Enforced coding best practices by
            configuring Eslint and Prettier, fostering codebase consistency and
            adherence to coding guidelines.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Logging and Error Tracking: </b> Configured the Winston logger to
            provide comprehensive log management, aiding in debugging and error
            tracking for improved application stability.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Microservices Architecture : </b> Established the foundational
            infrastructure for a microservices-based backend system, enhancing
            scalability and modularity for future growth. .{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"MentorYard"}
          subHeading={"Software Developer"}
          fromDate={"July'22"}
          toDate={"Mar'23"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <b> Mentee-Mentorship Platform: : </b> Created a mentee-mentorship
            platform that empowers school students to connect with industry
            professionals, fostering their career development. This project was
            developed using Node.js and JavaScript.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Ed-Tech Platform :</b> Developed an Ed-Tech platform designed to
            connect and streamline operations for multiple small-scale schools
            while efficiently managing their student data. This project was
            built using Node.js, optimizing educational processes.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Coding BootCamp :</b> During this period, I also enrolled in a
            coding bootcamp at AttainU to enhance my understanding of React
            concepts and deepen my technological expertise.{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"FlipTree Technologies"}
          subHeading={"Server Developer"}
          fromDate={"Feb'22"}
          toDate={"June'22"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
          woked as server developer
          </span>
        </div> */}
        <div className="experience-description">
          <span className="resume-description-text">
            <b>Software Development : </b> Proficiently coded software changes
            and modifications in compliance with specific design specifications
            using Node.js.
          </span>
          <br />
          <span className="resume-description-text">
            <b> App Module Management :</b> Successfully implemented and updated
            app modules using both Node.js and Java to enhance application
            functionality.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Issue Resolution : </b> Identified, diagnosed, and resolved
            website problems, including broken links, typographical errors, and
            formatting issues, ensuring an optimal user experience.{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"PrepLeaf"}
          subHeading={"Software Intern"}
          fromDate={"Oct'19"}
          toDate={"Nov'20"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <b>UI Design : </b> Collaborated on the UI design of the Prep-seed
            App using the MERN Stack, emphasizing a user-friendly interface.
          </span>
          <br />
          <span className="resume-description-text">
            <b> App and State Management : </b>Utilized React and Redux for
            efficient app development and state management, delivering a
            seamless user experience.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Component Development : </b> Created visually appealing
            components and essential APIs using Node.js to enhance the
            application's visual and functional elements.
          </span>
          <br />

          <span className="resume-description-text">
            <b> Team Collaboration : </b> Actively participated in team-based
            projects, demonstrating versatility by taking on various roles to
            achieve project goals.{" "}
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"IndoAlpine Lab (Own-start up)"}
          subHeading={"Operations Head"}
          fromDate={"Jan'18"}
          toDate={"Oct'19"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            - Worked on operations and marketing and the strategies.
          </span>
        </div> */}

        <div className="experience-description">
          <span className="resume-description-text">
            <b>Operations Management : </b> Oversaw front desk operations and
            customer interactions, optimizing workflow and productivity through
            strategic changes.
          </span>
          <br />
          <span className="resume-description-text">
            <b>Customer Engagement : </b> Engaged customers effectively through
            excellent verbal communication skills to ascertain their needs and
            requirements, ensuring high levels of satisfaction.
          </span>
          <br />
          <span className="resume-description-text">
            <b> Strategic Planning : </b> Developed and executed effective
            business plans, aligning strategic decisions with long-term
            objectives.{" "}
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
        description="I am an avid chess player and have achieved significant recognition by winning numerous prizes and titles at various college-level chess tournaments. My dedication and strategic thinking in the game have earned me multiple Gold and Silver medals."
      />
      <ResumeHeading
        heading="Poetry"
        description="I possess a profound passion for literature, which manifests in my frequent indulgence in creative writing. Crafting poetry is not just a hobby but a means through which I express my thoughts, emotions, and artistic sensibilities. "
      />
      <ResumeHeading
        heading="Poker"
        description="I relish the intellectual challenges presented by poker, as it requires quick reflexes, precise decision-making, and intricate calculations. Over time, I have honed my poker skills, clinching multiple titles and accolades in the realm of online poker while cherishing interactive gaming sessions that stimulate my strategic thinking."
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
            subHeading={"My Formal Bio Details"}
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
