import React from "react";

import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

// was className="header"
const HeaderStyling = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;
  @media (min-width: 1280px) {
    .header {
      width: 1280px;
    }
  }
`;

// was className="date"
const HeaderDateStyling = styled.span`
  margin-left: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

// was just an h1 tag
const HeaderMainHeader = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

// was className="temp"
const HeaderTempStyling = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const Header = () => {
  return (
    <HeaderStyling>
      <HeaderDateStyling>SMARCH 32, 2018</HeaderDateStyling>
      <HeaderMainHeader>Lambda Times</HeaderMainHeader>
      <HeaderTempStyling>98°</HeaderTempStyling>
    </HeaderStyling>
  );
};

export default Header;
