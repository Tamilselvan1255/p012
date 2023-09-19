import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLocationOn } from 'react-icons/md';
import Iframe from "react-iframe";

const Office = () => {
    return (
        <div >
            <p style={{fontFamily:'Segoe Print', color:'#00539CFF', fontSize:'28px', textAlign:'center'}}><b>Our office</b></p>
            <Container >
                <Row>
                <Col lg={6} style={{paddingBottom:'25px', paddingLeft:'85px'}}>
                    <p style={{color:'#00539CFF', fontFamily:'Calisto MT', fontSize:'20px', paddingTop:'50px'}}><b>P012</b></p>
                    <p style={{color:'#00539CFF', fontFamily:'Calisto MT', fontSize:'16px'}}>no.6, Vathal market,</p> 
                    <p style={{color:'#00539CFF', fontFamily:'Calisto MT', fontSize:'16px'}}>Nayinarukulam road, Tirunelveli Town - 627003.</p>
                </Col>
                <Col lg={6}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4784648868144!2d77.71143221478454!3d8.740970393720996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411971c3a0637%3A0xb3938d0b951866a6!2sRam%20Muthuram%20Cinemas%204K%203D!5e0!3m2!1sen!2sin!4v1673499060215!5m2!1sen!2sin" width="600" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </Col>
                <center><hr style={{width:'60%'}}/></center> 
                </Row>
            </Container>
            </div>
        );
}

export default Office;
