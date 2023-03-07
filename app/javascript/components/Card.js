import React from "react";
import styled from "styled-components";
import Jones from "../../assets/images/john_jones.png";

function Card(props) {
  const { fighter } = props;
  console.log(fighter);

  const fullName = () => {
    return `${fighter.first_name} ${fighter.last_name}`;
  };

  const division = () => {
    const division = fighter.division.replace("_", " ");
    const formatted = division.toLowerCase().split(" ");
    for (var i = 0; i < formatted.length; i++) {
      formatted[i] =
        formatted[i].charAt(0).toUpperCase() + formatted[i].slice(1);
    }
    return formatted.join(" ");
  };

  return (
    <Container>
      <FighterIcon src={Jones} />
      <Info>
        <FighterName>{fullName()}</FighterName>
        <Division>{division()}</Division>
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
