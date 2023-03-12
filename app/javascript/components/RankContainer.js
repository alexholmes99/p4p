import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { DragDropContext } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { useState } from "react";
function RankContainer(props) {
  const { fighters } = props;
  const [fighterArray, setFighterArray] = useState(fighters);
  const renderFighterCards = (array) => {
    return array.map((fighter) => {
      return <Card fighter={fighter} />;
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
    const fighter = fighterArray[source.index - 1];
    console.log(fighter);

    newFighterList.splice(source.index - 1, 1);
    newFighterList.splice(destination.index - 1, 0, fighter);
    console.log(newFighterList);
    setFighterArray(newFighterList);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={`1`}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            {...provided.dragHandleProps}
          >
            <Container>{renderFighterCards(fighterArray)}</Container>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

const Container = styled.div`
  text-align: center;
  border: solid black 1px;
  border-radius: 4px;

  background-color: white;
  height: 800px;
  width: 50%;
  align-content: center;
  margin: auto;
  overflow-y: scroll;
  overflow-x: none;
`;

export default RankContainer;
