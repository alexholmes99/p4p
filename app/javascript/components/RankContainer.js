import React from "react";
import styled from "styled-components";
import Card from "./Card";

function RankContainer(props) {
  const { fighters } = props;

  const renderFighterCards = () => {
    return fighters.map((fighter) => {
      return <Card />;
    });
  };

  return <Container>{renderFighterCards()}</Container>;
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
