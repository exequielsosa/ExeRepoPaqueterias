import React from "react";
import styled from "@emotion/styled";

export interface TextProps {
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
  font-size: 19px;
  line-height: 23px;
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const Text: React.FC<TextProps> = ({
  justifyContent = "center",
  fontColor = "rgba(35, 51, 98, 0.5)",
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

export default Text;
