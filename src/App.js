import GlobalStyle, { Header } from "./styles.js";
import { Main, Banner, Contats, Card } from "./styles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <Main>
        <Banner>

          <Header>
      
            <h3>Wesley<span>Souza</span></h3>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Conhecimentos</li>
              <li>Objetivo</li>
              <li>Contatos</li>
            </ul>
          </Header>
            <Card>
              <Contats>
                <ul>
                  <li><img/></li>
                  <li><img/></li>
                  <li><img/></li>
                </ul>
              </Contats>
                <h3><span>Hello I'm</span></h3>
          </Card>
        </Banner>
      </Main>
    </>
  );
}

export default App;

