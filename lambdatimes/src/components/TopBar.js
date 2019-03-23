import React from "react";

import styled from "styled-components";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarStyling = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const ContainerStyling = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    .top-bar .container {
      width: 1280px;
    }
  }
`;

const ContainerLeftStyling = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const CenterLeftSpanStyling = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
  margin-left: 100px;
`;

const ContainerCenterStyling = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerCenterSpanStyling = styled.span`
  cursor: pointer;
  margin-right: 5%;

  :last-child {
    margin-right: 0;
  }

  :hover {
    text-decoration: underline;
  }
`;

const ContainerRightStyling = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightSpanStyling = styled.span`
  cursor: pointer;
  margin-right: 100px;
`;

const TopBar = () => {
  return (
    <TopBarStyling>
      <ContainerStyling>
        <ContainerLeftStyling>
          <CenterLeftSpanStyling>TOPICS</CenterLeftSpanStyling>
          <CenterLeftSpanStyling>SEARCH</CenterLeftSpanStyling>
        </ContainerLeftStyling>
        <ContainerCenterStyling>
          <ContainerCenterSpanStyling>GENERAL</ContainerCenterSpanStyling>
          <ContainerCenterSpanStyling>BROWNBAG</ContainerCenterSpanStyling>
          <ContainerCenterSpanStyling>RANDOM</ContainerCenterSpanStyling>
          <ContainerCenterSpanStyling>MUSIC</ContainerCenterSpanStyling>
          <ContainerCenterSpanStyling>ANNOUNCEMENTS</ContainerCenterSpanStyling>
        </ContainerCenterStyling>
        <ContainerRightStyling>
          <ContainerRightSpanStyling>LOG IN</ContainerRightSpanStyling>
        </ContainerRightStyling>
      </ContainerStyling>
    </TopBarStyling>
  );
};

export default TopBar;
