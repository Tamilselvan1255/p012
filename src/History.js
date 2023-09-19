import React from "react";
import { Container, Row, Col } from "reactstrap";
import  { Card } from "react-bootstrap";
import { MDBRipple } from "mdb-react-ui-kit";

const History =() => {
    return (
        <div>
            <Container>
                <Row>
        <p style={{textAlign:'center', fontFamily:'Segoe Print', color:'#00539CFF', fontSize:'35px'}}><b>History of us</b></p>
                </Row>
            </Container><br></br>
                <div className="wrapper">
                    <div className="gallery">
                <Row>
                    <Col lg={6} style={{paddingLeft:'230px'}}>
                    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2001,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple><br></br><br></br><br></br>
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2002,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple><br></br><br></br><br></br>
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2003,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple><br></br><br></br><br></br>
            {/* <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body>
                                <Card.Title>Since 2001,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card><br></br><br></br><br></br>
                        <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body >
                                <Card.Title>Since 2002,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card><br></br><br></br><br></br>
                        <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body>
                                <Card.Title>Since 2003,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card> */}
                    </Col>
                    <Col lg={6} style={{marginTop:'80px', paddingRight:'230px'}}>
                    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2004,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple><br></br><br></br><br></br>
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2005,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple><br></br><br></br><br></br>
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <div className='w-100'>
        <Card><Card.Body>
            <Card.Title>Since 2006,</Card.Title>
                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
        </Card.Body></Card>
      </div>
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)'}}></div>
      </a>
    </MDBRipple>
                        {/* <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body>
                                <Card.Title>Since 2004,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card><br></br><br></br><br></br>
                        <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body>
                                <Card.Title>Since 2005,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card><br></br><br></br><br></br>
                        <Card style={{backgroundColor:'lightgrey'}}>
                            <Card.Body>
                                <Card.Title>Since 2006,</Card.Title>
                                <Card.Text style={{color:'#00539CFF'}}>This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.</Card.Text>
                            </Card.Body>
                        </Card><br></br><br></br><br></br> */}
                    </Col>
                    <div >
                    <center><hr style={{width:'50%'}} /> </center>                    </div>
                </Row>
                </div>
                </div>
           
        </div>
    )
};

export default History;