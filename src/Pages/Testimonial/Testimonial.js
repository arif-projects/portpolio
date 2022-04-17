import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'
import { AiFillStar,AiOutlineStar } from "react-icons/ai";
import { Typewriter } from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index.js';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Testimonial = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arif-projects/fakedata2/main/testimonialp.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])

    useEffect(()=>{
        AOS.init({duration: 2000});
    },[]);
    return (
        <div id="Testimonial" className="mt-5">

            <h1 className="aniText mb-5">
                           What Client's
                            <span className="last">
                                <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={[100]}
                                deleteSpeed={[70]}
                                delaySpeed={[1000]}
                                words={[' Say']}
                                />
                            </span> 
                            
                        </h1>
            <Container>
                    <Row>
             {
                 data.map(pd=>(
                  
        
                        <Col md={4}>
                            <div data-aos="zoom-in" className="card mb-3">
                                <div className="description">
                                <img className = "w-25" src={pd.image} alt="" />
                                <h4>{pd.name}</h4>
                                 <p>{pd.position}</p>
                                 <p>{pd.description}</p>
                                </div> 
                                <h3><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></h3>

                            </div>
                        </Col>
                       
                 ))
             }
              </Row>
                        </Container>

        </div>
    );
};

export default Testimonial;