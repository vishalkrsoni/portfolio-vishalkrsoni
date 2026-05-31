import React from "react";
import Typed from "react-typed";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/vishalkrsoni">
                <i className="fa fa-facebook-square"></i>
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
              <a href="https://www.linkedin.com/in/vishalkrsoni/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              Senior Software Engineer
              <span className="highlighted-text"> Vishal Kr Soni </span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typed
                  strings={[
                    "Microservices Builder",
                    "MERN Stack Engineer",
                    "Real-Time App Developer",
                    "Backend Performance Optimizer",
                  ]}
                  typeSpeed={30}
                  backSpeed={50}
                  className="typed-header"
                  // style={{ fontSize: "25px" }}
                  loop
                />
              </h1>{" "}
              <span className="profile-role-tagline">
                I build scalable full-stack products with clean backend architecture.
              </span>
            </span>
          </div>

          <div className="profile-highlights">
            <span>7+ years experience</span>
            <span>Microservices</span>
            <span>Real-time systems</span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
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
