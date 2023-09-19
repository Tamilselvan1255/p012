import React, {useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
  Container,
 	NavItem,
	NavLink,
  Row,
  Navbar,
	NavbarToggler,
	Collapse,
	Nav,
	NavbarBrand
} from 'reactstrap';
import Menu from "./Menu";

function Gallery() {
	const [isOpen, setIsOpen] = React.useState(false);
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const filterItem = (categItem) => {
  const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    
    setItems(updateItems);
    setActive(true);
  };
 
 
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
                <div>
                  <h1 style={ {color: '#556B2F', textAlign: 'center', fontFamily:'Lucida Bright', fontSize: '40px', marginTop:'30px'} }>Hello, Welcome to P012's Gallery!!</h1>
                  <div className="container">
        <ul className="nav nav-pills justify-content-center">
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("breakfast")}
            >
              NS200
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("lunch")}
            >
              MT15
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("evening")}
            >
              DUKE200
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => filterItem("dinner")}
            >
              DUKE390
            </a>
          </li>
          <li className="nav-item">
            <a
              className={active ? "nav-link" : "nav-link active"}
              href="javascrip:0;"
              onClick={() => setItems(Menu)}
            >
              All
            </a>
          </li>
        </ul>
      </div>

      <div className="container-fluid mt-4">
        <div className="row">
          {items.map((elem) => {
            const { id, name, image, description, price } = elem;

            return (
              <div className="col-lg-4" id={id}>
                <div class="card mb-4">
                  <div class="row no-gutters">
                    {/* <div class="col-lg-8"> */}
                      <img class="img-fluid" src={image} alt={name} />
                    {/* </div> */}
                    
              
                  {/* //  <Col lg={4} >
                  //     <Col lg={8}>
                  //       <Row noGutters>
                  //     <img style={{paddingTop:'10px', }} src={image} alt={name} />
                  //                            </Row>
                  //     </Col>
                  //   </Col> */}
                   
                   
                    {/* <div class="col-md-7">
                      <div class="card-body">
                        <h5 class="card-title mb-0">{name}</h5>
                        <p class="card-text">{description}</p>
                        <div class="d-flex justify-content-between">
                          <div class="p-1">Price: {price}</div>
                          <button type="button" className="btn btn-success p-1">
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Container style={{marginTop:'40px',}}>
        <Row>
          <p style={{fontSize:'15px', textAlign:'center'}}> © 1996-2022 P012. All Rights Reserved.</p>
        </Row>
      </Container>
     
                </div>
      			 </div >
	);
}

export default Gallery;


