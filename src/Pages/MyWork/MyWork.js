import React from "react";
import "./MyWork.css";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MyWork = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="work" className="my-5 mywork">
      <h1 className="aniText mb-5">
        My
        <span className="last">
          <Typewriter
            loop
            cursor
            cursorStyle="_"
            typeSpeed={[100]}
            deleteSpeed={[70]}
            delaySpeed={[1000]}
            words={[" work"]}
          />
        </span>
      </h1>

      <Container>
        <Row className="align-items-center">
          <Col md={4}>
            <div data-aos="fade-right" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/tMq5vn3/work4.png"}
                  alt=""
                />
                <h3>Act Shady</h3>
                <p>
                  This is Niche web app. Where users can login & buy sunglasses.
                </p>
              </div>

              <button className="workBtn mt-3">
                <a href="https://act-shady.web.app/">Watch Project</a>
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="flip-up" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/v3RcRMm/5.png"}
                  alt=""
                />

                <h3>Island Hoppers</h3>
                <p>
                  This is a Travel website. Users can log in to my webpage &
                  Purchese offerings.
                </p>
              </div>
              <button className="workBtn mt-3">
                <a href="https://island-hoppers.web.app/home#home">
                  Watch Project
                </a>
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="fade-left" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/vhVqkLT/work-2.png"}
                  alt=""
                />
                <h3>Time Sheriff</h3>
                <p>
                  It is an online watch store. People can see our collection of
                  watch & Also login & make purchases online. People can also
                  see our offerings.
                </p>
              </div>
              <button className="workBtn mt-3">
                <a href="https://time-sheriff.web.app/home">Watch Project</a>
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="fade-right" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/Zh86rkm/doctor.png"}
                  alt=""
                />
                <h3>Life Motion Clinic</h3>
                <p>
                  It is a Hospital website. Technology: React,Firebase,React
                  Bootstrap HTML, CSS.
                </p>
              </div>
              <button className="workBtn mt-3">
                <a href="https://life-motion-clinic.netlify.app/home">
                  Watch Project
                </a>
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="fade-up" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/wKJ9cXw/teacher.png"}
                  alt=""
                />
                <h3>Zoom online Couching</h3>
                <p>
                  It is an online Couching Center.Student can Choose teacher &
                  learn online.
                </p>
              </div>
              <button className="workBtn mt-3">
                <a href="https://zoom-couching-center.netlify.app/">
                  Watch Project
                </a>
              </button>
            </div>
          </Col>
          <Col md={4}>
            <div data-aos="fade-left" className="cardd mb-3">
              <div className="description">
                <img
                  className="w-100 h-50"
                  src={"https://i.ibb.co/RBY7WgX/book.png"}
                  alt=""
                />
                <h3>Book Motion</h3>
                <p>It is an online Library. People read book online</p>
              </div>
              <button className="workBtn mt-3">
                <a href="https://book-motion.netlify.app/">Watch Project</a>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyWork;
