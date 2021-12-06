import React from "react";
import styled from "@emotion/styled/macro";
import Titles from "../Titles";
import Text from "../Text";
import Button from "../Button";

interface SendContainerProps {
  handleClick: () => void;
}

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  padding-top: 63px;
  padding-bottom: 21px;
  background: #fafaff;
  @media (min-width: 600px) {
    padding-top: 114px;
    padding-bottom: 89px;
  }
`;

const DivTitle = styled.div`
  display: flex;
  margin-bottom: 16px;
  @media (min-width: 600px) {
    justify-content: center;
    margin-bottom: 24px;
  }
`;

const DivText = styled.div`
  display: flex;
  margin-bottom: 24px;
`;

const DivButton = styled.div`
  display: flex;
  justify-content: center;
`;

const SendContainer: React.FC<SendContainerProps> = ({ handleClick }) => {
  return (
    <Container>
      <DivTitle>
        <Titles justifyContentDesktop="center">
          Envía al mejor precio de todo México
        </Titles>
      </DivTitle>
      <DivText>
        <Text>
          Despreocúpate de tu logística de envíos y conoce las mejores opciones
          para realizar tus envíos nacionales e internacionales{" "}
        </Text>
      </DivText>
      <DivButton>
        <Button handleClick={handleClick}>Comenzar a enviar</Button>
      </DivButton>
    </Container>
  );
};

export default SendContainer;
