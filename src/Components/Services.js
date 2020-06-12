import React from 'react'
import {Container,Card,Button,CardDeck,Modal} from 'react-bootstrap'
import { useState } from 'react';


export default function Services() {
    const [webshow, websetShow] = useState(false);
    const [onlineshow, onlinesetShow] = useState(false);
    const [socialshow, socialsetShow] = useState(false);

    const webhandleClose = () => websetShow(false);
    const webhandleShow = () => websetShow(true);
    const onlinehandleClose = () => onlinesetShow(false);
    const onlinehandleShow = () => onlinesetShow(true);
    const socialhandleClose = () => socialsetShow(false);
    const socialhandleShow = () => socialsetShow(true);
    return (
        <React.Fragment>
            <section id="services" className="mt-5">
                <Container className="text-center">
                    <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"AvenirNextBold'}} className="d-block d-md-none">OUR SERVICES</h2>
                    <h2 variant="danger" style={{fontSize:"50px", fontFamily:'"AvenirNextBold'}} className="d-none d-md-block">OUR SERVICES</h2>
                   
                    <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}}>Our markup services will help you sort through the digital & marketing stuff, so you can focus on the things you do best.</p>
                    <br/>
                    <br/>
                    <br/>
                   <br/>
                    <CardDeck className="text-center ">
                        <Card className="border border-danger">
                            <Card.Img variant="top" src="/assets/webdesigning.png" />
                            <Card.Body>
                                <Card.Title style={{fontSize:"25px"}}>Website Designing</Card.Title>
                                <Card.Text>
                                    Website is the key component of a business, We take Website designing seriously.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button variant="danger" id="web" onClick={webhandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('web').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('web').style.transform="scale(1)"} >EXPLORE MORE</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border border-danger">
                            <Card.Img variant="top" src="/assets/marketing.png" />
                            <Card.Body>
                                <Card.Title style={{fontSize:"25px"}}>Online Marketing</Card.Title>
                                <Card.Text>
                                    Even a noob can build a normal website these days! But what about marketing? Don't worry we got you covered.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer >
                                <Button variant="danger" id="online" onClick={onlinehandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('online').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('online').style.transform="scale(1)"} >EXPLORE MORE</Button>
                            </Card.Footer>
                        </Card>
                        <Card className="border border-danger">
                            <Card.Img variant="top" src="/assets/social1.png" />
                            <Card.Body>
                            <Card.Title style={{fontSize:"25px"}}>Social Engagement</Card.Title>
                                <Card.Text >
                                    Engaging with the customer as per their needs is so hectic. Use our CRM team to deal with the customers and make them addicted to your services.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="danger" id="social" onClick={socialhandleShow} style={{fontSize:"18px", borderRadius:"25px", boxShadow:"0 10px 20px 0 rgba(0, 0, 0, 0.2)"}} 
                    onMouseOver={()=>document.getElementById('social').style.transform="scale(0.9)"} 
                    onMouseOut={()=>document.getElementById('social').style.transform="scale(1)"} >EXPLORE MORE</Button>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </Container>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            {/* web designing modal */}
            <Modal show={webshow} onHide={webhandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Web Designing | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="web designing" width="100%" height="415" src="https://www.youtube.com/embed/JbGsRHq9OCw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={webhandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Online Marketing modal */}
            <Modal show={onlineshow} onHide={onlinehandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Online Marketing | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="Online Marketing" width="100%" height="415" src="https://www.youtube.com/embed/2k4_Bmoxf80?controls=0"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={onlinehandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>

            {/* Social engagement modal */}
            <Modal show={socialshow} onHide={socialhandleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Social Engagement | KunjiOfSuccess</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe title="Social engagement" width="100%" height="415" src="https://www.youtube.com/embed/9QR6e8dmzGM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" onClick={socialhandleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            
        </React.Fragment>
    )
}
