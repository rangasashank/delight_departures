import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import ImgContainer from "./ImgContainer";
import {HashLink as Link} from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import Tours from "./Tours";
import Testimonials from './Testimonials'
import Fade from 'react-reveal';


let topCountries = [{images: ["/images/TopLocations/Bali/b1.jpg","/images/TopLocations/Bali/b2.jpg", "/images/TopLocations/Bali/b3.jpg",
"/images/TopLocations/Bali/b4.jpg", "/images/TopLocations/Bali/b5.jpg", "/images/TopLocations/Bali/b6.jpg",
"/images/TopLocations/Bali/b7.jpg"], name: "Bali", quote: " often referred to as the \"Island of the Gods,\" is a tropical paradise located in Indonesia. Known for its stunning landscapes, rich cultural heritage, and warm hospitality, Bali attracts travelers from all over the world. With its pristine beaches, lush rice terraces, volcanic mountains, and vibrant coral reefs, this enchanting island offers a diverse range of experiences for every kind of traveler."}


, {images: ["/images/TopLocations/Malaysia/m1.jpg", "/images/TopLocations/Malaysia/m2.jpg",
"/images/TopLocations/Malaysia/m3.jpg", "/images/TopLocations/Malaysia/m4.jpg", "/images/TopLocations/Malaysia/m5.jpg",
"/images/TopLocations/Malaysia/m6.jpg"], name: "Malaysia", quote: " a vibrant Southeast Asian country, is a melting pot of diverse cultures, stunning landscapes, and a vibrant culinary scene. With a mix of modern cities, lush rainforests, and pristine beaches, Malaysia offers a captivating experience for travelers."}


,{images: ["/images/TopLocations/Singapore/s1.jpg", "/images/TopLocations/Singapore/s2.jpg",
"/images/TopLocations/Singapore/s3.jpg", "/images/TopLocations/Singapore/s4.jpg", "/images/TopLocations/Singapore/s5.jpg",
"/images/TopLocations/Singapore/s6.jpg", "/images/TopLocations/Singapore/s7.jpg"], name: "Singapore", quote: " a bustling cosmopolitan city-state located in Southeast Asia, is a captivating destination that seamlessly blends modernity with tradition. Known for its efficient infrastructure, vibrant multiculturalism, and diverse culinary scene, Singapore offers a unique travel experience for visitors of all interests."}


,{images: ["/images/TopLocations/Dubai/d1.jpg","/images/TopLocations/Dubai/d2.jpg", "/images/TopLocations/Dubai/d3.jpg", 
"/images/TopLocations/Dubai/d4.jpg", "/images/TopLocations/Dubai/d5.jpg"], name: "Dubai", quote: " a dazzling metropolis in the United Arab Emirates, is a destination that epitomizes grandeur, innovation, and luxury. Renowned for its futuristic skyline, opulent shopping malls, and world-class attractions, Dubai offers an extraordinary experience for travelers."}]


 function Home() {

  const [slide, setSlide] = useState(0); 
  const [clicked, setClicked] = useState(false);
  const [vieww, setVieww] = useState("See More");

  function prev() {
    if (slide === 0) {
        setSlide(topCountries.length-1);
    }
    else {
      setSlide(slide-1);
    }
  }


  function next() {
    if (slide === topCountries.length-1) {
        setSlide(0);
    }
    else {
      setSlide(slide+1);
    }
  }

  function click_fun() {
    if(clicked == false){
      setClicked(true);
      setVieww("See Less");

    }
    else{
      setClicked(false);
      setVieww("See More");

    }
  }




    return (
      <BigContainer>
      <Container>
      <ImgHome id='home'>
      <img style={{height: '100vh', width: '100%'}}src='/images/Home/5.jpg'/>
      <div className='text'>
        <h1>Crafting Memories, One Destination at a Time</h1>
          <Link to='#new'><button id='click'>Explore Tours</button></Link>
  
       
        </div>
      
      </ImgHome>

      <Fade bottom>
      <SecondHome id='new'>
      <h1>Popular Destinations</h1>
      <p>Tours that give you a lot within a given time frame</p>
      <h4>All packages start from ₹39,999, <Link to='#Contact'>Contact</Link> for a detailed itenary</h4>
      <h3>{topCountries[slide].name}</h3>

        <SecondContainer>

          <div className='first'> 
                <button id='prev' onClick={prev}>
                  <img src='/images/left-arrow.png'></img>
                </button>
              <div className='images' >
              <ImgContainer slides = {topCountries[slide]} />
              </div>
                
                <button id='next' onClick={next}>
                  <img src='/images/right-arrow.png'></img>
                </button>

            
          </div>
        </SecondContainer>
        
        <SeeMore onClick={click_fun}>{vieww}</SeeMore>
        {clicked && <Fade bottom><Tours /></Fade>}
       
      </SecondHome>
      </Fade>
      </Container>
      <Testimonials />
      </BigContainer>
     
          

    )
}

export default Home;
const BigContainer = styled.div``
const ImgHome = styled.div`

.text{
  color: whitesmoke;
  position: absolute;
  top:25%;
  left:28%;
  text-align: center;
  text-shadow: 4px 6px 10px rgba(0,0,0,.45);
}
#click {

  display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 25px;
  color: #393b77;
  background: whitesmoke;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 12px 20px;
  text-align:center;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  :hover{
      color: #000;
      background: #fba62a;
  }
  
}

@media (max-width: 768px) {
  img{
    padding-top: 8vh;

  }
  .text{
    color: whitesmoke;
    position: absolute;
    top:20%;
    left:10%;
    text-align: center;
  }
}
`
const Container = styled.div`
color: #393b77;



`
const SecondContainer = styled.div`
      img {
        height: 2vh;
        width: 2vw;
      }
      .first{
        display: flex;
        flex-direction: row;
      }

`

const SecondHome = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h3{
  display:none;
}
  h1{
    margin-top: 12rem;
    text-align: center;
    text-shadow: 4px 6px 10px rgba(0,0,0,.45);

  }

  h4{
    color: #fba62a;
  }
  p{
    margin-top: 6vh;
    text-align: center;
    margin-bottom: 4vh;
    color: #000;
  }

  @media (max-width: 800px) {
    h3{
      display: block;
    }
  }
`

const SeeMore = styled.button`
margin-top:8vh;
text-align: center;
display: inline-block;
  outline: 0;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 25px;
  color: #393b77;
  background: whitesmoke;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 12px 20px;
  text-align:center;
  transition-duration: .15s;
  transition-property: all;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  :hover{
      color: #000;
      background: #fba62a;
`