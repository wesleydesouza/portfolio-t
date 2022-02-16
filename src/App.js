import { Main,
         Banner,
         Header,
         Nav, 
         Contats,
         ContainerGroup, 
         Text, 
         BoxTitulo,
         Center, 
         Container,
         CardGroup, 
         GroupSobre,
         ConhecimentosTitulo,
         Card,
         Image,
         Footer,
         ContatsFooter,
         ContatsImage,
         ContainerTituloBanner,
         ImageFoco,
         Copyright
        } from "./styles.js";
import GlobalStyle from "./styles.js";
import BannerPerfil  from "./images/img/perfilbanner.png";
import FotoPerfil from "./images/img/fotoPerfil.jpeg";
import FotoFoco from "./images/img/foco.jpg";

import Tooth1 from "./images/icon/tooth1.png";
import Botox from "./images/icon/botox.png";
import Profilaxia from "./images/icon/dental.png";
import Extraction from "./images/icon/extraction.png";
import CleanTooth from "./images/icon/cleanTooth.png";
import Perio from "./images/icon/perio.png";
import Facebook from "./images/icon/facebook.png";
import Insta from "./images/icon/insta.png";
import Wpp from "./images/icon/wpp.png";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const App = () => {
  useEffect(() => {
      Aos.init({duration: 2000 });

  }, [])
  return (
    <>
      <GlobalStyle />
      <Main id="Home">
        <Banner>
          <Header>
            <Nav>
              <a href="#Home"><h3>Taiana<span>Ritter</span></h3></a>
              <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Sobre"><li>Sobre</li></a>
                <a href="#Conhecimentos"><li>Conhecimentos</li></a>
                <a href="#Objetivos"><li>Objetivos</li></a>
                <a href="#Contatos"><li>Contatos</li></a>
              </ul>
            </Nav>
          </Header>
        <Container>
        <ContainerTituloBanner>
            <Contats>
                    <ul>
                      <a href="https://www.facebook.com/tairitter" target="_blank"><li><img src={Facebook}/></li></a>
                      <a href="https://www.instagram.com/taianaritter/" target="_blank"><li><img src={Insta}/></li></a>
                      <a href="https://api.whatsapp.com/send/?phone=555189560632&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho!&app_absent=0" target="_blank"><li><img src={Wpp}/></li></a>
                    </ul>
              </Contats>
            <Text >
              
              <BoxTitulo data-aos="fade-right">

                <h3><span>Bem vindo(a), sou</span></h3>
                <h1>Taiana Ritter</h1>
                <h4>Cirurgiã Dentista</h4>
                <p>CRO/RS: 29561</p>
              </BoxTitulo>
              <img data-aos="fade-left"src={BannerPerfil} alt="logo"/>
          </Text>
          </ContainerTituloBanner>
          </Container>
        </Banner>
        
        <ContainerGroup id="Sobre">
          <Center >
              <GroupSobre data-aos="fade-left">
                <div>
                  <img src={FotoPerfil}/>
                </div>
                <BoxTitulo>
                  <h3><span>Sobre</span></h3>
                        <h1>Perfil Profissional!</h1>
                        <hr/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </BoxTitulo>
              </GroupSobre>
          </Center>
        </ContainerGroup>

        <ContainerGroup  id="Conhecimentos">
          
          <Center>
            <ConhecimentosTitulo>
              <h3><span>Conhecimentos</span></h3>
              <h1>Áreas de Atuação</h1>
              <hr/>
              <Center data-aos="fade-left">
                <Card >
                  <CardGroup>
                    <Image>
                      <img src={Tooth1} alt="instagram"/>                  
                    </Image>

                    <h1>Restaurações</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
                <Card>
                  <CardGroup>
                  <Image>
                    <img src={Botox} alt="instagram"/>             
                  </Image>
                  <h2>Preenchimento labial e Toxina Botulínica</h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
                <Card>
                <CardGroup>
                  <Image>
                  <img src= {Profilaxia} alt= "profilaxia icon"/>
                  </Image>
                  <h1>Profilaxia</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
                <Card>
                <CardGroup>
                  <Image>
                  <img src={Extraction} alt="extraction icon"/>          
                  </Image>
                  <h1>Exodontia</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
                <Card>
                <CardGroup>
                  <Image>
                  <img src={CleanTooth}/>
                  </Image>
                  <h1>Clareamentos</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
                <Card>
                <CardGroup>
                  <Image>
                  <img src={Perio} alt="periodontal icon"/>               
                  </Image>
                  <h1>Periodontia</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </CardGroup>
                </Card>
              </Center>
            
          </ConhecimentosTitulo>
        </Center>
        </ContainerGroup>
        

        <ContainerGroup id="Objetivos">
          <Center>
            
              <GroupSobre data-aos="fade-right">
                <BoxTitulo>
                  <h3><span>Objetivos</span></h3>
                        <h1>Foco Profissional!</h1>
                        <hr/>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </BoxTitulo>
                
                  <ImageFoco>

                    <img src={FotoFoco}/>
                  </ImageFoco>
              </GroupSobre>
            
          </Center>
        </ContainerGroup>

        
        <Footer id="Contatos">
          <h3>Taiana<span> Ritter</span></h3>
          <ContatsFooter>
            <ContatsImage>
            <a href="https://www.facebook.com/tairitter" target="_blank"><img src={Facebook}/></a>
            </ContatsImage>

            <ContatsImage>
            <a href="https://www.instagram.com/taianaritter/" target="_blank"><img src={Insta}/></a>
            </ContatsImage>

            <ContatsImage>
            <a href="https://api.whatsapp.com/send/?phone=555189560632&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho!&app_absent=0" target="_blank"><img src={Wpp}/></a>
            </ContatsImage>
          </ContatsFooter>

          <address>ritter.taiana@yahoo.com.br</address>
            <Nav>
              <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Sobre"><li>Sobre</li></a>
                <a href="#Conhecimentos"><li>Conhecimentos</li></a>
                <a href="#Objetivos"><li>Objetivos</li></a>
                <a href="#Contatos"><li>Contatos</li></a>
              </ul>
            </Nav>
              <Copyright>
                <p>COPYRIGHT © <span>2022</span> <a target="_blank" href="https://wesleydesouza.github.io/Portfolio/">Wesley de Souza.</a></p> 
              </Copyright>
            
        </Footer>
      </Main>
    </>
  );
}

export default App;

