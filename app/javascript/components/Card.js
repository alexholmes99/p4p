import React from "react";
import styled from "styled-components";
import Jones from "../../assets/images/john_jones.png";

function Card() {
  return (
    <Container>
      <FighterIcon src={Jones} />
      <Info>
        <FighterName>Jon Jones</FighterName>
        <Division>Heavyweight</Division>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  border: solid black 1px;
  width: 100%;
  height: fit-content;
  display: flex;
`;

const FighterName = styled.div`
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-weight: 700;
`;

const Division = styled.div`
  padding: 0;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
`;

const Info = styled.div`
  display: inline;
  text-align: right;
  padding: 8px;
`;

const FighterIcon = styled.img`
  max-width: 15%;
  padding: 8px;
`;

export default Card;
