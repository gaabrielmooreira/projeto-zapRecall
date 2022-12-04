import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png";
import seta_virar from "../assets/img/seta_virar.png";
import icone_certo from "../assets/img/icone_certo.png";
import icone_quase from "../assets/img/icone_quase.png";
import icone_erro from "../assets/img/icone_erro.png";
import { useState } from "react";

export default function Flashcard(props) {
    const { indexQuestion, question, answer, addNumCardsAnswereds } = props;

    const [colorText, setColorText] = useState("#333333");
    const [introVisible,setIntroVisible] = useState(true);
    const [questionVisible, setQuestionVisible] = useState(false);
    const [answerVisible, setAnswerVisible] = useState(false);
    const [imgClosedFlashcard, setImgClosedFlashcard] = useState(seta_play);
    const [isFlashCardFinish, setIsFlashCardFinish] = useState(false);
    
    let dataTestIcon = "";

    const hideIntro = () => setIntroVisible(false);
    const showIntro = () => setIntroVisible(true);

    function showQuestion() {
        setQuestionVisible(true);
        hideIntro();
    }

    function showAnswer() {
        setQuestionVisible(false);
        setAnswerVisible(true);
    }

    function changeImgClosedFlashcard(img) {
        setImgClosedFlashcard(img);
    }

    function changeColorText(color){
        setColorText(color);
    }

    function flashcardFinish(status, color) {
        setIsFlashCardFinish(true);
        setAnswerVisible(false);
        changeColorText(color);
        showIntro();
        addNumCardsAnswereds();
        if (status === "Lembrou") {
            dataTestIcon = "zap-icon";
            changeImgClosedFlashcard(icone_certo);
        }
        if (status === "QuaseLembrou"){
            dataTestIcon = "partial-icon"
            changeImgClosedFlashcard(icone_quase);
        }
        if (status === "NaoLembrou"){
            dataTestIcon = "no-icon"
            changeImgClosedFlashcard(icone_erro);
        }
    }

    return (
        <div data-test="flashcard">
            <StyledClosedFlashcard introVisible={introVisible} colorText={colorText} isFlashCardFinish={isFlashCardFinish}>
                <p data-test="flashcard-text">Pergunta {indexQuestion}</p>
                <button data-test="play-btn" onClick={showQuestion} disabled={isFlashCardFinish}>
                    <img data-test={dataTestIcon} src={imgClosedFlashcard} alt="status"></img>
                </button>
            </StyledClosedFlashcard>

            <StyledOpenFlashcardQuestion questionVisible={questionVisible}>
                <p data-test="flashcard-text">{question}</p>
                <StyledButtonRotate onClick={showAnswer}>
                    <img data-test="turn-btn" src={seta_virar} alt="Ver Resposta" />
                </StyledButtonRotate>
            </StyledOpenFlashcardQuestion>
        
            <StyledOpenFlashcardAnswer answerVisible={answerVisible}>
                <p data-test="flashcard-text">{answer}</p>

                <StyledFooterFlashcard>

                    <StyledButtonUserStatus  
                        data-test="no-btn" 
                        onClick={() => flashcardFinish("NaoLembrou", "#FF3030")}
                        colorButton="#FF3030"
                    >
                        Não lembrei
                    </StyledButtonUserStatus>

                    <StyledButtonUserStatus
                         data-test="partial-btn" 
                        onClick={() => flashcardFinish("QuaseLembrou", "#FF922E")}
                        colorButton="#FF922E"
                    >
                        Quase não lembrei
                    </StyledButtonUserStatus>

                    <StyledButtonUserStatus
                        data-test="zap-btn"
                        onClick={() => flashcardFinish("Lembrou", "#2FBE34")}
                        colorButton="#2FBE34"
                    >
                        Zap!
                    </StyledButtonUserStatus>

                </StyledFooterFlashcard>

            </StyledOpenFlashcardAnswer>
        
        </div>
    )
}

const StyledClosedFlashcard = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.introVisible ? "flex":"none"};
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${props => props.colorText};
        text-decoration: ${props => props.isFlashCardFinish ? "line-through":"none"};
    }

    button {
        border: none;
        background-color: #FFFFFF;
        cursor: pointer;
    }
`
const StyledOpenFlashcardQuestion = styled.div`
    position: relative;
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
    display: ${props => props.questionVisible ? "flex":"none"};
    flex-direction: column;
    justify-content: space-between;
`
const StyledButtonRotate = styled.button`
    border: none;
    background-color: #FFFFD5;
    position: absolute;
    bottom: 10px;
    right: 10px;
    &:hover {
        cursor: pointer;
    }
`
const StyledOpenFlashcardAnswer = styled.div`
    position: relative;
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
    display: ${props => props.answerVisible ? "flex":"none"};
    flex-direction: column;
    justify-content: space-between;
`
const StyledFooterFlashcard = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    min-height: 38px;
    background-color: #FFFFD5;
    position: absolute;
    bottom: 10px;
    left: 5%;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
`
const StyledButtonUserStatus = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.colorButton};
    border-radius: 5px;
    border: none;
    padding:5px;
    &:hover {
        cursor: pointer;
    }
`