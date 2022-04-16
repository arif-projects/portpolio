import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import { FaFacebook,FaLinkedin, FaGithub } from "react-icons/fa";
import './About.css'

const About = () => {
    return (
        <div id = "about" className = "about my-5">
            <h1 className="aniText mb-5"><Typewriter
                        options={{
                            strings: ['About Me'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h1>

<Container>
            <Row>

                <Col md={6}>
                    <div className="banner-image">
                        <img className = "w-75" src={'https://i.ibb.co/pr27Y6Y/my-bg2-1.png'} alt="" />
                    </div>
                </Col>

                <Col className = "d-flex align-items-center" md={6}>
                    <div className="banner-text text-start">
                        <h3 className = "skillHeader">My name is Mohammad Arif. Junior MERN Stack <br />Web Developer</h3>
                       
                       <p>Web Design & Development is my passion, I get deeper to understand client’s needs and problems. I can build any kind of eye-catching Website. I have 01 years of experience in Web Design & Web Development. I am able to design according to your requirements. My mission is to satisfy you and become a pro developer to learn new updates every day. You’ll get lifetime support in any problem I premise that, You’ll get Fanatical Support and Absolutely Positively On-time Delivery.</p>
                       <div className="icon d-flex align-items-center">
                       <a className = "social-icon"  href="https://www.facebook.com/profile.php?id=100007111668011"><h1><FaFacebook/></h1></a>
                        
                        <a className = "social-icon"  href="https://www.linkedin.com/in/ariful-hridoy/"><h1><FaLinkedin/></h1></a>
                        <a className = "social-icon"  href="https://github.com/arif-projects"><h1><FaGithub/></h1></a>
                       </div>
                       
                       <br />
                       <button className = "banner-button m-3"><a href="https://drive.google.com/file/d/1g_qck2uQ7Wk82QzSczyARyQa8IEKK0aG/view?usp=sharing">Download Resume</a></button>
                    </div>
                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default About;