import styled from "@emotion/styled/macro";

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 600px) and (max-width: 900px) {
    width: 45%;
    margin-right: 16px;
    :nth-child(2n) {
      margin-right: 0px;
    }
  }
  @media (min-width: 900px) {
    width: 30%;
    margin-right: 28px;
    :nth-child(3n) {
      margin-right: 0px;
    }
  }
`;

export const ContainerCard = styled.div`
  max-width: 1036px;
  justify-content: center;
  display: flex;
`;

export const ContainerCards = styled.div`
  justify-content: center;
  display: flex;
  margin-bottom: 70px;
`;
