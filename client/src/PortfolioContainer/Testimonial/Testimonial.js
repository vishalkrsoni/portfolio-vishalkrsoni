import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import abhishekBhaiya from "../../img/Testimonial/abhishekBhaiya.png";
import urvish from "../../img/Testimonial/urvish.png";
import jangid from "../../img/Testimonial/jangid.png";
import ankit from "../../img/Testimonial/ankitAg.png";
import shape from "../../img/Testimonial/shape-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    URLhashListener: true,
    startPosition: "URLHash",
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div id={props.id || ""}>
      <ScreenHeading
        title={"Testimonials"}
        subHeading={"What My Peers Say About Me"}
      />
      <section className="testimonial-section fade-in">
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}>
              {/* abhishek Bhaiya  */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have worked neck-to-neck with Vishal and build a
                      self-sustainable ecosystem for our FMCG Start-Up. He is a
                      gem of a person. He can figure out the problem areas and
                      execute real-time changes quickly. He has also gained
                      extensive experience with operations management and
                      workflow managament.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>

                  <div className="client-info">
                    <img
                      src={abhishekBhaiya}
                      alt="no internet connection"></img>
                    <h5>Abhishek Anand </h5>
                    <p>
                      Founder <small> IndoAlpine</small>
                    </p>
                    <div className="testimonial-icon">
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-linkedin-square"
                          style={{
                            color: "rgba(10,102,194)",
                            background: "white",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-instagram"
                          style={{
                            color: "#f55317fc",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Urvish Patel */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Working with Vishal was better than expected and we had
                      really high expectations. He is always ready to learn new
                      things by doing all the research about best practices and
                      implementing them. I believe he is a very talented and
                      favourible employee, one who is always ready to take
                      challenges.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={urvish} alt="no internet connection"></img>
                    <h5>Urvish Patel</h5>
                    <p>
                      CTO <small>FlipTree</small>{" "}
                    </p>
                    <div className="testimonial-icon">
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-linkedin-square"
                          style={{
                            color: "rgba(10,102,194)",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-instagram"
                          style={{
                            color: "#f55317fc",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Ankit Agarawal */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Vishal deeply understands his work and gets things done
                      efficiently and correctly in accordance with best
                      practices.The entire management expresses gratitude to
                      him. Along with adding value in the product developement
                      and adding valuable ideas time to time, he always get
                      things done on time.
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={ankit} alt="no internet connection"></img>
                    <h5>Ankit Agarawal</h5>
                    <p>
                      CEO <small>PrepLeaf</small>
                    </p>
                    <div className="testimonial-icon">
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-linkedin-square"
                          style={{
                            color: "rgba(10,102,194)",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-instagram"
                          style={{
                            color: "#f55317fc",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Hitesh Jangid */}
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I have worked with Vishal during PrepLeaf phase. He always
                      supported us and exceeded our expectations in every way.
                      Not only was our experience personal and friendly, his
                      ability to identify and present our key messages in an
                      imaginative and creative way gave us a huge amount of
                      confidence in him
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star" />
                      </li>
                      <li>
                        <i className="fa fa-star-half-alt" />
                      </li>
                      <li>
                        <i className="fa fa-star-half" />
                      </li>
                    </ul>
                  </div>
                  <div className="client-info">
                    <img src={jangid} alt="no internet connection"></img>
                    <h5>Hitesh Jangid </h5>
                    <p>
                      CTO <small>PrepLeaf</small>
                    </p>
                    <div className="testimonial-icon">
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-linkedin-square"
                          style={{
                            color: "rgba(10,102,194)",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i
                          className="fa fa-instagram"
                          style={{
                            color: "#f55317fc",
                          }}></i>
                      </a>
                      <a href="https://www.linkedin.com/in/vishal-soni-a8ab14a9/">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <div className="footer-image">
        <img
          src={shape}
          alt="pic not responding"
          className="testimonial__footer__image"
        />
      </div>

      <div className="scroll__up__container__testi">
        <div className="scroll__up__btn">
          <FontAwesomeIcon
            className="scroll__btn"
            icon={faUpLong}
            onClick={() => ScrollService.scrollHandler.scrollToHome()}
          />
        </div>
      </div>
    </div>
  );
}
