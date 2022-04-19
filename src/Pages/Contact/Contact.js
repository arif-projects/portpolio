import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";
import { FaMapMarkerAlt, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="contact" className="my-5">
      <div className="content mb-5">
        <h1 className="aniText mb-5">
          Send me
          <span className="last">
            <Typewriter
              loop
              cursor
              cursorStyle="_"
              typeSpeed={[100]}
              deleteSpeed={[70]}
              delaySpeed={[1000]}
              words={[" message"]}
            />
          </span>
        </h1>
      </div>

      <Container>
        <Row>
          <Col md={6}>
            <div data-aos="fade-right" className="contact-info text-start">
              <div className="address d-flex align-items-center ">
                <div className="icon">
                  <h1>
                    <FaMapMarkerAlt />
                  </h1>
                </div>
                <div className="text m-3">
                  <h3>Address</h3>
                  <p>Adhrsho Sader, Cumilla, Bangladesh</p>
                </div>
              </div>
              <div className="email d-flex align-items-center">
                <div className="icon">
                  <h1>
                    <FaMailBulk />
                  </h1>
                </div>
                <div className="text m-3">
                  <h3>Email</h3>
                  <p>arifulhaque60332@gmail.com </p>
                </div>
              </div>
              <div className="phone d-flex align-items-center">
                <div className="icon">
                  <h1>
                    <FaPhoneAlt />
                  </h1>
                </div>
                <div className="text m-3">
                  <h3>Phone</h3>
                  <p>+880 1625338665</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div data-aos="fade-left" className="contact-form text-start">
              <form action="https://formspree.io/f/xvolwygp" method="POST">
                <input type="text" name="Name" placeholder="Your Name" />
                <br />
                <input type="email" name="Email" placeholder="Email" />
                <br />
                <input
                  type="text"
                  name="Phone"
                  placeholder="Your Phone Number"
                />
                <br />
                <textarea
                  name="Message"
                  cols="30"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
                <br />
                <button className="form-button">Send Message</button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
