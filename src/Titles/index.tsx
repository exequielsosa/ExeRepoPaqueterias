import React from "react";
import styled from "@emotion/styled";

export interface TitleProps {
  children: React.ReactNode;
  justifyContent?: string;
  fontColor?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
}

const Layout = styled.div<{
  justifyContent?: string;
  fontColor?: string;
  marginTop?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
}>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent};
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
  }
`;

const Titles: React.FC<TitleProps> = ({
  justifyContent = "center",
  fontColor = "#233362",
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  children
}) => {
  return (
    <Layout
      justifyContent={justifyContent}
      fontColor={fontColor}
      marginTop={marginTop}
      marginRight={marginRight}
      marginLeft={marginLeft}
      marginBottom={marginBottom}
    >
      {children}
    </Layout>
  );
};

export default Titles;
