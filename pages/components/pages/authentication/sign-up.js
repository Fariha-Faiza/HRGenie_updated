import React from "react";
import Link from "next/link";
import { useEffect, useState } from 'react'
import {  Button, Col, Form, FormGroup, Row } from 'react-bootstrap';
// import * as Switcherdatacustam from "../../../../shared/data/switcher/Switcherdatacustam";
import Seo from "@/shared/layout-components/seo/seo";
const SignUp = () =>{
  const [err, setError] = useState("");
  const [data, setData] = useState({
    fullName: "xyz",
    email: "123@xyx.com", 
    userName: "xyx", 
    password :"****"
     })
     const { fullName, email, userName, password  } = data;  

     const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value })
      setError("");
    }
    const routeChange = () =>{ 
      let path = `/components/landingPageContents/navbar/system_admin_signIn`; 
      navigate.push(path);
    }

    
 

    function systemAdminRegistration(e) {
      e.preventDefault();
      const myHeaders = new Headers()
      myHeaders.append("Content-Type", "application/json", )
      let my_url = `http://115.127.82.154:8080/sysuser/create` ////// Super Admin
      let my_data = { 
    full_name: fullName,
    email: email,
    username: userName,
    password:password,   
      }  
      const requestOptions = { 
        method: "POST",
        headers: myHeaders, 
        // body: formData,
        body: JSON.stringify(my_data),
        redirect: "follow",
      }
      return fetch(my_url, requestOptions).then((res) => {
        console.log("data", res)
        return res.json().then((data) => {
          
          console.log("data", data)
          if (res.ok) {
           // setToken(data.token.access);
            //history.push("/org/permission");
            routeChange()
            return { ok: true, data }
          } else {
           // setError(data.error);
            return { ok: false, err: res, data }
          }
        })
  
      })
    
    }
  


  return (
    <div>
      <Seo title={"Sign-Up"}/>
      <div className="square-box"> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> </div>
      <div className="page">
        <Row>
          <div className="d-flex">
            
          </div>
        </Row>
        <div
          className="page-single"
          // onClick={() => Switcherdatacustam.Swichermainrightremove()}
        >
          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main py-4 justify-content-center mx-auto"
              >
                <div className="card-sigin ">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
                        <Link href={`/components/dashboards/dashboard1/`}>
                          <img
                            src={"../../../../assets/img/brand/favicon.png"}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          <h2 className="text-dark">Get Started</h2>
                          <h6 className="font-weight-normal mb-4">
                            {`It's`} free to signup and only takes a minute.
                          </h6>
                        
                          <Form action="#">
                            <FormGroup className="form-group">
                              <Form.Label>Firstname &amp; Lastname</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your firstname and lastname"
                                type="text"
                                name='fullName'
                                value={fullName}
                                onChange={changeHandler}
                                required
                              />
                            </FormGroup>
                            <FormGroup className="form-group">
                              <Form.Label>Email</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your email"
                                type="text"
                                name='email'
                                value={email}
                                onChange={changeHandler}
                                required
                              />
                            </FormGroup>

                            <FormGroup className="form-group">
                              <Form.Label>UserName</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your user name"
                                type="text"
                                name='userName'
                                value={userName}
                                onChange={changeHandler}
                                required
                              />
                            </FormGroup>

                            <FormGroup className="form-group">
                              <Form.Label>Password</Form.Label>{" "}
                              <Form.Control
                                className="form-control"
                                placeholder="Enter your password"
                                type="password"
                                name='password'
                                value={password}
                                onChange={changeHandler}
                                required
                              />
                            </FormGroup>
                            <Button onClick={systemAdminRegistration}
                              variant=""
                              className="btn btn-primary btn-block"
                            >
                              Create Account
                            </Button>

                            <div className="mt-4 d-flex text-center justify-content-center">
                              <Link
                                href="https://www.facebook.com/"
                                target="_blank"
                                className="btn btn-icon btn-facebook me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                href="https://www.twitter.com/"
                                target="_blank"
                                className="btn btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                href="https://www.linkedin.com/"
                                target="_blank"
                                className="btn btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                              <Link
                                href="https://www.instagram.com/"
                                target="_blank"
                                className="btn  btn-icon me-3"
                                type="button"
                              >
                                <span className="btn-inner--icon">
                                  {" "}
                                  <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                </span>
                              </Link>
                            </div>
                          </Form>
                          <div className="main-signup-footer mt-3 text-center">
                            <p>
                              Already have an account?{" "}
                              <Link href={`/components/pages/authentication/sign-in/`}>Sign In</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
  }
SignUp.propTypes = {};

SignUp.defaultProps = {};

SignUp.layout = "Authenticationlayout"

export default SignUp;
