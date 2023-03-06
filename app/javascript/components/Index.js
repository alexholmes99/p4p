import React from "react";
import Logo from "./Logo";
import RankContainer from "./RankContainer";
import styled from "styled-components";

function Index() {
  return (
    <Wrapper>
      <Logo titleText="P4P" />
      <RankContainer />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #ee352a;
  min-height: 100vh;
`;

export default Index;
