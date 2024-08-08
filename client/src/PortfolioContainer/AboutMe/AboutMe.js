import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line no-unused-vars
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
      description:
        "An accomplished Full-Stack Developer with 4 years of experience in the backend development, MERN stack and Redux development. Proven ability to build efficient, scalable applications. Strong academic foundation with a B.Tech in Computer Science. Dedicated to leveraging skills and expertise to become a valuable asset to any organization.",
      highlights: {
        bullets: [
          "Proficient in MERN Stack Development",
          "Experienced with Redux for State Management",
          "Skilled in Building REST APIs using Node.js and SpringBoot",
          "Designed and implemented scalable microservices architecture",
        ],
        heading: "Here are a Few Highlights:",
      },
    };
    

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}>
      <div className="about-me-parent ">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
                {" "}
                Hire Me{" "}
              </button>
              <a href="Vishal-resume.pdf" download="vishal-resume.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
