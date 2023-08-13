import React, { useEffect, useState } from 'react';
import styled from "styled-components";
const ImgContainer = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === slides.images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            } 
           
        }, 3500)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
    return (
        <Container id='imgContainer'>
            <div className='text'>
            <p><span id='decorate'>{slides.name}</span>,{slides.quote}</p>
            </div>
            <div id='hidden-text'>
            </div>
            <div className='img'>
            
             <img id="greatHover" src={slides.images[currentIndex]}/>
             </div>
            
        </Container>

    )
}
export default ImgContainer;

const Container = styled.div`
        
    display: flex;
    justify-content: space between;
    margin: 1vh;

    .img img{
        height: 40vh;
        width: 40vw;
    }

    @media (max-width: 850px) {
       p{
        display: none;
       }
       .img img{
            width: 70vw;
       }
    }


    .text p{
        color: black;
        font-size: 30px;
        margin-right: 5vw;
        margin-left: 3vw;
    }
    .img{
        margin-right: 2vw;
    }
    .img img{
        border-radius: 30px;
    }

    #decorate{
        color: #393b77;
        font-weight: bold;

    }

`