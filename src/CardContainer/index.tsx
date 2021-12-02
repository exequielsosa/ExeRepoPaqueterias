import styled from "@emotion/styled";

export interface GridCards {
  children: React.ReactNode;
}

const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const GridElement = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  justify-content: space-between;
  @media (min-width: 600px) {
    grid-template-columns: 50% 50%;
    grid-column-gap: 12px;
  }
  @media (min-width: 900px) {
    grid-template-columns: 30% 30% 30%;
    grid-column-gap: 12px;
  }
`;

const Container: React.FC<GridCards> = ({ children }) => {
  return (
    <Layout>
      <GridElement>{children}</GridElement>
    </Layout>
  );
};

export default Container;
