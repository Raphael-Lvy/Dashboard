import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import clouds from '../../Assets/meteo/clouds.png'
import cloudy from '../../Assets/meteo/cloudy-day.png'
import rain from '../../Assets/meteo/rain.png'
import sun from '../../Assets/meteo/sun.png'

const MeteoCard = ({ weather, city }) => {

    const celcius = Math.round((weather.main.temp - 273.15) * 10) / 10;

    const [icon, setIcon] = useState();

    useEffect(() => {
        const fetchIcon = () => {

            switch (weather.weather[0].icon) {
                case '01d':
                case '01n':
                    setIcon(sun);
                    break;
                case '02d':
                case '02n':
                    setIcon(cloudy);
                    break;
                case '03d':
                case '03n':
                case '04d':
                case '04n':
                case '50d':
                case '50n':
                    setIcon(clouds);
                    break;
                case '09d':
                case '09n':
                case '10d':
                case '10n':
                case '11d':
                case '11n':
                case '13d':
                case '13n':
                    setIcon(rain);
                    break;
                default:
                    break;
            }
        }
        fetchIcon();
    }, [weather])



    return (
        <MeteoContainer className='meteowrapper'>
            <MeteoCity>{city}</MeteoCity>
            <MeteoTemp>{celcius} C°</MeteoTemp>
            <MeteoIcon src={icon} />
            <MeteoMessage>{weather.weather[0].description} </MeteoMessage>
        </MeteoContainer>
    );
};



const MeteoContainer = styled.div`
border-radius: 25px;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.8));
background: rgba(250,250,250);
width:90%;
min-height:150px;
margin: 5% auto;
position: relative;
display:flex;
`
const MeteoCity = styled.div`
position: absolute;
top: 25px;
left:10%;
text-transform: capitalize;
color: gray;
font-size: 16px;
`

const MeteoTemp = styled.div`
    position: absolute;
    
    bottom:25px;
    left:10%;
    color: gray;
  
    font-size:20px;
    font-weight:bold;
    
`
const MeteoMessage = styled.p`
   position: absolute;
   bottom: 25px;
right:10%;
max-width:40%;
   display:flex;
    align-items:center;
    justify-content:center;
    margin:0;
   text-transform:capitalize;
   color: gray;
`
const MeteoIcon = styled.img`
    height: 75px;
    
    position: absolute;
    top:15px;
    right:10%;
    
    display:flex;
    justify-content:center;
    
`

export default MeteoCard;