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
  @media (min-width: 600px) {
    padding-top: 114px;
    padding-bottom: 89px;
  }
`;

const SendContainer: React.FC<SendContainerProps> = ({ handleClick }) => {
  return (
    <Container>
      <Titles justifyContentDesktop="center">Paqueterías destacadas</Titles>
      <Text>
        Despreocúpate de tu logística de envíos y conoce las mejores opciones
        para realizar tus envíos nacionales e internacionales{" "}
      </Text>
      <Button handleClick={handleClick}>Comenzar a enviar</Button>
    </Container>
  );
};

export default SendContainer;
