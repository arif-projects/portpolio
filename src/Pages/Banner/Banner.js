import React from 'react';
import './Banner.css'
import { Col, Container, Row } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.js';
const Banner = () => {
    return (
        <div id = "home" className = "banner mt-5">
            <Container>
            <Row>
                <Col className = "d-flex align-items-center" md={6}>
                    <div className="banner-text text-start">
                        <h3>Hey there!,</h3>
                        <h1>I'm <span className="skillHeader">Mohammad Arif</span></h1>
                        <h3 className="aniText">
                            Front end
                            <span className="last">
                                <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={[70]}
                                deleteSpeed={[50]}
                                delaySpeed={[1000]}
                                words={[' web developer']}
                                />
                            </span> 
                            
                        </h3>
                       <button className = "banner-button m-3"><a href ="#contact">Contact me</a></button>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="banner-image">
                        <img className = "w-75" src={'https://i.ibb.co/m47j7X1/me.png'} alt="" />
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Banner;