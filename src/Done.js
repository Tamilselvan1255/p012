import React from "react";
import { Container, Row, Col } from "reactstrap";
import './App.css';

const Done = () => {
  return (

    <Container style={{ textAlign:'center'}}>
            <Row>
                <Col lg={6} className="section1">
                    <p>20+</p><span><h1 style={{paddingBlockEnd:'10px'}}>Years of Excellence..</h1></span>
                </Col>
                <Col lg={6} className="section101">
                    <p style={{marginTop:'40px'}}>Since 2003, P012 has distribute batteries for highly demandable applications such as Two wheelers, Three wheelers, Four wheelers, and Heavy vehicles such as Lorry, Truct, Movers, Ships and Boats etc,.
                    <br></br><br></br>
"We know batteries" - We offer all major battery technologies, from Lithium-Ion to Sealed Lead, in packs or in single cells.
<br></br><br></br>
Also we have the Authority to distribute the commodities of leading brands such as "Volovline Inc." and "Ceat Tyres"
</p>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Done;


