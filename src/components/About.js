import React, {useState} from 'react';
import styled from 'styled-components';
import Contact from './Contact'
import Fade from 'react-reveal';

function About() {
    return (
        <BigContainer>
      <Container>
        <div id='about'>
        <h1>About Us</h1>
        </div>
        <Content>
            <div id='row-1'>
            <div id='image'>
                <img src='/images/AboutUs.png'></img>

            </div>
            <div id='para'>
                <h3>Our Journey</h3>
                <p>
                Delight Departures was founded with the simple yet audacious goal of making travel accessible to all. We recognised that a large number of individuals were looking for reasonably priced, high-quality vacation options. Keeping this in mind, we set out to establish a travel agency that offers exceptional vacations at competitive prices and caters to a variety of interests and preferences.

                Our team of passionate travel enthusiasts recognises the significance of investigating new locales, discovering new cultures, and creating lasting memories. We believe everyone should be able to travel, regardless of their financial situation. Delight Departures was therefore founded to span the divide between budget-conscious vacationers and unforgettable travel experiences.

                </p>
            </div>
            </div>

            <div id='row-2'> 
            <div id='para'>
                <h3>
                Mission
                </h3>
                <p>At Delight Departures, our mission is to provide exceptional travel experiences at affordable prices. We believe that everyone should have the chance to travel, create unforgettable memories, and broaden their horizons. Each tour is meticulously curated to ensure that our clients receive the best value for their money without sacrificing the quality of their travels.

                    We endeavour to provide a variety of destinations to accommodate our customers' diverse interests and preferences. Whether you're looking for a relaxing beach vacation, an adventurous mountain excursion, a cultural immersion in historical cities, or a combination of all of these, our devoted staff will design an itinerary that exceeds your expectations.
                </p>
            </div>
            <div id='image'>
                <img src='/images/About2.png' style={{height:400}}></img>

            </div>
            </div>
            
            <div id='row-3'>
            <div id='image'>
                <img src='/images/About3.png' style={{height:400}}></img>

            </div>
            <div id='para'>
                <h3>Vision</h3>
                <p>
                Our mission at Delight Departures is to become the travel agency of choice for budget-conscious vacationers in search of unforgettable experiences. We intend to establish a reputation for providing vacations that are reasonably priced and well-organized. Our objective is to establish enduring relationships with our clients, so they can rely on us to consistently provide unforgettable travel experiences.

                We are proud of our knowledgeable tour supervisors, who are seasoned professionals with in-depth knowledge of the destinations we offer. Their knowledge enables us to provide you with valuable insights, local recommendations, and individualised service throughout your voyage. Whether you have concerns about a specific attraction, require assistance during

                </p>

            </div>
            </div>
           
           
               
           
        </Content>

      </Container>
      <Fade bottom>
      <Contact />
      </Fade>
      
      </BigContainer>
  
    );
  }
  
  export default About;

const BigContainer = styled.div``
const Container = styled.div`
color: #393b77;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
h1{
    padding: 10px;
    padding-top: 18vh;
    text-shadow: 4px 6px 10px rgba(0,0,0,.45);
    margin-bottom: 10vh;
}

p{
    color: black;
    padding: 10px;
    margin-left: 2vw;
    margin-right: 2vw;
    text-align: left;
    // border: 2px solid rgb(255,196,12);
    // border-radius: 25px;
    // box-shadow: 0 10px 20px 0 rgba(0,0,0,.35);
}
p:hover{
    transform: scale(1.05);
}
@media (max-width: 800px){
    #image{
            display: none;
        
    }
}


`
const Content = styled.div`



p {
    font-size: 18px;
}
#row-1 {
    display: flex;
    justify-content: space-between;
}
#row-2 {
    display: flex;
    justify-content: space-between;
}
#row-3 {
    display: flex;
    justify-content: space-between;
    #image {
        padding-right: 10vw;
    }
}


`
