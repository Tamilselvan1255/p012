import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-bootstrap";

const Banner = () => {
    return (
         <Container>
            <Row className="justify-content-center align-items-center">
                <Col ms={2}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('./assets/dynex.jpg')}
                            alt="First slide"
                            height={516}
                            width={200}
                            />
                            <Carousel.Caption>
                            <h3 style={ {fontFamily: 'Stencil Std'}}><b>Dynex Batteries</b></h3>
                            <p className="d-none d-sm-block">Authorised distributor for Tirunelveli, Thoothukudi, Tenkasi and Kanyakumari.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('./assets/ceat.jpg')}
                            alt="Second slide"
                            height={516}
                            width={200}
                            />

                            <Carousel.Caption>
                            <h3 style={ {fontFamily: 'Stencil Std'}}>Ceat Tyres</h3>
                            <p className="d-none d-sm-block">Authorised distributor for Tirunelveli, Thoothukudi, Tenkasi and Kanyakumari.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={require('./assets/volvoline.jpg')}
                            alt="Third slide"
                            height={516}
                            width={200}
                            />

                            <Carousel.Caption>
                            <h3 style={ {color: 'black', fontFamily: 'Stencil Std'}}>Volvoline Oil & Lubrications</h3>
                            <p className="d-none d-sm-block">Authorised distributor for Tirunelveli, Thoothukudi, Tenkasi and Kanyakumari.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
        
    );
}

export default Banner;