import React from "react";
import styled from "@emotion/styled";

export interface TitleProps {
  children: React.ReactNode;
  fontColor?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
  justifyContentMobile?: string;
  justifyContentDesktop?: string;
}

const Layout = styled.div<{
  fontColor?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
  justifyContentMobile?: string;
  justifyContentDesktop?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContentMobile }) => justifyContentMobile};
  color: ${({ fontColor }) => fontColor};
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  @media (min-width: 600px) {
    font-size: 36px;
    line-height: 44px;
    justify-content: ${({ justifyContentDesktop }) => justifyContentDesktop};
  }
`;

const Titles: React.FC<TitleProps> = ({
  fontColor = "#233362",
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  justifyContentDesktop = "left",
  justifyContentMobile = "center",
  children
}) => {
  return (
    <Layout
      fontColor={fontColor}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
      justifyContentDesktop={justifyContentDesktop}
      justifyContentMobile={justifyContentMobile}
    >
      {children}
    </Layout>
  );
};

export default Titles;
