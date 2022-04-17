import React from 'react';
import './MySkills.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const MySkills = () => {
  useEffect(()=>{
    AOS.init({duration: 2000});
},[]);
    return (
        <div id = "skills">
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
                                words={[' skill']}
                                />
                            </span> 
                            
                        </h1>

                        <Container className = "text-start skill">
                          <Row>
                            <Col md={4}>
                             <div data-aos="fade-right" className="expertise">
                             <h3 className = "skillHeader">Expertise:</h3>
                              <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Bootstrap4&5</li>
                                <li>Javascript(ES6)</li>
                                <li>React</li>
                                <li>React Bootstrap</li>
                                <li>Firebase</li>
                              </ul>
                             </div>
                            </Col>
                            <Col md={4}>
                              <div data-aos="fade-up">
                              <h3 className = "skillHeader">Comportable:</h3>
                              <ul>
                                <li>Tailwind</li>
                                <li>Meterial UI</li>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>MongoDB</li>
                                <li>Rest api</li>
                              </ul>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div data-aos="fade-left">
                              <h3 className = "skillHeader">Tools:</h3>
                              <ul>
                                <li>ChormeDev</li>
                                <li>Figma</li>
                                <li>Firebase</li>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>VS Code</li>
                              </ul>
                              </div>
                            </Col>
                          </Row>
                        </Container>
        </div>
    );
};

export default MySkills;