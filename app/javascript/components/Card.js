import React from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

function Card(props) {
  const { fighter, index } = props;
  const fighterRank = () => {
    return "#" + (index + 1);
  };
  return (
    <Draggable draggableId={`${index}`} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <FighterIcon src={fighter.avatar} />
          <Info>
            <FighterName>{fighter.fullname}</FighterName>
            <Division>{fighter.division}</Division>
          </Info>
          <Rank>{fighterRank()}</Rank>
        </Container>
      )}
    </Draggable>
  );
}

const Container = styled.div`
  position: relative;
  border: solid black 4px;
  border-radius: 8px;
  max-width: 100%;
  min-width: 500px;
  height: 100%;
  display: flex;
  background-color: white;
  padding: 4px;
`;

const Rank = styled.div`
  margin: 0;
  padding: 0;
  font-size: 40px;
  font-weight: 700;
  position: absolute;
  right: 15px;
  top: 30%;
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
  text-align: center;
`;

const FighterIcon = styled.img`
  height: 100%;
  margin-left: 0%;
`;

export default Card;
