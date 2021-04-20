import React from 'react';
import styled from 'styled-components';

const NewsCards = ({news}) => {
    

const articles = news.map((art, index)=> {
    return( <NewsCard key={index} className='news'>
        { <img src={art.urlToImage} alt='article'/> }
         {<a href={art.url} target='blank'> <h6>{art.title}</h6></a> } 
         {<p>{art.description}</p> }
     </NewsCard>)
})
  
    return (
     
        <Container className='article'>
            {articles}
        </Container>
    );
};

export default NewsCards;

const Container = styled.div`
    
`

const NewsCard = styled.div`
border-radius: 25px;
filter: drop-shadow(0 0 5px rgba(150,150,150,0.8));
background: rgba(250,250,250);
width:90%;
min-height:200px;
margin: 5% auto;

display: flex;
flex-direction:column;
align-items:center;


img {
    width: 100%;
    height:60%;
    border-radius: 25px   25px 0 0;
}

h6 {
    padding: 0 10px;
    margin: 10px 0;
    text-align:center;

    &:hover {
        color:gray;
    }
}

a {
    color: unset;
}

p{
    color: gray;
    font-size:12px;
    padding: 10px 15px;
    margin:10px 0;
}
`