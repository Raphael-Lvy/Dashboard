import React from 'react';

import styled from 'styled-components';

const PlacesMap = ({ places }) => {


  const lieux = places.map((lieu, index) => {

    return (<Place key={index} >
      <p>{lieu.name}</p>
      <a href={`https://www.google.com/maps/place/${lieu.location.city}+${lieu.location.country}`} target='blank'>
        <img src={`${lieu.categories[0].icon.prefix}bg_64${lieu.categories[0].icon.suffix}`} alt='lieu touristique' />
      </a>
    </Place >)
  })

  return (
    <PlacesContainer>
      {lieux}
    </PlacesContainer>
  );
};


const PlacesContainer = styled.div`
border-radius: 25px;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.8));
background: rgba(250,250,250);
width:90%;
height:90%;
margin: 5% auto;
position: relative;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;


  

`

const Place = styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  font-size: 12px;
  width:70%;
  height:50px;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  
  &:last-child {
  border-bottom:none;}

   p {
     margin: 0 10px;
   } 

  img {
    width: 35px;
    filter: drop-shadow(2px 2px 3px rgba(80,80,80,0.8));

    &:hover {
      filter:drop-shadow(2px 2px 1px rgba(80,80,80,0.8));;
    }
  }

`
export default PlacesMap;



