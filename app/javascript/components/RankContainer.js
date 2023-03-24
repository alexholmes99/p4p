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
    return array.map((fighter, index) => {
      return <Card fighter={fighter} index={index} />;
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
    console.log(fighter);

    newFighterList.splice(source.index, 1);
    newFighterList.splice(destination.index, 0, fighter);
    console.log(newFighterList);
    setFighterArray(newFighterList);
  };

  return (
    <Wrapper>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 2%;
  margin-bottom: 10%;
  height: 80%;
`;
const Container = styled.div`
  text-align: center;
  max-height: 1000px;
  background-color: #cd6155;
  max-width: 45%;
  min-width: 532px;

  margin: auto;
  overflow: hidden;
`;

export default RankContainer;
