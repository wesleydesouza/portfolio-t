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
         GroupSobre,
         ConhecimentosTitulo,
         CardPrincipal,
         Card,
         Image
        } from "./styles.js";
import GlobalStyle from "./styles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Banner>
        <Contats>
                <ul>
                  <li><img src="https://img.icons8.com/ios/30/000000/linkedin.png"/></li>
                  <li><img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/></li>
                  <li><img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/></li>
                </ul>
          </Contats>
          <Container>
          <Header>
      
            <h3>Wesley<span>Souza</span></h3>
            <Nav>
              <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Conhecimentos</li>
                <li>Objetivo</li>
                <li>Contatos</li>
              </ul>
            </Nav>
          </Header>
            <Text>
              
              <BoxTitulo>

                <h3><span>Hello I'm</span></h3>
                <h1>Wesley de Souza</h1>
                <h4>profissional freelance and web developer</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </BoxTitulo>
              <img src="https://s3-sa-east-1.amazonaws.com/doctoralia.com.br/doctor/912957/91295778c2a22a7fd7d91496b859f1e0_large.jpg"/>
          </Text>
          </Container>
        </Banner>
        <Center>
          <ContainerGroup>
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
          <ConhecimentosTitulo>
            <h3><span>Conhecimentos</span></h3>
            <h1>Conhecimentos Específicos</h1>
            <hr/>
            <Center>
              <CardPrincipal>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>                  
                </Image>
               
                  <h1>Titulo</h1>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                
              </CardPrincipal>
              <Card>
                <Image>
                                    
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Card>
              <Card>
                <Image>
                                    
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Card>
              <Card>
                <Image>
                                    
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Card>
              <Card>
                <Image>
                                    
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Card>
              <Card>
                <Image>
                  <img src="https://img.icons8.com/ios/30/000000/linkedin.png" alt="instagram"/>                  
                </Image>
                <h1>Titulo</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </Card>
            </Center>
            
          </ConhecimentosTitulo>
        </Center>
      </Main>
    </>
  );
}

export default App;

