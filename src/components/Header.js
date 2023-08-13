import React, { useState } from 'react';
import styled from "styled-components";
import {BrowserRouter as Router} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import {Link as Link2} from 'react-router-dom';
import Home from './Home';


function Header() {
  return (
    <BigContainer>
    
    <Container >
        <Logo className='logo'>
            <img src="/images/logo.png" alt='loading'/>
        </Logo>
        <div className='links'>
            <Homee>
                <Link to="#home" style={{ textDecoration: 'none' , color: '#393b77'}}>
                    <div id='txt'>Home</div>
                </Link>
            </Homee>
            <Tours>
            <Link to="#new" style={{ textDecoration: 'none' , color: '#393b77'}}>
                    <div id='txt'>Tours</div>
                </Link>
            </Tours>
            <Testimonials>
                <Link to="#Testimonials" style={{ textDecoration: 'none' , color: '#393b77'}}>
                <div id='txt'>Testimonials</div>
                </Link>
            </Testimonials>
            <About>
                <Link to="#about" style={{ textDecoration: 'none' , color: '#393b77'}}>
                <div id='txt'>About</div>
                </Link>
            </About>
            <Contact>
                <Link to="#Contact" style={{ textDecoration: 'none' , color: '#393b77'}}>
                <div id='txt'>Contact</div>
                </Link>
            </Contact>
        </div>
    </Container>
    <Home />
   
    
    </BigContainer>
   

  );
}

export default Header;


const BigContainer = styled.div``
const Container = styled.div`
background: whitesmoke;
font-size: 18px;
height: 13vh;
color: #393b77;
position: fixed;
display: flex;
align-items: center;
top: 1vh;
left: 50%;
transform: translate(-50%);
z-index: 1;
box-shadow: 0 10px 20px 0 rgba(0,0,0,.35);
border-radius: 13px;
width: 90%;


.links{
display: flex;
align-items: center;
padding-left: 20vw;

#txt:hover {
    color: #fba62a;
    transform: scale(1.2);
}

}
@media (max-width: 768px) {
    height: 10vh;
    justify-content: space-between;
    font-size: 12px;
    width: 95%;

    .links{
        padding-left: 0vw;
    }

  }

`
const Logo = styled.div`
    img {
        height: 115px;
        width: 115px;
    }
    @media (max-width: 768px) {
        img{
            height: 50px;
            width: 50px;
        }
      }
   
`

const Homee = styled.div`
padding: 7px;
margin-top: 10px;
@media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Tours = styled.div`
padding: 7px;
margin-top: 10px;
margin-left: 2vw;
@media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Testimonials = styled.div`
padding: 7px;
margin-top: 10px;
margin-left: 2vw;
@media (max-width: 768px) {
    margin-top: 10px;
  }
`
const About = styled.div`
padding: 7px;
margin-top: 10px;
margin-left: 2vw;
@media (max-width: 768px) {
    margin-top: 10px;
  }
`
const Contact = styled.div`
margin-right: 100px;
padding: 7px;
margin-top: 10px;
margin-left: 2vw;
@media (max-width: 768px) {
    margin-top: 10px;
  }

`
