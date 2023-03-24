import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
function Logo(props) {
  const { titleText } = props;

  return <LogoContainer>{titleText}</LogoContainer>;
}

const LogoContainer = styled.div`
  text-align: center;
  font-style: italic;
  font-family: Helvetica, sans-serif;
  font-weight: 700;
  font-size: 80px;
  padding-top: 10px;
  paddding-bottom: 10px;
  color: #ac564c;
  text-shadow: 6px 6px #6c160c;
`;

Logo.propTypes = {
  titleText: PropTypes.string,
};
export default Logo;
