import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
	Container,
	Row,
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';
import Done from "./Done";
import Banner from "./Banner";
import Section2 from "./Section2";
import Cards from "./Cards";
import Section3 from "./Section3";
import History from "./History";
import Office from "./Office";
import Form from "./Form";



function Home() {
	const [isOpen, setIsOpen] = React.useState(false);
 
	 return (
		 <div style={{
			 display: 'block', width: '100%', maxWidth:'100%'
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
             <Done />
			 <Banner />
             <Section2 />
             <Cards />
             <Section3 />
             <History />
             <Office />
             <Form />
			 <Container style={{marginTop:'40px',}}>
				<Row>
					<p style={{fontSize:'15px', textAlign:'center'}}> © 1996-2022 P012. All Rights Reserved.</p>
				</Row>
			 </Container>
			 </div >
		);
}

export default Home;

