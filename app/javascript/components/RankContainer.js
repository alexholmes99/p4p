import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";

function RankContainer(props) {
  const { fighters } = props;
  const [fighterArray, setFighterArray] = useState(fighters);
  const renderFighterCards = (array) => {
    return array.map((fighter, index) => {
      return (
        <CardHolder>
          <Card fighter={fighter} index={index} />
        </CardHolder>
      );
    });
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newFighterList = Array.from(fighterArray);
    const fighter = fighterArray[draggableId];

    newFighterList.splice(source.index, 1);
    newFighterList.splice(destination.index, 0, fighter);

    setFighterArray(newFighterList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={`1`}>
        {(provided) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            {renderFighterCards(fighterArray)}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const CardHolder = styled.div`
  height: 8.5%;
  margin-bottom: 20px;
`;
const Container = styled.div`
  height: 85%;
  max-width: 45%;
  min-width: 532px;
  background: #901d10;
  margin: 16px auto;
  overflow: hidden;
`;

export default RankContainer;
