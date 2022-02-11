import styled from "styled-components";
import {createGlobalStyle }from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        
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
    background-image:
    url("https://iraniansurgery.com/wp-content/uploads/iraniansurgery-dentistry-min.jpg");
`;

export const Container = styled.div`
    margin-left: 5%;
    width: 70%
`
export const Text = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 98px;

    img{
        width:230px;
        
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
        
        
    }
    ul li{
        list-style: none;
    }
 `;

 export const BoxTitulo = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    width:35%;
    height: 180px;

    h3 span{
        color: #900020;
    };

    h1{
        font-size: 35px;
    };
    p{
        color: grey;
        font-size: 15px;
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
    margin-top:40vh;
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

/*section 3 */

export const ConhecimentosTitulo = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 100%;
    
    

    h3 span{
        color: #900020;
    };
    

    h1{
        font-size: 25px;
    };
    
    hr{
        border: 2px dashed #900020;
        border-radius: 4px;
        width: 10%;
    };
`;

export const CardGroup = styled.div`
    width: 90%;
    display:flex;
    height:80%;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;
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
    width: 40px;
    height: 40px;
    border-radius: 10px 10px 0 10px;
`;

/*footer */
export const Footer = styled.footer`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    background-color: grey;
    margin-top:30vh;

    h3{
        font-size: 20px;
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
    background-color: white;
    border-radius: 50%;

    padding: 10px;
    display: flex;
    align-items:center;
    justify-content: center;
`;
