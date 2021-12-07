import React from "react";
import styled from "@emotion/styled/macro";
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
  justify-content: center;
  margin-bottom: 31px;
  max-width: 1036px;
  @media (min-width: 600px) {
    height: 409px;
    margin-bottom: 0px;
  }
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background: #f4f4ff;
`;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 51px;
  width: 100%;
  justify-content: space-between;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 8px;
  ::-webkit-scrollbar {
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e5e5e5;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    box-shadow: rgba(0, 0, 0, 0.5);
  }
  ::-webkit-scrollbar-track {
    background: white;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track:active {
    background: #f4f4ff;
  }
`;

const Destacadas: React.FC<ParcelsDestaca> = ({ handleClick }) => {
  return (
    <Layout>
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
            imgUrl="esta.svg"
            imageWidth="120px"
            handleClick={handleClick}
            backgroundColor="#CF2028"
          />
        </ContainerImg>
      </ContainerDesk>
    </Layout>
  );
};

export default Destacadas;
