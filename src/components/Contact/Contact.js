import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LinkedIn from "../../Assets/linked.png";
import DPN from "../../Assets/dpn.jpg";
import Mail from "../../Assets/mail.png";

// import Techstack from "./Techstack";
// import Toolstack from "./Toolstack";



function Contact() {
    return (
      <Container fluid className="about-section">
      
        <Container>
          <Row style={{ justifyContent: "center", padding: "100px" }}>
            <Col
              md={10}
              style={{
                // justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              
        
            </Col>
              <Col
              md={3}
              style={{  paddingTop: "10px", paddingBottom: "10px" }}
              className="about-img">
                
             
             <a href="https://github.com/manikantakaruparthi">
                <img src={LinkedIn} className="about-img" />
                <h5>LinkedIn-Profile</h5>
          </a>               
          </Col>


            
              <Col
              md={3}
              style={{ paddingTop: "1px", paddingBottom: "1px" }}
              className="about-img">
            
              <a href="https://github.com/manikantakaruparthi">
                <img src={DPN} className="about-img" />
                <h5>DPN-Profile</h5>
          </a>              
          </Col>
               
            <Col
              md={3}
              style={{ paddingTop: "5px", paddingBottom: "1px", justifyContent:"start"}}
              className="about-img">
            
              <a href="https://github.com/manikantakaruparthi">
            <img src={Mail} className="about-img" />
            <h5><strong>Email:</strong></h5><h6>suryaKiransindiri2001@gmail.com</h6>
          </a>            
          </Col> 

          </Row>
         
          

          
          
        </Container>
      </Container>
    );
  }
  
  export default Contact;
  