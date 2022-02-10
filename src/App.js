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
         ContatsImage
        } from "./styles.js";
import GlobalStyle from "./styles.js";
import BannerPerfil  from "../src/images/img/perfilbanner (cópia).png";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main id="Home">
        <Banner>
        <Contats>
                <ul>
                  <a href="https://www.facebook.com/tairitter" target="_blank"><li><img src="https://img.icons8.com/ios/30/000000/linkedin.png"/></li></a>
                  <a href="https://www.instagram.com/taianaritter/" target="_blank"><li><img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/></li></a>
                  <a href="https://api.whatsapp.com/send/?phone=555189560632&text=Ol%C3%A1,%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20seu%20trabalho!&app_absent=0" target="_blank"><li><img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/></li></a>
                </ul>
          </Contats>
          <Container>
          <Header>
      
            <a href="#Home"><h3>Taiana<span>Ritter</span></h3></a>
            <Nav>
              <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Sobre"><li>Sobre</li></a>
                <a href="#Conhecimentos"><li>Conhecimentos</li></a>
                <a href="#Objetivos"><li>Objetivos</li></a>
                <a href="#Contatos"><li>Contatos</li></a>
              </ul>
            </Nav>
          </Header>
            <Text>
              
              <BoxTitulo>

                <h3><span>Hello I'm</span></h3>
                <h1>Taiana Ritter</h1>
                <h4>profissional freelance and web developer</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </BoxTitulo>
              <img src={BannerPerfil} alt="logo"/>
          </Text>
          </Container>
        </Banner>
        <Center id="Sobre">
          <ContainerGroup >
            <GroupSobre>
              <div>
                <img src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/912957/91295778c2a22a7fd7d91496b859f1e0_large.jpg"/>
              </div>
              <BoxTitulo>
                <h3><span>Sobre</span></h3>
                      <h1>Perfil Profissional!</h1>
                      <hr/>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </BoxTitulo>
            </GroupSobre>
          </ContainerGroup>
        </Center>
        <Center>
          <ConhecimentosTitulo  id="Conhecimentos">
            <h3><span>Conhecimentos</span></h3>
            <h1>Conhecimentos Específicos</h1>
            <hr/>
            <Center>
              <Card>
                <CardGroup>
                  <Image>
                    <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>                  
                  </Image>

                  <h1>Titulo</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
              <Card>
                <CardGroup>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>             
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
              <Card>
              <CardGroup>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>          
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
              <Card>
              <CardGroup>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>               
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
              <Card>
              <CardGroup>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>          
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
              <Card>
              <CardGroup>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>                  
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </CardGroup>
              </Card>
            </Center>
            
          </ConhecimentosTitulo>
        </Center>
        <Center>
          <ContainerGroup id="Objetivos">
            <GroupSobre>
              <BoxTitulo>
                <h3><span>Objetivos</span></h3>
                      <h1>Foco Profissional!</h1>
                      <hr/>
                      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </BoxTitulo>
              <div>
                <img src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/912957/91295778c2a22a7fd7d91496b859f1e0_large.jpg"/>
              </div>
            </GroupSobre>
          </ContainerGroup>
        </Center>
        <Footer id="Contatos">
          <h3>Taiana<span> Ritter</span></h3>
          <ContatsFooter>
            <ContatsImage>
              <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/> 
            </ContatsImage>

            <ContatsImage>
              <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>
            </ContatsImage>

            <ContatsImage>
              <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>
            </ContatsImage>
          </ContatsFooter>

          <address>Email_hotmail.com</address>
            <Nav>
              <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Sobre"><li>Sobre</li></a>
                <a href="#Conhecimentos"><li>Conhecimentos</li></a>
                <a href="#Objetivos"><li>Objetivos</li></a>
                <a href="#Contatos"><li>Contatos</li></a>
              </ul>
            </Nav>
        </Footer>
      </Main>
    </>
  );
}

export default App;

