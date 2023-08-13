import React, {useState} from 'react';
import styled from 'styled-components';
import '../App.css';
import {db} from "./firebase";
import { addDoc, collection } from "firebase/firestore"; 


function Contact() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [city,setCity] = useState("");
    const [destination,setDestination] = useState("");
    const [date,setDate] = useState("");
    const [people,setPeople] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        addDoc(collection(db,"contacts"), {
            name:name,
            email:email,
            phone:phone,
            city:city,
            destination:destination,
            date:date,
            people:people,
        })
        .then(()=> {alert('Message has been submitted')}
        )
        .catch((error)=> {
            alert(error.message);
        });
        setName("");
        setEmail("");
        setPhone("");
        setCity("");
        setDestination("");
        setDate("");
        setPeople("");
    }
  return (
    <div id='Contact'>

    <Wrapper>
        <H1>
        <h1>Contact</h1>
        <p>Your next dream tour is our resposibility!</p>
        </H1>

        <FormDiv>
        <form className='form' >

        <label>Name</label>
        <input placeholder='Name'
               value={name}
               onChange={(e)=> {
                setName(e.target.value)
               }} />
         <label>City</label>
        <input placeholder='City of Residence'
                  value={city}
                  onChange={(e)=> {
                  setCity(e.target.value)
        }} />

        <label>Email</label>
        <input placeholder='Email'
               value={email}
               onChange={(e)=> {
               setEmail(e.target.value)
        }} />

        <label>Phone</label>
        <input placeholder='Phone'
               value={phone}
               onChange={(e)=> {
               setPhone(e.target.value)
        }} />

       
         <label>Destination</label>
        <input placeholder='Destination'
                  value={destination}
                  onChange={(e)=> {
                  setDestination(e.target.value)
        }} />
         <label>Date</label>
        <input placeholder='Date of Travel'
                  value={date}
                  onChange={(e)=> {
                  setDate(e.target.value)
        }} />
         <label>People</label>
        <input placeholder='No of People'
                  value={people}
                  onChange={(e)=> {
                  setPeople(e.target.value)
        }} />

        <button onClick={handleSubmit}>Submit</button>
        </form>
        </FormDiv>
    </Wrapper>

    </div>
  )
}

export default Contact

const Wrapper = styled.div`
margin-top: 5px;
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
height: 110vh;
background-size: cover;
background-position: center;
overflow-x: none;
p{
    font-size: 20px;
}
`
const H1 = styled.div`
text-align: center;
h1{
    color: #393b77;
    margin-top: 8rem;
    text-shadow: 4px 6px 10px rgba(0,0,0,.45);
}
p{
    padding:1rem;
}
`
const FormDiv = styled.div`
border: solid 2px #fba62a;
border-radius: 25px;

@media (max-width: 768px) {
    width: 80vw;
  }

  .form {
    @media (max-width: 768px) {
        width: 70vw;
      }
  }
`