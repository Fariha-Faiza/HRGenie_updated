import React from 'react'
import { Breadcrumb, Button, Card, Col, Dropdown, Form, FormGroup, Row, Modal } from 'react-bootstrap';
const PlanCreateElements = () => {
  return (
    <div>
         <Row>
        <Col lg={6} md={6}>
          <Card className=" custom-card">
            <Card.Body>
              <div className="main-content-label mg-b-5">Basic Example</div>
              <p className="mg-b-20">A form control layout using basic layout.</p>
              <div className="d-flex flex-column pd-30 pd-sm-20">
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter your username"
                    type="text"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter Your Email"
                    type="email"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Control

                    placeholder="Enter Your Password"
                    type="password"
                  />
                </FormGroup>
                <FormGroup className="form-group">
                  <Form.Label className="ckbox">
                    <Form.Control type="checkbox" />
                    <span className="tx-13">I agree terms and conditions</span>
                  </Form.Label>
                </FormGroup>
                <Button variant="" className="btn ripple btn-primary">
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        </Row> 
    </div>
  )
}

export default PlanCreateElements
