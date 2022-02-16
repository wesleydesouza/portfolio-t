import styled from "styled-components";
import {createGlobalStyle }from "styled-components";
import BannerImg from "./images/img/banner.png";
import "./fonts.css";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: sans-serif, arial;
        
        a{
            text-decoration: none;
            color: black;
        }
        a:visited{
            color: black
        }
        
    }
`;

export const Main = styled.main`
   background-color:#fff5f5;
   
`;
/*Section 1*/


export const Header = styled.header`
    overflow: hidden;
    position: fixed;
    background-color: rgba(170, 170 ,170, 0.3);
    z-index: 10;
    border-bottom: 1px solid rgba(0, 0 ,0, 0.8);
    width: 100%;
    height: 60px;
    a h3, a span{
        font-family: 'Redressed', cursive;
        font-size: 1.6rem;
    }
    span{
        
        color: #900020;
    }
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items:center;
    width:100%;
    ul{
        
        height: 60px;
        color: #FFF;
        display: flex;
        align-items: center;
    }
    ul li{
        list-style: none;
        margin-left: 15px;
        font-size: 1.1rem;
        border-bottom: 3px solid rgba(0, 00 ,0, 0);
        :hover{
            border-bottom: 3px solid rgba(90, 00 ,20, 0.8);
            color: rgba(50, 50 ,50);
        }
        
    }
`;

export const ContainerTituloBanner = styled.div`
    display:flex;
    justify-content:center;
    width:100%;
`;
export const Banner = styled.section`
    display: flex;
    flex-direction: column;
    height: 500px;
    background-image: url(${BannerImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const Container = styled.div`
    margin-left: 5%;
    width: 70%
`
export const Text = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 127px;
    width:100%;
    img{
        width:230px;
    }
    
`;
 
export const Contats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left:10%;
    ul{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 200px;
        padding: 1px;
        background-color: rgba(225,225,225,0.6);
        border: 1px solid #fff;
        border-radius: 20px;
        
        
    }
    ul li{
        list-style: none;
    }
 `;

 export const BoxTitulo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width: 40%;
    height: 180px;

    h3 span{
        color: #900020;
    };

    h1{
        font-size: 35px;
    };
    p{
        color: black;
        font-size: 15px;
        min-width: 355px;
    };
    
    
 `;
 /*section 2*/

 export const Center = styled.section`
    
    display: flex;
    width: 100%;
    align-content: center;
    justify-content:center;
    align-items: center;
    height: 500px;
    flex-wrap: wrap;
 `;
 
export const ContainerGroup = styled.div`
    width:  80%;
    margin: auto;
    margin-top:30vh;
    border-top: 1px solid rgba(10, 10, 10, 0.2);
`;

export const GroupSobre = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 120px;
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
        position: contain;
    }

    


`

/*section 3 */

export const ConhecimentosTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 250px;
    
    
    h3, h1{
        margin-bottom: 6px;
    }
    h3 span{
        color: #900020;
    };
    

    h1{
        font-size: 25px;
    };
    
    hr{
        border: 2px dashed #900020;
        width: 10%;
    };
`;

export const CardGroup = styled.div`
    width: 90%;
    display:flex;
    height:88%;
    justify-content: space-between;
    flex-direction: column;

    h2{
        font-size: 19px;
    }
`;
export const Card = styled.div`
    width: 290px;
    margin:4px;
    height: 200px;
    background-color: white;
    display: flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid grey;

    :first-child{
        color:white;
        border: 1px solid #900020;
        background-color: #900020;

        figure{
            background-color: white;
        }
    }
    
`;

export const Image = styled.figure`
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #900020;
    width: 43px;
    height: 43px;
    padding: 5px;

    border-radius: 10px 10px 0 10px;
`;
export const ImageFoco = styled.figure`
    width:450px;    

    img{
        width: 100%;
    }
`;

/*footer */
export const Footer = styled.footer`
    width: 100%;
    height: 300px;
    border-top: 1px solid rgba(10, 10, 10, 0.2);
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    background-color: rgba(10, 10, 10, 0.1);
    margin-top:30vh;

    h3,span{
        font-size: 25px;
        font-family: 'Redressed', cursive;
    }
    span{
        color: #900020;
        
    }
`;

export const ContatsFooter = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-evenly;
`;
export const ContatsImage = styled.figure`
    background-color: rgba(225, 255, 255, 0.4);
    border-radius: 50%;
    border: 1px solid rgba(90, 00, 20, 0.7);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes hoverColor {
        0% {background-color: #fff; transform: rotate(0.0turn);}
        100% {background-color: #900020; transform: rotate(-0.1turn);}
        }
    :hover{
            transform: rotate(-0.1turn);
            animation: hoverColor 2s forwards;
            

        }
    img{
       
        margin-top:1px;

        }
    }
    `;

export const Copyright = styled.figure`
    font-size: 13px;

    span{
        font-size: 15px;
        font-weight: 900;
        color: #000;
    }

    a{
        color: #900020
    }
`