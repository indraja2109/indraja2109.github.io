import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

function Home() {
    return (
        <div className="container-fluid bg-dark">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://avatars2.githubusercontent.com/u/65655220?s=460&u=99d7d9dc4699dd36458b3c0a922c36661adb0198&v=4" alt="photo" className="m-5 shadow-sm" style={{borderRadius:"100%", width:"250px"}} />
                    </div>
                </Col>
                <Col className="d-flex justify-content-center align-items-start flex-column"> 
                    <h1 style={{fontSize:"72px", color:"#919191"}}>Indraja R</h1>
                    <h3 style={{color:"#666666"}}>React Developer</h3>

                    <div style={{color:"white"}}>
                        <a  className="m-2" href="https://www.instagram.com/indraja_r/" target="_blank" >
                            <FaInstagram color="#efefef" fontSize="32px"/>  
                        </a>
                        <a className="m-2" href="https://github.com/indraja2109" target="_blank" >
                            <FaGithub color="#efefef" fontSize="32px"/>
                        </a>
                        <a className="m-2" href="https://www.linkedin.com/in/indraja-r-937228164/" target="_blank" >
                            <FaLinkedinIn color="#efefef" fontSize="32px"/>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
