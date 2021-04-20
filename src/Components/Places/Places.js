import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import PlacesMap from './PlacesMap';
import styled from 'styled-components';

const Places = ({city}) => {

    const [loading, setLoading] = useState(false);
    const [places, setPlaces] = useState([]);


    useEffect(() => {
        const fetchPlaces = async () => {
        setLoading(true);

            const response = await fetch(`https://api.foursquare.com/v2/venues/explore?near=${city}&limit=3&client_id=${process.env.REACT_APP_API_KEY_PLACES_ID}&client_secret=${process.env.REACT_APP_API_KEY_PLACES_SECRET}&v=20210330`);
            const jsonResponse = await response.json();
            
            const venues = jsonResponse.response.groups[0].items.map(
                item => item.venue
              );
              
              setPlaces(venues);
              
                setLoading(false);
        }
        fetchPlaces();
    },[city])

    return (
        <Container>
            <h3>A découvrir</h3>

            {!loading ? <PlacesMap places={places} /> : <Loading />}
           
        </Container>
    );
};

const Container = styled.div`
width:100%;
height:100%;
align-self:center;

grid-column:3/4;
grid-row:3/4;
display:flex;

flex-direction:column;
align-items:center;



h3 {
    padding-bottom:5px;
    border-bottom: 1px solid gray;
    margin:0;
}
`



export default Places;