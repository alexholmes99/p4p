import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
  const { fighter, index } = props;
  const fighterRank = () => {
    return index === 0 ? "Champ" : index + 1;
  };
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Container>
            <FighterIcon src={fighter.avatar} />
            <Info>
              <FighterName>{fighter.fullname}</FighterName>
              <Division>{fighter.division}</Division>
            </Info>
            <Rank>{fighterRank()}</Rank>
          </Container>
        </div>
      )}
    </Draggable>
  );
}

const Container = styled.div`
  border: solid black 1px;
  width: 100%;
  height: fit-content;
  display: flex;
  background-color: white;
`;

const Rank = styled.div`
  margin-right: -10%;
`;

const FighterName = styled.div`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

const Division = styled.div`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const Info = styled.div`
  display: inline;
  align-content: left;
  padding: 70px 8px;
`;

const FighterIcon = styled.img`
  max-width: 15%;
  padding: 8px;
`;

export default Card;
