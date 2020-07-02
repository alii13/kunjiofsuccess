import React from 'react'
import {useState} from 'react'
import {Carousel,Container} from 'react-bootstrap'
import Additional from './Additional'
import Contact from './Contact'
import Clients from './Clients'
import Services from './Services'



const Homepage=()=>{
    function ControlledCarousel() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
      
        return (<>
        <Container id="home" className="m-t-7"> 
          <Carousel activeIndex={index} onSelect={handleSelect}>
            
                   
                          <Carousel.Item>
                          <img
                              className="d-block w-100"
                              src="/assets/1.png"
                              alt="Third slide"
                              />
                              <Carousel.Caption>
                              
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                              className="d-block w-100"
                              src="/assets/2.png"
                              alt="Third slide"
                              />
      
                              <Carousel.Caption>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <img
                              className="d-block w-100"
                              src="/assets/3.png"
                              alt="Third slide"
                              />
      
                              <Carousel.Caption>
                              </Carousel.Caption>
                          </Carousel.Item>
                          
                  
                  
          </Carousel>
          
          </Container>
           
                <br/>
                <br/>
          <Services/>
          <Additional/>
          <Clients/>
          <Contact/>
          </>
        );
      } //function controlledcarousel
        return(
                <ControlledCarousel/>
        )
}
export default Homepage