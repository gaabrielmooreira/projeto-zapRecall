import styled from "styled-components";
import Flashcard from "./Flashcard";

export default function Flashcards({cards}) {
    return (
        <FlashcardList>
            {cards.map((c, index) => <Flashcard key={c.question} indexQuestion={index + 1} question={c.question} answer={c.answer}/>)}
        </FlashcardList>
    )
}

const FlashcardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`
