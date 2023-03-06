import React from "react";
import styled from "styled-components";
import Card from "./Card";

function RankContainer() {
  return (
    <Container>
      <Card />
    </Container>
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
`;

export default RankContainer;
