import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import logo from "./assets/img/logo.png"
import seta_play from "./assets/img/seta_play.png"

export default function App() {
  return (
    <>
      <GlobalStyle />

      <ScreenContainer>

        <LogoContainer>
          <img src={logo} alt="logo" />
          <h1>ZapRecall</h1>
        </LogoContainer>

        <ButtonList>

          <ButtonItem>
            <p>Pergunta 1</p>
            <img src={seta_play} alt="play"></img>
          </ButtonItem>

          <ButtonItem>
            <p>Pergunta 2</p>
            <img src={seta_play} alt="play"></img>
          </ButtonItem>

          <ButtonItem>
            <p>Pergunta 3</p>
            <img src={seta_play} alt="play"></img>
          </ButtonItem>

          <ButtonItem>
            <p>Pergunta 4</p>
            <img src={seta_play} alt="play"></img>
          </ButtonItem>

        </ButtonList>



      </ScreenContainer>
      <FooterConcluidos>
          <p>0/4 CONCLUÍDOS</p>
      </FooterConcluidos>
    </>
  );
}

const ScreenContainer = styled.div`
  background-color: #FB6B6B;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
  box-sizing: border-box;
`
const LogoContainer = styled.header`
  display: flex;
  align-items: center;
  margin: 40px 0 20px 0;
  img {
    width: 52px;
  }
  h1 {
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-left: 20px;
  }
`
const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  height: 335px;
`
const ButtonItem = styled.button`
  width: 300px;
  height: 65px;
  background-color: #FFFFFF;
  color: #333333;
  font-family: 'Recursive';
  font-weight: 700;
  font-size: 16px;
  line-height: 19.2px;

  
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  

  border: none;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  padding:15px;
  box-sizing: border-box;
`
const CloseQuestion = styled.li`
  width: 300px;
  height: 35px;
  background-color: #FFFFFF;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p{
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
`
const OpenQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #FFFFD5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`
const FooterConcluidos = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`

