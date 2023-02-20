import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
      <Wrapper id="pricing">
          <div className="fondoBlanco">
              <div className="container">
                  <HeaderInfo>
                      <h1 className="font40 extraBold">Consulta nuestros precios</h1>
                      <p className="font13">
                          Elige el plan que más se ajuste a tus necesidades.
                      </p>
                  </HeaderInfo>
                  <TablesWrapper className="flexSpaceNull">
                      <TableBox>
                          <PricingTable
                              icon="roller"
                              title="Individual"
                              text="Obtén una cuenta Premium para ti solo."
                              offers={[
                                  { name: "Servicios personalizados", checked: true },
                                  { name: "Trabajamos mano a mano contigo", checked: true },
                                  { name: "Sin compromiso de permanencia", checked: true },
                                  { name: "", checked: false },
                                  { name: "", checked: false },
                              ]}
                              action={() => alert("Haz clic en 'Individual'")}
                          />
                      </TableBox>
                      <TableBox>
                          <PricingTable
                              icon="monitor"
                              title="Start ups"
                              text="Ideal para empresas pequeñas y medianas."
                              offers={[
                                  { name: "Servicios personalizados", checked: true },
                                  { name: "Trabajamos mano a mano contigo", checked: true },
                                  { name: "Sin compromiso de permanencia", checked: true },
                                  { name: "", checked: false },
                                  { name: "", checked: false },
                              ]}
                              action={() => alert("Haz clic en 'Dúo'")}
                          />
                      </TableBox>
                      <TableBox>
                          <PricingTable
                              icon="browser"
                              title="Empresas"
                              text="Ideal para empresas grandes."
                              offers={[
                                  { name: "Servicios personalizados", checked: true },
                                  { name: "Trabajamos mano a mano contigo", checked: true },
                                  { name: "Sin compromiso de permanencia", checked: true },
                                  { name: "", checked: false },
                                  { name: "", checked: false },
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




