import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Testimonial.css'
import Typewriter from 'typewriter-effect';
import { AiFillStar,AiOutlineStar } from "react-icons/ai";

const Testimonial = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/arif-projects/fakedata2/main/testimonialp.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div id="Testimonial" className="mt-5">
                                   <h1 className="aniText mb-5"><Typewriter
                        options={{
                            strings: ['What clients say'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h1>
            <Container>
                    <Row>
             {
                 data.map(pd=>(
                  
        
                        <Col md={4}>
                            <div className="card mb-3">
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