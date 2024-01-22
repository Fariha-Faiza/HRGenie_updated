import Head from 'next/head'
import { Inter } from 'next/font/google'
import favicon from "../public/assets/img/brand/favicon.png"
import styles from '@/styles/Home.module.scss'
import { Alert, Button, Col, Form,  Row, Tab, Tabs } from 'react-bootstrap';
import Link from "next/link";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Seo from '@/shared/layout-components/seo/seo'
import { auth } from "../shared/firebase/firebase"
import { Navbar, Dropdown,Modal } from "react-bootstrap";
export default function Home() {

  useEffect(() => {
    if(document.body){
      document.querySelector("body").classList.add("ltr","error-page1","bg-primary")
    }
  
    return () => {
      document.body.classList.remove("ltr","error-page1","bg-primary")
    }
  }, [])


  // Firebase
  const [err, setError] = useState("");
  const [data, setData] = useState({
   "email": "adminnextjs@gmail.com",
  "password": "1234567890",
  })
  const { email, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
// const navigate = useRouter(); 
 const {push}= useRouter(); 
 
  const routeChange = () =>{ 
    let path1 = `/components/dashboards/dashboard1`; 

    let path = `signupWithAuth`; 
   push(path);
  }

  const routeChangeToPricing = () =>{ 
    let path = `/components/landingPageContents/navbar/pricing/`; 
    push(path);
  }

  const Login = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then(
      user => {console.log(user);routeChange()}).catch(err => {console.log(err);setError(err.message)})
  }

  const ReactLogin = (e) => {
    console.log(data);
    if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890"){
      routeChange()
    }
    else{
      setError("The Auction details did not Match")
      setData({
        "email": "adminnextjs@gmail.com",
       "password": "1234567890",
       })
    }
  }

  const [key, setKey] = useState('firebase');
  
  return (
    <>
    <div>
   <Navbar className="main-header side-header sticky nav nav-item">
      <div className="main-container container-fluid">
        <div className="main-header-left ">
         
      
        
        </div>
        <div className="main-header-right">
          <Navbar.Toggle
            className="navresponsive-toggler d-lg-none ms-auto"
            type="button"
          >
            <span className="navbar-toggler-icon fe fe-more-vertical"></span>
          </Navbar.Toggle>
          <div className="mb-0 navbar navbar-expand-lg   navbar-nav-right responsive-navbar navbar-dark p-0">
            <Navbar.Collapse className="collapse" id="navbarSupportedContent-4">
              <ul className="nav nav-item header-icons navbar-nav-right ms-auto">
                <li className="dropdown nav-item">
                <>
                <div className="mt-4 d-flex text-center justify-content-center">


                <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
                href="/components/landingPageContents/navbar/home/"
       
                style = {{"paddingRight": "24px"}}
            >
             Home
      
            </Link>

            <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
                href="/components/landingPageContents/navbar/about/"
             
                style = {{"paddingRight": "24px"}}
            >
         About
      
            </Link>

            <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
                href="/components/landingPageContents/navbar/features/"
             
                style = {{"paddingRight": "24px"}}
            >
     Features
      
            </Link>

            <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
                href="/components/landingPageContents/navbar/resources/"
             
                style = {{"paddingRight": "24px"}}
            >
     Resources 
      
            </Link>


                <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
                href="/components/landingPageContents/navbar/pricing/"
                // onClick={() => routeChangeToPricing()}
                style = {{"paddingRight": "24px"}}
            >
             Pricing
      
            </Link>


            <Link
                className="nav-link"
                data-bs-target="#country-selector"
                data-bs-toggle="modal"
               href="/components/landingPageContents/navbar/system_admin_signIn/"
                onClick={() => routeChange()}
                style = {{"paddingRight": "24px"}}
            >
             SignIn 
            

                
            </Link>

        
    
           </div>
        </>
                </li>
                
               
       
           
              </ul>
            </Navbar.Collapse>
          </div>
        </div>
      </div>
    </Navbar>
       <Seo title={"Home"}/>
 <div className="square-box"> <div></div> <div></div> <div></div> 
   <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> 
  <div></div> <div></div> <div></div> <div></div> <div></div> </div>
  <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> <div></div> 
  

  <div className="page">
        <div
          className="page-single"
          
        >
  
  <h1  style={{"color": "White"}}> HrGenie</h1> 

  </div>
  </div>
</div>


    </>



  )


}
