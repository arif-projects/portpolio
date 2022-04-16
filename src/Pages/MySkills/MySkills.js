import React from 'react';
import './MySkills.css'
import Typewriter from 'typewriter-effect';
import { Col, Container, Row } from 'react-bootstrap';

const MySkills = () => {
    return (
        <div id = "skills">
                     <h3 className="aniText mb-5"><Typewriter
                        options={{
                            strings: ['My Skills'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h3>

                        <Container className = "text-start skill">
                          <Row>
                            <Col md={4}>
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
                            </Col>
                            <Col md={4}>
                              <h3 className = "skillHeader">Comportable:</h3>
                              <ul>
                                <li>Tailwind</li>
                                <li>Meterial UI</li>
                                <li>Node js</li>
                                <li>Express js</li>
                                <li>MongoDB</li>
                                <li>Rest api</li>
                              </ul>
                            </Col>
                            <Col md={4}>
                              <h3 className = "skillHeader">Tools:</h3>
                              <ul>
                                <li>ChormeDev</li>
                                <li>Figma</li>
                                <li>Firebase</li>
                                <li>Git</li>
                                <li>Heroku</li>
                                <li>VS Code</li>
                              </ul>
                            </Col>
                          </Row>
                        </Container>
        </div>
    );
};

export default MySkills;