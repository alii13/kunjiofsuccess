import React from 'react'
import {useState} from 'react'
import {Row,Container, Col,Image,Carousel} from 'react-bootstrap'

function Writer(){ // Contentwiters Carousel
const [index, setIndex] = useState(0);
const handleSelect = (selectedIndex, e) => {
setIndex(selectedIndex);
};
return (
<>
<Container fluid className="text-center" style={{marginTop:"5rem",marginBottom:"5rem"}}>
                <Row className="pt-5">
                <Col xs={12} md={12} lg={12} >
                <h1 variant="danger" style={{fontSize:"4rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none ">Content Creators</h1>
                <h1 variant="danger" style={{fontSize:"7rem", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className=" color d-none d-md-block text-lg-left">Content Creators</h1>
                </Col>

                <Container className="m-t-7" style={{marginTop:"5rem"}}> 
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={7000}>
                <Carousel.Item>
                    <Row>
                        <Col xs={12} md={5}>
                            <Image width="200" height="200" src="/assets/Wilber.png" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                        </Col>
                        <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Wilber Brandon</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className=" color d-none d-md-block text-lg-left">Wilber Brandon</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                        <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col xs={12} md={5}>
                            <Image width="200" height="200" src="/assets/Wilber.png" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                        </Col>
                        <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Wilber Brandon</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Wilber Brandon</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                        <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                    <Col xs={12} md={5}>
                        <Image  src="/assets/Wilber.png" className="img-fluid" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 20px 0px"}} roundedCircle></Image>
                    </Col>
                    <Col xs={12} md={6} className="">
                        <h2 variant="danger" style={{fontSize:"30px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-block d-md-none text-lg-left">Wilber Brandon</h2>
                        <h2 variant="danger" style={{fontSize:"40px", fontFamily:'"Hammersmith One", sans-serif',fontWeight:"bolder"}} className="color d-none d-md-block text-lg-left">Wilber Brandon</h2>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"18px"}} className="d-block d-md-none text-lg-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <p style={{fontFamily:'"Metrophobic", sans-serif', fontSize:"20px"}} className="d-none d-md-block text-justify">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor Lorem ipsum dolor</p>
                        <div className="text-lg-left d-block d-md-none"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem",padding:"1.3rem"}}></i></a></span> <span><a href="https://google.com"><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2rem"}}></i></a></span></div>
                        <div className="text-lg-left d-none d-md-block"><span><a href="https://google.com"><i className="fa fa-instagram card-icons text-lg-left" aria-hidden="true" style={{fontSize:"2.6rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span> <span><a href="https://google.com" ><i className="fa fa-linkedin card-icons text-lg-left" aria-hidden="true" style={{fontSize:"3rem",padding:"0 0.6rem 0 0.6rem"}}></i></a></span></div>
                    </Col>
                </Row>
                </Carousel.Item>   
    </Carousel>

</Container>
               
                </Row>

</Container>

</>
);
}

export default Writer
