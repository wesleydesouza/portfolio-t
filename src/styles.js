import styled from "styled-components";
import {createGlobalStyle }from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
       
    }
`;

export const Main = styled.main`
    padding: 0 5%;
`;

export const Header = styled.header`

    display: flex;
    justify-content: space-evenly;
    width: 100%;

    span{
        
        color: #900020
    }

    ul{
        color: #FFF;
        display: flex;
    }
    ul li{
        list-style: none;
        margin-left: 15px;
        
    }
`;

export const Banner = styled.section`
    height: 500px;
    background-image: linear-gradient(76deg, white 50%, #900020 40%)
`;

export const Card = styled.div`
    border: 1px solid red;
    display:flex
`;
 
export const Contats = styled.div`
    display: flex;
    flex-direction: column;

    ul li{
        list-style: none;
    }
 `