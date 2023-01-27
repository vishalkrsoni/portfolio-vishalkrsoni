import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";
// import AnimatedText from "react-animated-text-content";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/vishalkrsoni">
                <i className="fa fa-facebook-square" ></i>
              </a>
              <a href="https://myaccount.google.com/profile">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/vishalkrsoni/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/vishalkrsoni">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                <i className="fa fa-linkedin-square" ></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text"> Vishal Soni </span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Full Stack  Dev 💻",
                    1500,
                    "Front End Dev 🧮",
                    1500,
                    "Back End Dev 🗄️",
                    1500,
                    "MERN Stack Dev 🗄️",
                    1500,
                  ]}
                />
              </h1>{" "}
              {/* <h1>
                {" "}
                <AnimatedText
                  type="char" // animate words or chars
                  animation={{
                    x: "40px",
                    y: "-20px",
                    scale: 1.4,
                    ease: "ease-in-out",
                  }}
                  animationType="float"
                  interval={0.09}
                  duration={0.8}
                  tag="p"
                  className="animated-paragraph"
                  includeWhiteSpaces
                  threshold={0.9}
                  rootMargin="60%">
                  Front end dev
                </AnimatedText>
              </h1> */}
              <span className="profile-role-tagline">
                Building applications in Front-End and Back-End
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
           onClick={() => ScrollService.scrollToHireMe()}
           >
              {""}
              Hire Me{" "}
            </button>

            <a href="Vishal-resume.pdf" download="Vishal.pdf">
              <button className="btn highlighted-btn">
                {""}
                Get Resume{" "}
              </button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
