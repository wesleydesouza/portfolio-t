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
   
`;
/*Section 1*/


export const Header = styled.header`
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 5px;
    font-size: 18px;
    span{
        
        color: #900020
    }
`;

export const Nav = styled.nav`

    ul{
        color: #FFF;
        display: flex;
    }
    ul li{
        list-style: none;
        margin-left: 15px;
        font-size: 18px;
    }
`;

export const Banner = styled.section`
    display: flex;
    height: 500px;
    background-image: linear-gradient(76deg, white 50%, #900020 40%)
`;

export const Container = styled.div`
    margin-left: 5%;
    width: 70%
`
export const Card = styled.div`
    
    display:flex;
    margin-top: 150px;

    img{
        margin-top: -60px;
        width:380px;
    }
    
`;
 
export const Contats = styled.div`
    display: flex;
    flex-direction: column;
    margin-left:10%;
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 180px;
        padding: 1px;
        border: 1px solid grey;
        border-radius: 20px;
        margin-top: 190px;
        
    }
    ul li{
        list-style: none;
    }
 `;

 export const BoxTitulo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width:35%;
    height: 200px;

    h3 span{
        color: #900020;
    };

    h1{
        font-size: 35px;
    }
    h4{
        font-weight:600;
        font-size: 17px;
        margin-top: -10px
    }
    p{
        color: grey;
        font-size: 15px;
    }
    
    
 `;
 /*section 2*/

 export const Sobre = styled.section`
 
    display: flex;
    justify-content:center;
    align-items: center;
    height: 500px;
 `;
 
export const ContainerGroup = styled.div`
    width: 60%;
    

`;

export const GroupSobre = styled.div`
    display: flex;
    justify-content: space-evenly;
    
    h1{
        font-size: 32px;
    }
    hr{
        border: 2px dashed #900020;
        border-radius: 4px;
        width: 25%;
        
    }
    img{
        width:300px;
        
    }

`