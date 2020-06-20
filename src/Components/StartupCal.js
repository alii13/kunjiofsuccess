import React, { Component } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Modal,
  Card,
} from "react-bootstrap";
import "../Config";
import * as firebase from "firebase";

class StartupCal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      total: 0,
      onetime: 0,
      monthly: 0,
      months: 0,
      alert: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
  }
  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    var onetimesum = 0;
    for (var i = 0; i < 8; i++) {
      onetimesum = parseInt(onetimesum) + parseInt(event.target[i].value);
    }
    var monthlysum = 0;
    for (var j = 8; j < 18; j++) {
      monthlysum =
        parseInt(monthlysum) +
        parseInt(
          parseInt(event.target[18].value) * parseInt(event.target[j].value)
        );
    }
    var total = parseInt(onetimesum) + parseInt(monthlysum);
    this.setState({ months: event.target[18].value });
    this.setState({ onetime: onetimesum });
    this.setState({ monthly: monthlysum });
    this.setState({ total: total });
    this.handleShow();
  }

  handleModalSubmit(event) {
    event.preventDefault();
    firebase.database().ref("StartupCalculatorClients").push({
      name: event.target[0].value,
      phone: event.target[1].value,
      monthly: this.state.monthly,
      onetime: this.state.onetime,
      total: this.state.total,
    });
    this.setState({ alert: "We will contact you soon." });
    this.handleClose();
  }

  render() {
    return (
      <div style={{ padding: "100px 0 100px 0" }}>
        <Container className="text-left">
          <div className="heading">
            
            <h1 className="heading__title">Startup Cost Calculator</h1>
          </div>
          <div className="" style={{ paddingTop: "30px" }}>
            <p className="h5 pb-3">One-Time StartUp Expenses</p>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group as={Row} controlId="form2">
                <Form.Label column md="6">
                  1. Office furniture
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form3">
                <Form.Label column md="6">
                  2. Computer hardware and software
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form4">
                <Form.Label column md="6">
                  3. Setup, installation and consulting fees
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form8">
                <Form.Label column md="6">
                  4. Starting inventory, raw materials, tools, etc.
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form10">
                <Form.Label column md="6">
                  5. Legal and other professional fees
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form11">
                <Form.Label column md="6">
                  6. Business licenses and permits
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form12">
                <Form.Label column md="6">
                  7. Advertising and promotion for opening
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form14">
                <Form.Label column md="6">
                  8. Rent & security deposit (often equals 3 months rent)
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>

              <p className="h5 pb-3 pt-3">Ongoing Monthly Expenses </p>
              <Form.Group as={Row} controlId="form17">
                <Form.Label column md="6">
                  9. Salary of owner-manager (amount you need to pay yourself)
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form18">
                <Form.Label column md="6">
                  10. All other salaries, wages, & commissions
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form19">
                <Form.Label column md="6">
                  11. Payroll taxes or self-employment tax
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form20">
                <Form.Label column md="6">
                  12. Rent
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form26">
                <Form.Label column md="6">
                  13. Utilities
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="form28">
                <Form.Label column md="6">
                  14. Website hosting and maintenance
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form32">
                <Form.Label column md="6">
                  15. Interest & principal on loans & credit cards
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form34">
                <Form.Label column md="6">
                  16. Legal and other professional fees
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form35">
                <Form.Label column md="6">
                  17. Franchise fee
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId="form36">
                <Form.Label column md="6">
                  18. Miscellaneous
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="0" />
                </Col>
              </Form.Group>
              <span className="h5">Calculate Total Start-up Funds </span>
              <Form.Group as={Row} controlId="form37">
                <Form.Label column md="6">
                  19. Estimate the number of months needed to find customers and
                  get established
                </Form.Label>
                <Col md="3">
                  <Form.Control type="number" defaultValue="1" />
                </Col>
              </Form.Group>
              <Row>
                <Col md="6"></Col>
                <Col md="3">
                  <Button
                    className="btn-block"
                    variant="outline-primary"
                    type="submit"
                  >
                    Calculate
                  </Button>
                  <br />
                  {this.state.alert && (
                    <alert className="alert alert-success">
                      {this.state.alert}
                    </alert>
                  )}
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Your Startup's Total Estimate Cost</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-left">
            <Row>
              <Col sm={8}>Monthly expense for {this.state.months} months </Col>
              <Col sm={4}>₹{this.state.monthly}</Col>
            </Row>
            <Row>
              <Col sm={8}>One time start-up expense </Col>
              <Col sm={4}>
                ₹{this.state.onetime}
                <hr />
              </Col>
            </Row>
            <Row>
              <Col sm={8}>Total start-up costs </Col>
              <Col className="font-weight-bold" sm={4}>
                ₹{this.state.total}
              </Col>
            </Row>
            <hr />
            <Card body>
              <p className="h5 text-center">
                Would you like us to help you?
              </p>
              <Form onSubmit={this.handleModalSubmit}>
                <Form.Group as={Row} controlId="formBasicName">
                  <Form.Label column sm="2">
                    Name
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="text"
                      placeholder="Enter your Name"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formBasicPhone">
                  <Form.Label column sm="2">
                    Phone
                  </Form.Label>
                  <Col sm="10">
                    <Form.Control
                      type="number"
                      pattern="/^d{10}$/"
                      placeholder="Enter Phone Number"
                      required
                    />
                    <Form.Text className="text-muted">
                      We'll never share your details with anyone else.
                    </Form.Text>
                  </Col>
                </Form.Group>
                <Row>
                  <Col sm="2"></Col>
                  <Col sm="10">
                    <Button variant="primary" type="submit">
                      Contact Us
                    </Button>{" "}
                    <Button variant="secondary" onClick={this.handleClose}>
                      Will Do it later
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default StartupCal;
