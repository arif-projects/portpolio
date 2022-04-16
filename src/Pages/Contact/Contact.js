import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./Contact.css"
import { FaMapMarkerAlt,FaMailBulk,FaPhoneAlt} from "react-icons/fa";
import Typewriter from 'typewriter-effect';

const Contact = () => {
    return (
        <div className="my-5">
           <div className="content mb-5">
           <h3 className="aniText mb-5"><Typewriter
                        options={{
                            
                            strings: [' Send Me Message'],
                            autoStart: true,
                            loop: true,
                        }}
                        /></h3>
           </div>
             
           <Container>
               <Row>
                   <Col md={6}>
                       <div className="contact-info text-start">
                         <div className="address d-flex align-items-center ">
                             <div className="icon"><h1><FaMapMarkerAlt/></h1></div>
                             <div className="text m-3">
                                 <h3>Address</h3>
                                 <p>Adhrsho Sader, Cumilla, Bangladesh</p>
                             </div>
                         </div>
                         <div className="email d-flex align-items-center">
                             <div className="icon"><h1><FaMailBulk/></h1></div>
                             <div className="text m-3">
                                 <h3>Email</h3>
                                 <p>arifulhaque60332@gmail.com </p>
                             </div>
                         </div>
                         <div className="phone d-flex align-items-center">
                             <div className="icon"><h1><FaPhoneAlt/></h1></div>
                             <div className="text m-3">
                                 <h3>Phone</h3>
                                 <p>+880 1625338665</p>
                             </div>
                         </div>
                       </div>
                   </Col>
                   <Col md={6}>
                       <div className="contact-form text-start">
                           <form action="">
                               <input type="text" placeholder = "Your Name" />
                               <br />
                               <input type="email" placeholder = "Email" />
                               <br />
                               <input type="text" placeholder="Your Phone Number"/>
                               <br />
                               <textarea name="" cols="30" rows="3" placeholder="Your Message"></textarea>
                               <br />
                               <button className = "form-button">Send Message</button>
                           </form>
                       </div>
                   </Col>
               </Row>
           </Container>

        </div>
    );
};

export default Contact;