import React from 'react';
import styled from 'styled-components';
import spinner from '../../Assets/spinner/spinner.gif';

const Loading = () => {
    return (
        <Loader>
            <img src={spinner} alt='loading'/>
        </Loader>
    );
};

const Loader = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items: center;

img {
    width: 100px;
}
`


export default Loading;