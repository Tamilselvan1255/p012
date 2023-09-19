import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Container,
  Col,
	NavItem,
	NavLink,
  Row,
  Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand
} from 'reactstrap';
import { IoMdCall } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"

function About() {
	const [isOpen, setIsOpen] = React.useState(false);
 
	 return (
		 <div style={{
			 display: 'block', width: '100%',  maxWidth:'100%'
		 }}>
					
          <Navbar color="light" light expand="md">
				 <NavbarBrand href="/"><h3 style={{color:'purple'}}><b>P012</b></h3></NavbarBrand>
				 <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				 <Collapse isOpen={isOpen} navbar >
					 <Nav className="mr-auto" navbar>	
						 <NavItem>
							 <NavLink href="http://localhost:3000/">Home</NavLink>
						 </NavItem>
						 <NavItem>		
							 <NavLink href="http://localhost:3000/gallery">Gallery</NavLink>
						 </NavItem>
						 <NavItem>
							 <NavLink href="http://localhost:3000/about">Contact</NavLink>
						 </NavItem>
					 </Nav>
           </Collapse>
			 </Navbar>
             
                <Container style={{marginTop:'50px'}}>
                 
                
                <h5><u>For Sales related:</u></h5>
                <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. P. Selvaraj</b> </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                B.Sc
                <Row><Col>Head of Marketing & Sales department</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                <br></br><br></br>


                <h5><u>For Delivery related:</u></h5>
                <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. M. Manikanda Prabhu</b>  </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                B.B.A
                <Row><Col>Head of Service & Delivery department</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                <br></br><br></br>

                <h5><u>For Queries and Concerns:</u></h5>
                <Row><Col><b style={{color:'#2F3C7E', fontSize:'20px'}}>Mr. Rahul</b>  </Col><Col><IoMdCall /> +919876543210 </Col></Row>
                M.B.A., B.E 
                <Row><Col>Founder & Vice-chairman of P012</Col><Col><IoLogoWhatsapp /> +919876543210</Col></Row>
                </Container>
                <Container style={{marginTop:'60px',}}>
                  <Row>
                    <p style={{fontSize:'15px', textAlign:'center'}}> © 1996-2022 P012. All Rights Reserved.</p>
                  </Row>
                </Container>
			 </div >
	);
}

export default About;
