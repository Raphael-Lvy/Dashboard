import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Hello = () => {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();



    const formatedMonth = () => {
        if (month + 1 < 10) {
            return ('0' + (month + 1).toString());
        } else {
            return month + 1;
        }
    }
    const year = date.getFullYear();

    

    useEffect(() => {
        const timerID = setInterval( () => tick(), 1000 );
        

        return function cleanup() {
            clearInterval(timerID);
          };
       });

       const minutes = () => {
           if(date.getMinutes()<10) {
               return `0${date.getMinutes()}`
           } else {
               return date.getMinutes();
           }

       }

       const secondes = () => {
        if(date.getSeconds()<10) {
            return `0${date.getSeconds()}`
        } else {
            return date.getSeconds()
        }
       }


       function tick() {
        setTime(date.getHours() + ':' + minutes() + ':' + secondes());
       }

    
    const [time, setTime] = useState('');

    return (
        <Container>
            <h3>Bonjour,</h3>
            <h5>Nous sommes le </h5>
            <h5><span>{day}/{formatedMonth()}/{year}</span></h5>
            <br></br>
            <h5>Il est <span>{time}</span></h5>
            <h5>Passez une excellente journée</h5>
        </Container>
    );
};

export default Hello;

const Container = styled.div`
width:100%;
height:100%;
background: linear-gradient(180deg, #1B969E 0%, rgba(255, 255, 255, 0) 100%), #33B5DE;
border-radius: 20px 0px;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.8));
display:flex;
flex-direction:column;
justify-content:center;
color: white;

grid-row:1/2;
grid-column: 1/2;


h3{
    padding: 5% 10% ;
    margin:0;
}

h5 {
    padding: 2% 10% ;
    margin:0;
    width:80%;
    color : rgba(250,250,250,1);
    font-size: 12px;
    color: rgba(230,230,230,1);
}

span {
    
font-weight:bold;
font-size:12px;
color:white;

border-radius:5px;
}

`