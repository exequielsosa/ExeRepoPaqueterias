import React from "react";
import styled from "@emotion/styled";
import BoxWhite from "../BoxWhite";

export interface DisclaimerProps {}

const Title = styled.div`
  display: flex;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  color: #233362;
  font-style: italic;
  font-family: Inter, sans-serif;
  margin-bottom: 8px;
`;

const Text = styled.div`
  display: flex;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  color: rgba(35, 51, 98, 0.5);
  font-style: italic;
  font-family: Inter, sans-serif;
  text-align: left;
`;

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #f4f4ff;
  padding-top: 25px;
  padding-bottom: 25px;
  @media (min-width: 600px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const LayoutDesktop = styled.div`
  max-width: 1036px;
  background: #f4f4ff;
  @media (min-width: 600px) {
    display: flex;
    margin-bottom: 40px;
    margin-top: 30px;
  }
`;

const Disclaimer: React.FC<DisclaimerProps> = () => {
  return (
    <>
      <Layout>
        <LayoutDesktop>
          <BoxWhite
            paddingTop="38px"
            paddingLeft="40px"
            paddingRight="40px"
            paddingBottom="40px"
            width=""
          >
            <Title>Disclaimer:</Title>
            <Text>
              SKYDROPx manifiesta que no es propietaria de las marcas expuestas
              en la Plataforma, ni cuenta con Licencia de Uso de Marca otorgada
              por los Legítimos Titulares. Los datos exhibidos son únicamente
              informativos de la relación comercial entre las Partes, por lo que
              en ningún momento se busca hacer mal uso que implique competencia
              desleal o ni se realizan actos que causen o induzcan al público a
              confusión, error o engaño. Esto de conformidad con el artículo 175
              de la Ley Federal de Protección a la Propiedad Industrial.
            </Text>
          </BoxWhite>
        </LayoutDesktop>
      </Layout>
    </>
  );
};

export default Disclaimer;
