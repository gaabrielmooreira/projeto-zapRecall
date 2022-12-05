import styled from "styled-components";
import logo from "../assets/img/logo.png";


export default function InitialScreen({initialScreenDisable, setInitialScreenDisable}) {
    return (
        <ScreenContainer initialScreenDisable={initialScreenDisable}>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>
            <ButtonGoToMainScreen data-test="start-btn" onClick={() => setInitialScreenDisable(true)}>Iniciar Recall!</ButtonGoToMainScreen>
        </ScreenContainer>
    )
}


const ScreenContainer = styled.div`
    display: ${props => props.initialScreenDisable ? "none":"flex"};
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;

    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
    box-sizing: border-box;
`
const LogoContainer = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px 0 20px 0;
  img {
    width: 136px;
  }
  h1 {
    line-height: 45px;
    text-align: center;
    font-family: 'Righteous';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    color: #FFFFFF;
    margin-top: 15px;
  }
`
const ButtonGoToMainScreen = styled.button`
    width: 246px;
    height: 54px;
    padding: 16px 22px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFF;
    font-family: Recursive;
    font-size: 18px;
    line-height: 22px;
    color: #D70900;
    
    border: 1px solid #D70900;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    box-sizing: border-box;

    &:hover{
        cursor: pointer;
    }
`