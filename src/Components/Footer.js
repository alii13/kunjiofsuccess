import React from 'react'
import { Button, Modal, Image} from 'react-bootstrap'


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

const Footer=()=>{
    const [modalShow, setModalShow] = React.useState(false);
    return(<>
                <footer >
                    <p style={{textAlign:'center',left:'40%'}}>Copyright © 2020 |  
                    <span>Powered by <a href="https://my-portfolio-1a95b.web.app/" target="_blank" rel="noopener noreferrer">Pankaj Jain</a></span> | 
                    <span onClick={() => setModalShow(true)} style={{cursor:"pointer"}}> About us</span> </p>
                </footer>
                <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </>
    )
}

export default Footer