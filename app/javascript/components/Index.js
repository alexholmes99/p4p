import React from "react";
import Logo from "./Logo";
import RankContainer from "./RankContainer";
import styled from "styled-components";

function Index(props) {
  const { fighters } = props;

  return (
    <Wrapper>
      <Logo titleText="P4P" />
      <RankContainer fighters={fighters} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #ff3822;
  min-height: 100vh;
`;

export default Index;
