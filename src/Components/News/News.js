import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsCards from '../NewsCards/NewCards';
import Loading from '../Loading/Loading';

const News = ({ journal }) => {

    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    



    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);

            const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${journal}&apiKey=${process.env.REACT_APP_API_KEY_NEWS}&pageSize=5`);
            const { articles } = await response.json();
            setNews(articles);

            setLoading(false);
            
        }
        fetchNews();
    }, [journal])

    return (
        <Container>
            <h3>News</h3>

            <CardsContainer>
                {!loading ? <NewsCards news={news} /> : <Loading/>}
              
            </CardsContainer>

        </Container>
    );
};

export default News;

const Container = styled.div`
width:100%;
height:100%;
align-self:center;
background: rgba(255,255,255,1);
grid-column:2/3;
grid-row:1/4;
display:flex;

flex-direction:column;
align-items:center;


h3 {
    padding-bottom:5px;
    border-bottom: 1px solid gray;
    margin: 5% 0 0 0;
}
`

const CardsContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
height: 90%;

align-items:center;
overflow-y:scroll;

`

