import styled from "styled-components";

export default function FlashcardsCompleteds({tamanhoCards}) {
    return (
        <FooterContainer>
            <p>0/{tamanhoCards} CONCLUÍDOS</p>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 70px;
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
  line-height: 21px;

  color: #333333;
`