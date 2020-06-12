import React,{Component} from 'react'
import { Container,Form,Button, Row, Col} from 'react-bootstrap'

class StartupCal extends Component  {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (<div style={{padding:"100px 0 100px 0"}}>
                    <Container className="text-center" >
                        <div className="heading">
                            <img  alt="todo list" style={{width:"100px"}} src="https://www.pngmart.com/files/7/Money-PNG-Transparent-Image.png"/>
                            <h1 className="heading__title">Startup Cost Calculator</h1>
                            <img  alt="todo list" style={{width:"100px"}} src="https://www.pngmart.com/files/7/Money-PNG-Transparent-Image.png"/>
                        </div>
                        <div className="" style={{paddingTop:"30px"}}>
                            <Form onSubmit={this.handleSubmit}>
                                
                                <Form.Group as={Row} controlId="formHorizontalEmail" >
                                    <Form.Label column sm={2}>
                                        Office Furniture
                                    </Form.Label>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="Office furniture cost"  onChange={this.handleChange} required/>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="formHorizontalEmail">
                                    <Form.Label column sm={2}>
                                        Signage
                                    </Form.Label>
                                    <Col sm={3}>
                                        <Form.Control type="number" placeholder="Enter Signage" onChange={this.handleChange} required/>
                                    </Col>
                                </Form.Group>
                                
                                
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                                    
                        </div>
                    </Container>
                 </div>
        );
      }
    }
    
export default StartupCal
