import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
import FullButton from "../Buttons/FullButton";
import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nuestras oficinas</h1>
            <p className="font13">
              Aquí las localizaciones de nuestras oficinas
              <br />

            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Nueva oficina en Madrid"
                  text="Nos complace anunciar que hemos abierto una nueva oficina en el centro de Madrid, donde ofreceremos nuestros servicios de manera más cercana y eficiente a nuestros clientes en la zona."
                  tag="company"
                  author="John Smith, 1 día atrás"
                  action={() => alert("Haz clic para más información")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Oficina en Nueva York ahora abierta"
                  text="Estamos emocionados de anunciar la apertura de nuestra oficina en Nueva York. Con esta nueva ubicación, estamos mejor posicionados para atender a nuestros clientes en la costa este de los Estados Unidos y ofrecer un servicio de calidad."
                  tag="company"
                  author="Jane Doe, 2 días atrás"
                  action={() => alert("Haz clic para más información")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Nueva oficina en Shanghái"
                  text="Hemos abierto una nueva oficina en Shanghái para proporcionar a nuestros clientes de Asia un servicio más cercano y personalizado. Esperamos continuar creciendo y sirviendo a nuestros clientes en todo el mundo."
                  tag="company"
                  author="Bob Johnson, 3 días atrás"
                  action={() => alert("Haz clic para más información")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Inauguración de la nueva oficina en Sydney"
                  text="Nos complace anunciar la inauguración de nuestra nueva oficina en Sydney, Australia. Este nuevo espacio nos permite ampliar nuestro alcance en la región y brindar soluciones innovadoras y personalizadas a nuestros clientes."
                  tag="company"
                  author="Ana Gómez, hace 5 días"
                  action={() => alert("Haz clic para más información")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Expansión en Latinoamérica"
                  text="Nos complace anunciar la expansión de nuestra presencia en Latinoamérica con la apertura de una nueva oficina en la Ciudad de México. Esperamos continuar creciendo y fortaleciendo nuestra relación con nuestros clientes en la región."
                  tag="company"
                  author="Carlos López, hace 7 días"
                  action={() => alert("Haz clic para más información")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                  title="Nueva oficina en Singapur"
                  text="Estamos emocionados de anunciar la apertura de nuestra nueva oficina en Singapur, que nos permitirá ofrecer un mejor servicio a nuestros clientes en la región de Asia Pacífico. Esperamos seguir creciendo y ayudando a nuestros clientes a alcanzar sus objetivos de negocio."
                  tag="company"
                  author="David Wong, hace 10 días"
                  action={() => alert("Haz clic para más información")}
              />
            </div>



            </div>


          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div>
        </div>

      {/*<div className="lightBg" style={{padding: '50px 0'}}>*/}
      {/*  <div className="container">*/}
      {/*    <HeaderInfo>*/}
      {/*      <h1 className="font40 extraBold">What They Say?</h1>*/}
      {/*      <p className="font13">*/}
      {/*        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut*/}
      {/*        <br />*/}
      {/*        labore et dolore magna aliquyam erat, sed diam voluptua.*/}
      {/*      </p>*/}
      {/*    </HeaderInfo>*/}
      {/*    <TestimonialSlider />*/}
      {/*  </div>*/}
      {/*</div>*/}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;