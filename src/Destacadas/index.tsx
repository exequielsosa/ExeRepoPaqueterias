import React from "react";
import styled from "@emotion/styled";
import DestacadasImg from "../DestacadasImg";
import Titles from "../Titles";

interface ParcelsDestaca {
  handleClick: () => void;
}

const ContainerDesk = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: #f4f4ff;
  height: 303px;
  align-content: space;
  justify-content: center;
  @media (min-width: 600px) {
    height: 409px;
  }
`;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 51px;
  width: 100%;
  justify-content: space-between;
  overflow-x: auto;
  white-space: nowrap;
`;

const Destacadas: React.FC<ParcelsDestaca> = ({ handleClick }) => {
  return (
    <ContainerDesk>
      <Titles>Paqueterías destacadas</Titles>
      <ContainerImg>
        <DestacadasImg imgUrl="dhl.svg" handleClick={handleClick} />
        <DestacadasImg imgUrl="fedex.svg" handleClick={handleClick} />
        <DestacadasImg
          imgUrl="paqueteexpress.svg"
          imageWidth="210px"
          handleClick={handleClick}
          backgroundColor="#022A52"
        />
        <DestacadasImg
          imgUrl="estafeta.png"
          imageWidth="170px"
          handleClick={handleClick}
          backgroundColor="#CF2028"
        />
      </ContainerImg>
    </ContainerDesk>
  );
};

export default Destacadas;
