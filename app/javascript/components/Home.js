import React from "react";
import Logo from "./Logo";
import RankContainer from "./RankContainer";
import styled from "styled-components";

function Home(props) {
  const { fighters } = props;

  return (
    <Wrapper>
      <Logo titleText="P4P" />
      <RankContainer fighters={fighters} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: #901d10;
`;

export default Home;
