import styled from "@emotion/styled/macro";

export const Table = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1036px;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  justify-content: space-between;
  :last-child {
    margin-right: 0px;
  }
  @media (min-width: 600px) {
    width: 45%;
    margin-right: 16px;
  }
  @media (min-width: 900px) {
    width: 30%;
    margin-right: 28px;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;
