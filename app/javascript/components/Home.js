import React from "react";
import Logo from "./Logo";
import styled from "styled-components";
import NewRankContainer from "./NewRankContainer";

function Home(props) {
  const { fighters } = props;

  return (
    <Wrapper>
      <Logo titleText="P4P" />
      <NewRankContainer fighters={fighters} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: #901d10;
`;

export default Home;
