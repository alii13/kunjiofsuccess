import React from 'react'
import {Figure, Container, Row, Col} from 'react-bootstrap'

export default function Additional() {
    return (
        <>
            
                   <br/>
                   <br/>
            <Container className="text-center">
                 <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Montserrat", sans-serif'}} className="d-block d-md-none">THINGS ON US</h2>
                 <h2 variant="danger" style={{fontSize:"50px", fontFamily:'"Montserrat", sans-serif'}} className="d-none d-md-block">THINGS ON US</h2>
                   
                   <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block">What is a company if it doesn't offer you something for free. Well, We believe in offering more than one can expect.</p>
                   <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none">What is a company if it doesn't offer you something for free. Well, We believe in offering more than one can expect.</p>
                   <br/>
                   <br/>
                   <br/>
                   <br/>
                <Row style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} >
                    <Col xs={12} md={6} lg={3}>
                        <Figure >
                            <Figure.Image 
                                width={350}
                                height={250}
                                alt="171x180"
                                src="/assets/recession.gif"
                                
                                />
                            <Figure.Caption>
                                Recession proof business
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Figure >
                            <Figure.Image 
                                width={350}
                                height={250}
                                alt="171x180"
                                src="/assets/UserX.gif"
                                
                                />
                            <Figure.Caption>
                                User Experience
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Figure >
                            <Figure.Image 
                                width={300}
                                height={200}
                                alt="171x180"
                                src="assets/stats.gif"
                                
                                />
                            <Figure.Caption>
                                Business Analytics
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Figure >
                        
                            <Figure.Image 
                                width={300}
                                height={200}
                                alt="171x180"
                                src="/assets/support1.gif"
                                
                                />
                            <Figure.Caption>
                                24/7 Support
                            </Figure.Caption>
                        </Figure>
                    </Col>
                </Row>
            </Container>
            <br/>
            <br/>
            <br/>
        </>

    )
}
