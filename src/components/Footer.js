import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
         <h3>Designed and Developed by Studio Folks</h3>
        </Col>
       <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SF</h3>
       </Col>
      <Col md="4" className="footer-body">
        <ul className="footer-icons">
        <li className="social-icons">
           <a
               href=""
               style={{ color: "BLACK" }}
               target="_blank" 
               rel="noopener noreferrer"
             >
               <AiFillGithub />
             </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "BLACK" }}
                target="_blank" 
  
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href=""
                style={{ color: "BLACK" }}
                target="_blank" 
              
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="surya"
                style={{ color: "BLACK" }}
                target="_blank" 
                
              >
                <AiFillInstagram />
              </a>
            </li>
        </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
