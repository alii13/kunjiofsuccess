import React from 'react'
import {useState} from 'react'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'

function Hero() {
    return (
        <div>
            <Container fluid>
                <Row className="pt-5">
                    <Col xs={12} md={12} lg={7} className="align-self-center">
                    <Container className="text-center">
                    <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none ">About Us</h1>
                    <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">About Us</h1>
                    <div style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px",textAlign:"justify"}} className="d-none d-md-block">
                        <p> A full service digital marketing agency with highly creative and passionate experts for building relationship between Brands & Customers through the combination of 
                        technology and communication. Bring your marketing challenges and we will track your success. We are here to build a strong offline and online presence of your Businesss.</p>
                        <p><b>Different is Boring. We make your business Unique.</b></p>
                    </div>
                    <div style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px",textAlign:"justify"}} className="d-block d-md-none">
                        <p> A full service digital marketing agency with highly creative and passionate experts for building relationship between Brands & Customers through the combination of 
                        technology and communication.</p>
                        <p>Bring your marketing challenges and we will track your success. We are here to build a strong offline and online presence of your Businesss.</p>
                        <p><b>Different is Boring. We make your business Unique.</b></p>

                    </div>
                    </Container>
                    </Col>
                    <Col xs={12} md={12} lg={5} className="d-flex justify-content-md-center">
                    <Image  src="./assets/gallery.jpg" className="img-fluid w-100 h-100"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
