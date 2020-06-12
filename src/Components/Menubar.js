import React from 'react'
import {Navbar, Nav, Button, Image, NavDropdown} from 'react-bootstrap'


  

const Menubar=()=>{
    
    return(
        <>
            <Navbar collapseOnSelect expand="lg"  className=" p-3"  style={{background:"#FF725E" }} variant="light" sticky="top" >
                <a href="/"  ><Image src="./assets/elogo.png"  style={{height:"70px"}}/></a>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    
                <Nav className="justify-content-center nav" style={{ width: "100%" ,fontSize:"25px"}}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link/>
                    <Nav.Link href="/#services" style={{fontSize:"25px"}} >Services</Nav.Link>
                    <Nav.Link/>
                    <NavDropdown title="Tools" id="basic-nav-dropdown" className="d-none d-md-block" >
                      <NavDropdown.Item href="/todolist"  >To-Do List</NavDropdown.Item>
                      <NavDropdown.Item href="/startup-calculator"  >Startup Calculator</NavDropdown.Item>
                    </NavDropdown>
                    
                    <Nav.Link href="https://wa.me/918010592093?text=I%27m%20interested" target="_blank"  className="d-md-none" >Contact Us</Nav.Link>
                    
                </Nav>

                </Navbar.Collapse>
                <a href="https://wa.me/918010592093?text=I%27m%20interested" target="_blank" rel="noopener noreferrer" className="d-none d-md-block" >
                    <Button variant="danger" id="sayhi" style={{transition:'all 0.5s ease-out',fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('sayhi').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('sayhi').style.transform="scale(1)"} >Say Hello!</Button>
                </a>
                
            </Navbar>
            
        </>
    )
}
export default Menubar





