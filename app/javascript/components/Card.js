import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
  const { fighter, index } = props;
  const fighterRank = () => {
    return index === 0 ? "Champ" : "#" + index;
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
  position: relative;
  border: solid black 1px;
  width: 100%;
  max-width: 500px;
  height: 140px;
  display: flex;
  background-color: white;
  padding: 4px;
`;

const Rank = styled.div`
  margin: 0;
  padding: 0;
  height: fit-content;
  position: absolute;
  right: 15px;
  top: 15px;
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
  padding: 8px;
  margin-left: 0%;
`;

export default Card;
