/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import Typed from "react-typed";

import axios from "axios";
import { toast } from "react-toastify";
import imgBack from "../../images/mailz2.jpeg";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  // eslint-disable-next-line no-unused-vars
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name, email, message);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);

      const res = await axios.post(`http://localhost:8080/contact`, data);

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.message);
        toast.error(res.data.message);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.message);
        toast.success(res.data.message);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          window.location.reload(false);
          window.scrollTo(0, 0);
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form" id="ContactMe">
        <div className="col">
          <h2 className="title">
            {" "}
            <Typed
              strings={[
                "Get In Touch 🤝",
                "Email Me And 📧",
                "Get Your Job Done! 👍🏻",
              ]}
              typeSpeed={70}
              backSpeed={30}
              className="typed-header"
              loop
            />
          </h2>{" "}
          <a href="https://www.facebook.com/vishalkrsoni">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://myaccount.google.com/profile">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/vishalkrsoni/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://github.com/vishalkrsoni">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
            <i className="fa fa-linkedin-square"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>

          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
