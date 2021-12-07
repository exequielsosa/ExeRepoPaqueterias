import "./styles.css";
import BoxImage from "./ImgImportant";
import { mockParcels } from "./services/mocklist";
import Container from "./CardContainer";
import SearchBox from "./SearchBox";
import GeneralLayout from "./GeneralLayout";
import Destacadas from "./Destacadas";
import SendContainer from "./SendContainer";
import { Row, Table, ContainerCard, ContainerCards } from "./ContainerCards";

export default function App() {
  return (
    <div className="App">
      <GeneralLayout>
        <SendContainer handleClick={() => "https://www.google.com"} />
        <Destacadas handleClick={() => "https://www.google.com"} />
        <SearchBox
          title="Paqueterías en México"
          placeholderMobile="Buscar..."
          text="Disfruta de una amplia variedad de opciones para realizar todos tus envíos desde México con las mejores paqueterías a nivel nacional y los precios más competitivos del mercado."
        />
        <ContainerCards>
          <ContainerCard>
            <Table>
              {mockParcels.map((el) => (
                <Row>
                  <BoxImage
                    imgUrl={el.url}
                    title={el.title}
                    description={el.list}
                    handleClick={() => el.link}
                  />
                </Row>
              ))}
            </Table>
          </ContainerCard>
        </ContainerCards>

        <br></br>
      </GeneralLayout>
    </div>
  );
}
