import React from 'react'
import { Button, Modal, Image} from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "../App.css";


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className="text-center">
            Who We Are & How We Started?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
            <br/>
            <Image src="./assets/elogo.png" style={{width:"450px",height:"300px",borderRadius:"25px"}}  />
            <br/>
            <br/>
            <br/>
            <br/>
            <p>
                    Welcome to Kunji Of Success, your number one source for all things related to business tips & ideas. We’re dedicated to giving you the very best of information, with a focus on businesses, startups, stock market and financial stuff.

                    Founded in 2020 by Pankaj Jain, Kunji Of Success has come a long way from its beginnings in New Delhi, India. When Pankaj first started out, his passion for improving business drove them to do tons of research. so that Kunji Of Success can offer you the world’s best advice, bog on business & startup etc.. We now serve customers all over the world and are thrilled that we’re able to turn our passion into our own website.

                    we hope you enjoy our information as much as we enjoy offering them to you. If you have any questions or comments, please don’t hesitate to contact us at  <a href="mailto:inquiry@kunjiofsuccess.com"  >inquiry@kunjiofsuccess.com</a>
            </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

// const Footer=()=>{
//     const [modalShow, setModalShow] = React.useState(false);
//     return(<>
//                 <footer >
//                     <p style={{textAlign:'center',left:'40%'}}>Copyright © 2020 |  
//                     <span>Powered by <a href="https://my-portfolio-1a95b.web.app/" target="_blank" rel="noopener noreferrer">Pankaj Jain</a></span> | 
//                     <span onClick={() => setModalShow(true)} style={{cursor:"pointer"}}> About us</span> </p>
//                 </footer>
//                 <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//                 />
//             </>
//     )

//   }


  const Footer = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <MDBFooter style={{background:"#1f3d48ff", color:"white"}} className=" pt-5 mt-4 footer">
        <MDBContainer fluid className="text-center text-md-left pb-4">
          <MDBRow className="text-center">
            <MDBCol md="4" className="d-none d-md-block">
            <h5 className="title">Quick Links</h5>
              <ul >
                  <li className="list-unstyled" onClick={() => setModalShow(true)}>
                    About us
                  </li>
                  <li className="list-unstyled">
                    <a href="/terms-and-conditions" >Terms & Conditions</a>
                  </li>
                  <li className="list-unstyled">
                  <a href="/privacy-policy" >Privacy policy</a>
                  </li>
                  <li className="list-unstyled">
                  <a href="/disclaimer" >Disclaimer</a>
                  </li>
              </ul>
            </MDBCol>
            <MDBCol md="4" className="text-center">
              <h5 className="title tools">Tools & Resources</h5>
              <ul >
                  <li className="list-unstyled" >
                    <a href="/startup-calculator" ><i class="fa fa-calculator" aria-hidden="true"></i>  Calculator</a>
                  </li>
                  <li className="list-unstyled " >
                    <a href="/todolist" title="Todo List"><i class="fa fa-list-ol" aria-hidden="true"></i>  Todo Lists</a>
                  </li>
                  
              </ul>
            </MDBCol>
            <MDBCol md="4" >
              <h5 className="title">Socials</h5>
              <ul className="social-network social-circle text-left"> 
              <li>
                  <a href="https://www.facebook.com/Kunjiofsuccess-110280730654877/" className="icoFacebook" title="Facebook">
                    <i class="fa fa-facebook"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/kunjiofsuccess/" className="icoInstagram " title="Linkedin">
                  <i class="fa fa-instagram"/>
                  </a>
                </li>
                
                <li>
                  <a href="https://www.linkedin.com/company/kunjiofsuccess/" className="icoLinkedin " title="Linkedin">
                    <i class="fa fa-linkedin"/>
                  </a>
                </li>
              
                <li>
                  <a href="https://wa.me/918010592093?text=I%27am%20interested" className="icoWhatsapp " title="Whatsapp">
                  <i class="fa fa-whatsapp" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
              
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-1 mt-4">
          <MDBContainer fluid>
             <p style={{textAlign:'center',left:'40%'}}>Copyright © 2020  <span>| All Rights reserved</span>
                     <span> 
                        <span className="d-md-none" onClick={() => setModalShow(true)}> | About us</span>
                        <a href="/privacy-policy" className="d-md-none">| Privacy policy</a>
                        <a href="/terms-and-conditions" className="d-md-none"> | T&C </a>
                        <a href="/disclaimer" className="d-md-none"> | Disclaimer </a>
                     </span>  
             </p>
          </MDBContainer>
          <MyVerticallyCenteredModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                 />
        </div>
      </MDBFooter>
    );
  }
  

export default Footer