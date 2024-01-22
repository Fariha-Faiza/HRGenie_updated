
import React from 'react'
import {Basicdata,Business,Monthdata} from "./pricingData"
import { Breadcrumb, Row,Col,Card,Button,Nav,Tab } from 'react-bootstrap';
import Seo from '@/shared/layout-components/seo/seo';
const Pricing = () => (
   <div className="pricing-tabs">
    <div className="">
      <div className="pri-tabs-heading text-center">
      <Tab.Container id="left-tabs-example" defaultActiveKey="Year">
    <Nav variant="pills" className="nav nav-price">
      <Nav.Item>
        <Nav.Link eventKey="Month">Month </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="Year">Year</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
      <Tab.Pane eventKey="Month">
        <React.Fragment>
          <div className="tab-pane pb-0">
            <Row className="d-flex align-items-center justify-content-center">
              {Monthdata.map((playerData, k) => (
                <Col sm={12} xl={3} md={6} lg={6} key={k}>
                  <Card className="p-3 border-primary pricing-card">
                    <Card.Header className="pt-2 text-justified">
                      <p className="tx-18 font-weight-semibold mb-1 pe-0">
                        {playerData.type}
                        <span className="tx-11 float-end badge bg-primary text-white px-2 py-1 rounded-pill mt-2">
                          {playerData.most}
                        </span>
                      </p>
                      <p className="text-justify font-weight-semibold mb-1">
                        
                        <span className="tx-30 me-2">$</span>
                        <span className="tx-30 me-1">
                          {playerData.Monthprice}
                        </span>
                        <span className="tx-24">
                          <span className="op-5 text-muted tx-20">/</span>
                          month
                        </span>
                      </p>
                      <p className="tx-13 mb-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Iure quos debitis aliquam .
                      </p>
                      <p className="tx-13 mb-1 text-primary font-weight-">
                        Billed monthly on regular basis!
                      </p>
                    </Card.Header>
                    <Card.Body className="pt-2">
                      <ul className="text-justify pricing-body text-muted ps-0">
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong>{playerData.free}</strong> Domain Name
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong>{playerData.click}</strong> One-Click Apps
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> {playerData.database}</strong> Databases
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> Money </strong> BackGuarantee
                        </li>
                        <li className="mb-6">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> 24/7</strong> support
                        </li>
                      </ul>
                    </Card.Body>
                    <div className="card-footer text-center border-top-0 pt-1">
                      <Button className="btn btn-lg btn-primary text-white btn-block">
                        <span className="ms-4 me-4">Select</span>
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </React.Fragment>
      </Tab.Pane>
      <Tab.Pane eventKey="Year">
        <React.Fragment>
          <div className="tab-pane">
            <Row className="d-flex align-items-center justify-content-center">
              {Monthdata.map((playerData, k) => (
                <Col key={k} sm={12} xl={3} md={6} lg={6}>
                  <Card className="p-3 border-primary pricing-card">
                    <Card.Header className="text-justified pt-2">
                      <p className="tx-18 font-weight-semibold mb-1 pe-0">
                        {playerData.type}
                        <span className=" tx-11 float-end badge bg-primary text-white px-2 py-1 rounded-pill mt-2">
                          {playerData.most}
                        </span>
                      </p>
                      <p className="text-justify font-weight-semibold mb-1">
                        {" "}
                        <span className="tx-30 me-2">$</span>
                        <span className="tx-30 me-1">
                          {playerData.yearprice}
                        </span>
                        <span className="tx-24">
                          <span className="op-5 text-muted tx-20">/</span>{" "}
                          month
                        </span>
                      </p>
                      <p className="tx-13 mb-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Iure quos debitis aliquam .
                      </p>
                      <p className="tx-13 mb-1 text-primary font-weight-">
                        Billed yearly on regular basis!
                      </p>
                    </Card.Header>
                    <Card.Body className="pt-2">
                      <ul className="text-justify pricing-body text-muted ps-0">
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong>{playerData.free}</strong> Domain Name
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong>{playerData.click}</strong> One-Click Apps
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> {playerData.database}</strong> Databases
                        </li>
                        <li className="mb-4">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> Money </strong> BackGuarantee
                        </li>
                        <li className="mb-6">
                          <span className="text-primary me-2 p-1 bg-primary-transparent  rounded-pill tx-8">
                            <i className="fa fa-check"></i>
                          </span>{" "}
                          <strong> 24/7</strong> support
                        </li>
                      </ul>
                    </Card.Body>
                    <div className="card-footer text-center border-top-0 pt-1">
                      <Button className="btn btn-lg btn-primary text-white btn-block">
                        <span className="ms-4 me-4">Select</span>
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </React.Fragment>
      </Tab.Pane>
    </Tab.Content>
  </Tab.Container>
      </div>
     
    </div>
  </div>
  );
export default Pricing