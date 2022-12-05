import styled from "styled-components";
import icone_certo from "../assets/img/icone_certo.png"
import icone_quase from "../assets/img/icone_quase.png"
import icone_erro from "../assets/img/icone_erro.png"
import sad from "../assets/img/sad.png"
import party from "../assets/img/party.png"

export default function FlashcardsCompleteds(props) {
    const {numCardsAnswereds,tamCards, iconList} = props;
    const esqueceuFlashcard = (iconList.length === tamCards && iconList.includes('icone_erro'));
    const naoEsqueceuFlashcard = (iconList.length === tamCards && !iconList.includes('icone_erro'));

    function showIconeResp(icon){
        if(icon === "icone_erro") return <img data-test="no-icon" src={icone_erro} alt="erro"/>;
        if(icon === "icone_quase") return <img data-test="partial-icon" src={icone_quase} alt="quase"/>;
        if(icon === "icone_certo") return <img data-test="zap-icon" src={icone_certo} alt="certo"/>;
    }

    return (
        <FooterContainer data-test="footer">
            {esqueceuFlashcard && 
                <FooterMsg data-test="finish-text">
                    <div>
                        <img src={sad} alt="sad"/>
                        <h2>Putz...</h2>
                    </div>
                    <p>Ainda faltam alguns...<br/>Mas não desanime!</p>
                </FooterMsg>
            } 
            {naoEsqueceuFlashcard && 
                <FooterMsg data-test="finish-text">
                    <div>
                        <img src={party} alt="party"/>
                        <h2>Parabéns!</h2>
                    </div>
                    <p>Você não esqueceu de<br/> nenhum flashcard!</p>
                </FooterMsg>
            }
            <p>{numCardsAnswereds}/{tamCards} CONCLUÍDOS</p>

            <FooterIconList>
                {iconList.map( (icon) => <span>{ showIconeResp(icon) }</span>)}
            </FooterIconList>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  width: 100vw;
  min-height: 70px;
  background-color: #FFFFFF;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #333333;
`

const FooterMsg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 16px 0;
    
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #333333;

    img{
        display: inline;
    }

    h2{
        display: inline-block;
        font-weight: 700;
        margin-left: 10px;
    }
    p{
        font-weight: 400;
        text-align: center;
    }
`

const FooterIconList = styled.div`
    margin-top: 6px;
    span{
        margin-left: 3px;
    }
`