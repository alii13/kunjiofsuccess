import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'



export class Clients extends React.Component {


    render(){
        
        return(<Container className="text-center">
                    <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif'}} className="d-block d-md-none">Our Clients</h2>
                    <h2 variant="danger" style={{fontSize:"50px", fontFamily:'"Hammersmith One", sans-serif'}} className="d-none d-md-block">Our Clients</h2>
                    
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block">We are working with 10+ clients. Some of our selected clients are as below</p>
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none">We are working with 10+ clients. Some of our selected clients are as below</p>
                    <br/>
                    <br/>
                    

                    <Row >
                        <Col xs={12} md={4} lg={4}  className="mt-5">
                            <Image width="150px" src="./assets/sp.png"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}}  onMouseOver={()=>document.getElementById('sayhi').style.transform="scale(1.1)"} 
                    onMouseOut={()=>document.getElementById('sayhi').style.transform="scale(1)"} roundedCircle/>
                        </Col>
                        <Col xs={12} md={4} lg={4}   className="mt-5">
                            <Image width="150px" src="./assets/rivertab.png"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} onMouseOver={()=>document.getElementById('sayhi').style.transform="scale(1.1)"} 
                    onMouseOut={()=>document.getElementById('sayhi').style.transform="scale(1)"} roundedCircle/>
                        </Col>
                        <Col xs={12} md={4} lg={4}  className="mt-5">
                            <Image width="150px" src="./assets/bigtyme.png"  style={{ borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} onMouseOver={()=>document.getElementById('sayhi').style.transform="scale(1.1)"} 
                    onMouseOut={()=>document.getElementById('sayhi').style.transform="scale(1)"} roundedCircle/>
                        </Col>
                        
                    </Row>
                
                </Container>

        )
            
            
            }
}


export default Clients
