import React from "react";
import styled from "@emotion/styled/macro";

export interface GeneralLayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  @media (min-width: 600px) {
    padding: 24px;
  }
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1036px;
  align-items: center;
`;

const GeneralLayout: React.FC<GeneralLayoutProps> = ({ children }) => {
  return (
    <>
      <Container>
        <Layout>{children}</Layout>
      </Container>
    </>
  );
};

export default GeneralLayout;
