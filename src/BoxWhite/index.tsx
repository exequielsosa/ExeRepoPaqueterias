import React from "react";
import styled from "@emotion/styled";

export interface BoxProps {
  children: React.ReactNode;
  justifyContent?: string;
  flexDirection?: string;
  paddingLeft?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingTop?: string;
  alignItems?: string;
  alignContent?: string;
  width?: string;
}

const Layout = styled.div<{
  justifyContent?: string;
  flexDirection?: string;
  paddingLeft?: string;
  paddingBottom?: string;
  paddingRight?: string;
  paddingTop?: string;
  alignItems?: string;
  alignContent?: string;
  width?: string;
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  background: #fff;
  border: 1px solid #ffffff;
  box-shadow: 0px 3px 14px 2px rgba(152, 167, 204, 0.12);
  border-radius: 6px;
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
  align-items: ${({ alignItems }) => alignItems};
  align-content: ${({ alignContent }) => alignContent};
  width: ${({ width }) => width};
`;

const BoxWhite: React.FC<BoxProps> = ({
  justifyContent = "center",
  flexDirection = "column",
  paddingLeft = "40px",
  paddingBottom = "48px",
  paddingRight = "40px",
  paddingTop = "40px",
  alignItems = "center",
  alignContent = "center",
  width = "100%",
  children
}) => {
  return (
    <Layout
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      alignItems={alignItems}
      alignContent={alignContent}
      width={width}
    >
      {children}
    </Layout>
  );
};

export default BoxWhite;
