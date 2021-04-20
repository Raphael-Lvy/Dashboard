import React,{useState} from 'react';
import styled from 'styled-components';
import Hello from '../Hello/Hello';
import Cities from '../Cities/Cities'
import News from '../News/News';
import Meteo from '../Meteo/Meteo';
import Places from '../Places/Places';

const DashBoard = () => {
    const [journal, setJournal] = useState("le-monde");
    const [city, setCity] = useState('paris');

    const handleChange = (journal, city) => {
        setJournal(journal);
        setCity(city);
        
      }

    return (
        <Container>
            <Hello />
            <WhiteBG/>
            <Cities  onChange={handleChange} />
            <News journal={journal}/>
            <Meteo city={city}/>
            <Places city={city}/>
        </Container>
    );
};

export default DashBoard;

const Container = styled.div`
width:80%;
height:80%;
background: rgba(255,255,255,0.9);
border-radius:25px;
filter: drop-shadow(0 0 10px rgba(150,150,150,0.5));
display:grid;
grid-template-columns: 2.75fr 4fr 4fr;
grid-template-rows:2.5fr 0.5fr 3fr;

`

const WhiteBG = styled.div`
background: white;
grid-row:1/3;
grid-column: 1/3;
z-index:-1;
border-radius:25px;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.3));
`