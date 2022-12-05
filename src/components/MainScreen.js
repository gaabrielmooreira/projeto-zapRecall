import styled from "styled-components";
import logo from "../assets/img/logo.png"
import Flashcards from "./Flashcards";
import FlashcardsCompleteds from "./FlashcardsCompleteds";
import { useState } from "react";
import cards from "../card";

export default function MainScreen({initialScreenDisable}){
    const [numCardsAnswereds,setNumCardsAnswereds] = useState(0);
    const [iconList,setIconList] = useState([]);
    
    function addNumCardsAnswereds(){
      setNumCardsAnswereds(numCardsAnswereds + 1);
    }

    return (
        <ScreenContainer initialScreenDisable={initialScreenDisable}>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>

            <Flashcards cards={cards} addNumCardsAnswereds={addNumCardsAnswereds} iconList={iconList} setIconList={setIconList}/>

            <FlashcardsCompleteds numCardsAnswereds={numCardsAnswereds} tamCards={cards.length} iconList={iconList} />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  display: ${props => props.initialScreenDisable ? "flex":"none"};
  flex-direction: column;
  align-items: center;

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


