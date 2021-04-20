import React,{useState} from 'react';
import styled from 'styled-components';
import ar from '../../Assets/flags/ar.png';
import fr from '../../Assets/flags/fr.png';
import uk from '../../Assets/flags/uk.png';
import usa from '../../Assets/flags/usa.png';
import can from '../../Assets/flags/can.png';

const Cities = (props) => {

    const [active, setActive] = useState('fr');

    const handleChange = (journal,name,city) => {
        props.onChange(journal,city);
        setActive(name);
    }


    return (
        <Container>
            <ul>
                <li onClick={() => handleChange('le-monde','fr','paris')} className={active === 'fr'? 'active' : 'inactive'}> <img src={fr} alt='french flag'/>Paris</li>
                <li onClick={() => handleChange('cnn','us','new york')} className={active === 'us'? 'active' : 'inactive'}> <img src={usa} alt='us flag'/>New York</li>
                <li onClick={() => handleChange('bbc-news','uk','london')} className={active === 'uk'? 'active' : 'inactive'}> <img src={uk} alt='uk flag'/>London</li>
                <li onClick={() => handleChange('infobae','ar','buenos aires')} className={active === 'ar'? 'active' : 'inactive'}> <img src={ar} alt='argentinian flag'/>Buenos Aires</li>
                <li onClick={() => handleChange('the-globe-and-mail','can', 'toronto')} className={active === 'can'? 'active' : 'inactive'}> <img src={can} alt='Canadian flag'/>Toronto</li>
            </ul>
        </Container>
    );
};

export default Cities;

const Container = styled.div`
width:100%;
height:90%;
background: linear-gradient(180deg, #1B969E 0%, rgba(255, 255, 255, 0) 100%), #33B5DE;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.8));
border-radius: 0px 25px;
display:flex;
flex-direction:column;
justify-content:center;
grid-column:1/2;
grid-row:2/4;
align-items: flex-start;
align-self:flex-end;

h3{
    padding: 5% 10% ;
    margin:0;
}

h6 {
    padding: 2% 10% ;
    margin:0;
    width:80%;
    color : rgba(250,250,250,1);
}

span {
    color:white;
font-weight:bold;
font-size:12px;
}

ul {
    list-style:none;
    padding: 0 10px;
    display:flex;
    flex-direction:column;
    align-items: space-around;
    justify-content:space-around;
    height:100%;
    margin: 5px 0;
}

li {
    padding: 2px 10px;
    height:25px;
    display:flex;
    align-items:center;
    border-radius:10px;
    background: rgba(250,250,250,0.2);
    filter: drop-shadow(0, 0, 5px, rgba(250,250,250,0.5));
    color: lightgray;
    cursor: pointer;

    
    img {
        width: 25px;
        margin-right:10px;
    }

    &:hover {
    color:white;
        background: rgba(250,250,250,0.4);
        font-weight:bold;
        transition: 0.2s;
}
}

.active {
        color:white;
        background: rgba(250,250,250,0.4);
        font-weight:bold;
        transition: 0.2s;
    }




`