import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
      <Wrapper id="precios">
          <div className="fondoBlanco">
              <div className="container">
                  <HeaderInfo>
                      <h1 className="font40 extraBold">Consulta nuestros precios</h1>
                      <p className="font13">
                          Elige el plan que más se ajuste a tus necesidades. ¡Comienza a disfrutar de tu música favorita sin anuncios y sin límites!
                      </p>
                  </HeaderInfo>
                  <TablesWrapper className="flexSpaceNull">
                      <TableBox>
                          <PricingTable
                              icon="roller"
                              price="$4,99/mes"
                              title="Individual"
                              text="Disfruta de música sin anuncios y escucha tus canciones en cualquier dispositivo sin límites."
                              offers={[
                                  { name: "Escucha sin anuncios", checked: true },
                                  { name: "Escucha en cualquier dispositivo", checked: true },
                                  { name: "Salta canciones ilimitadamente", checked: true },
                                  { name: "Descarga música y escucha offline", checked: false },
                                  { name: "Escucha música en alta calidad", checked: false },
                              ]}
                              action={() => alert("Haz clic en 'Individual'")}
                          />
                      </TableBox>
                      <TableBox>
                          <PricingTable
                              icon="monitor"
                              price="$7,99/mes"
                              title="Dúo"
                              text="Obtén dos cuentas Premium para ti y otra persona que viva contigo, y ahorra en la factura."
                              offers={[
                                  { name: "Escucha sin anuncios", checked: true },
                                  { name: "Escucha en cualquier dispositivo", checked: true },
                                  { name: "Salta canciones ilimitadamente", checked: true },
                                  { name: "Descarga música y escucha offline", checked: true },
                                  { name: "Escucha música en alta calidad", checked: false },
                              ]}
                              action={() => alert("Haz clic en 'Dúo'")}
                          />
                      </TableBox>
                      <TableBox>
                          <PricingTable
                              icon="browser"
                              price="$9,99/mes"
                              title="Familiar"
                              text="Obtén hasta seis cuentas Premium para ti y tu familia, y ahorra en la factura."
                              offers={[
                                  { name: "Escucha sin anuncios", checked: true },
                                  { name: "Escucha en cualquier dispositivo", checked: true },
                                  { name: "Salta canciones ilimitadamente", checked: true },
                                  { name: "Descarga música y escucha offline", checked: true },
                                  { name: "Escucha música en alta calidad", checked: true },
                              ]}
                              action={() => alert("Haz clic en 'Familiar'")}
                          />
                      </TableBox>
                  </TablesWrapper>
              </div>
          </div>
      </Wrapper>

  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;




