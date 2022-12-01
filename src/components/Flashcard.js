import styled from "styled-components";
import seta_play from "../assets/img/seta_play.png"
import seta_virar from "../assets/img/seta_virar.png"

export default function Flashcard(props) {
    const { indexQuestion, question, answer } = props;
    return (
        <div>
            <CloseQuestion>
                <p>Pergunta {indexQuestion}</p>
                <img src={seta_play} alt="play"></img>
            </CloseQuestion>
            <OpenQuestion>
                <p>{question}</p>
                <img src={seta_virar} alt="ver resposta" />
            </OpenQuestion>
            <OpenQuestion>
                {answer}
                <FooterQuestion>
                    <ButtonUserRemember colorButton="#FF3030">Não lembrei</ButtonUserRemember>
                    <ButtonUserRemember colorButton="#FF922E">Quase não lembrei</ButtonUserRemember>
                    <ButtonUserRemember colorButton="#2FBE34">Zap!</ButtonUserRemember>
                </FooterQuestion>
            </OpenQuestion>
        </div>
    )
}

const CloseQuestion = styled.div`
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
const FooterQuestion = styled.div`
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
const ButtonUserRemember = styled.button`
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
`