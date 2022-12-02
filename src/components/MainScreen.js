import styled from "styled-components";
import logo from "../assets/img/logo.png"
import Flashcards from "./Flashcards";
import FlashcardsCompleteds from "./FlashcardsCompleteds";
import { useState } from "react";
import cards from "../card";

export default function MainScreen(){
    const [numCardsAnswereds,setNumCardsAnswereds] = useState(0);
    
    function addNumCardsAnswereds(){
      setNumCardsAnswereds(numCardsAnswereds + 1);
    }
    
    return (
        <ScreenContainer>

            <LogoContainer>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </LogoContainer>

            <Flashcards cards={cards} addNumCardsAnswereds={addNumCardsAnswereds}/>

            <FlashcardsCompleteds tamanhoCards={cards.length} numCardsAnswereds={numCardsAnswereds}></FlashcardsCompleteds>
        </ScreenContainer>
    )
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

