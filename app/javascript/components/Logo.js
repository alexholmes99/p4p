import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
function Logo(props) {
  const { titleText } = props;

  return <LogoContainer>{titleText}</LogoContainer>;
}

const LogoContainer = styled.div`
  text-align: center;
  font-size: 68px;
  padding-top: 10px;
`;

Logo.propTypes = {
  titleText: PropTypes.string,
};
export default Logo;
