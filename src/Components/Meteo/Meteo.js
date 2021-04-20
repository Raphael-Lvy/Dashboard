import React, {useState,useEffect} from 'react';
import Loading from '../Loading/Loading';
import MeteoCard from './MeteoCard';
import styled from 'styled-components';

const Meteo = ({city}) => {


    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState('');



    useEffect(() => {
        const fetchWeather = async () => {
            setLoading(true);

            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY_METEO}&lang=fr`);
            const meteo = await response.json();
            setWeather(meteo);
            
            setLoading(false);
        }
        fetchWeather();
       
    }, [city])

    
    return (
        <Container>
            <h3>Météo</h3>
            {!loading ? <MeteoCard weather={weather} city={city}/>   : <Loading/>}
        </Container>
    );
};

const Container = styled.div`
width:100%;
height:100%;
align-self:center;

grid-column:3/4;
grid-row:1/3;
display:flex;

flex-direction:column;
align-items:center;


h3 {
    padding-bottom:5px;
    border-bottom: 1px solid gray;
    margin:5% 0 0 0;
}
`

export default Meteo;