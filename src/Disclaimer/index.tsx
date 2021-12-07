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

// const LayoutInputSearch = styled.div`
//   padding-left: 16px;
//   padding-right: 16px;
// `;

const LayoutDesktop = styled.div`
  max-width: 1036px;
  background: #f4f4ff;
  @media (min-width: 600px) {
    display: flex;
    margin-bottom: 40px;
    margin-top: 30px;
  }
`;

// const Layout = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
// `;

const Disclaimer: React.FC<DisclaimerProps> = () => {
  return (
    <>
      <LayoutDesktop>
        <BoxWhite
          paddingTop="38px"
          paddingLeft="40px"
          paddingRight="40px"
          paddingBottom="40px"
        >
          <Title>Disclaimer:</Title>
          <Text>
            SKYDROPx manifiesta que no es propietaria de las marcas expuestas en
            la Plataforma, ni cuenta con Licencia de Uso de Marca otorgada por
            los Legítimos Titulares. Los datos exhibidos son únicamente
            informativos de la relación comercial entre las Partes, por lo que
            en ningún momento se busca hacer mal uso que implique competencia
            desleal o ni se realizan actos que causen o induzcan al público a
            confusión, error o engaño. Esto de conformidad con el artículo 175
            de la Ley Federal de Protección a la Propiedad Industrial.
          </Text>
        </BoxWhite>
      </LayoutDesktop>
    </>
  );
};

export default Disclaimer;
