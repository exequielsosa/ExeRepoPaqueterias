import "./styles.css";
import BoxImage from "./BoxImage";
import { mockParcels } from "./services/mocklist";
import Container from "./CardContainer";
import SearchBox from "./SearchBox";
import GeneralLayout from "./GeneralLayout";

export default function App() {
  return (
    <div className="App">
      <GeneralLayout>
        <SearchBox
          title="Paqueterías en México"
          placeholderMobile="Buscar..."
          text="Disfruta de una amplia variedad de opciones para realizar todos tus envíos desde México con las mejores paqueterías a nivel nacional y los precios más competitivos del mercado."
        />

        <Container>
          {mockParcels.map((el) => (
            <BoxImage
              imgUrl={el.url}
              title={el.title}
              description={el.list}
              handleClick={() => el.link}
            />
          ))}
        </Container>
        <br></br>
      </GeneralLayout>
    </div>
  );
}
