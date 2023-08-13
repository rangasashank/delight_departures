import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import tour from './tour_data'

const tour_comp = ({prop}) => {
    return (
        <Container id='comp'>
        <h1>{prop.place}</h1>
        <h2 id='h4'>{prop.tagline}</h2>
        <Inner>
        <div className='image'>
        <img id='img' src={prop.img}/>
        </div>
        {/* <div className='description'>
        <p>{prop.description}</p>
        </div> */}
        </Inner>
       
        
        </Container>
        


    )
}

export default tour_comp;

const Container = styled.div`
text-align: center;
    h1{
        margin-bottom: 8vh;
    }
    #h4{
        color: black;
    }
    #img:hover{
        transform: scale(1.05);
    }
    #img {
        height: 55vh;
        width: 55vw;
        border-radius: 30px;
        padding: 2vh;
    }


    
`
const Inner = styled.div`
    display: flex;
    text-align: center;
    .description {
        border: 1px solid #fba62a;
        border-radius: 30px;
        font-size: 11px;
        padding-left: 3vh;
        padding-right: 2vh;
    }
    @media (max-width: 768px) {
        .description{
            display: none;
        }
    }

`
