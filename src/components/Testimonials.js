import React, {useState, useEffect} from 'react';
import data from "./test_data";
import styled from 'styled-components';
import About from './About';
import Fade from 'react-reveal';

const Testimonials = () => {
    const[people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(()=> {
        let slider = setInterval(()=> {
            if (index === people.length -1) {
                setIndex(0);
            }
            else {
                setIndex(index + 1);
           }
        }, 10000)
        return ()=> {
            clearInterval(slider)
        }
    }, [index])
    return (
        <BigContainer>
        <Fade bottom>
        <Container id='Testimonials'>
            
            <h1 >Testimonials</h1>
            <div id='happiness'>
                <p>Your Happiness is what we strive for!</p>
            </div>
            <div id='inner'>
            <img id = 'image' src='/images/Testimonials.png'></img>
            <div className='review'>
                <p>{people[index].quote}</p>
                <h4>{people[index].name}, {people[index].title}</h4>
            </div>
            </div>
        </Container>
        </Fade>
        <Fade bottom>
        <About />
        </Fade>
        </BigContainer>
        

    )
}

export default Testimonials;
const BigContainer = styled.div``

const Container = styled.div`
color: #393b77;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
text-align: center;
h1{
    padding-top: 3vh;
    text-shadow: 4px 6px 10px rgba(0,0,0,.45);
    margin-bottom: 7vh;
}
#happiness {
    color: black;
    font-size: 20px;
    margin-bottom: 5vh;
    text-align: center;
}
.review{
    p{
        color: black;
        text-align: justify;
        font-size: 20px;
    }
    h4{
        font-size: 30px;
    }
    border: 2px solid #fba62a;
    border-radius: 25px;
    margin: 5vh;
    padding: 2vh;
   
}
h1{
    margin-top: 16vh;
}
#inner {
    display: flex;
}
@media (max-width: 800px){
    #image{
            display: none;
        
    }
}

`
