import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Img from "./assets/img/imagen-criptos.png";
import Formulario from "./components/Formulario/Formulario";
import Cotizado from "./components/Cotizado/Cotizado";
import Spinner from "./components/Spinner/Spinner";

const Contenedor = styled.div`
  margin: 80px auto;
  max-width: 900px;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  flex-wrap: wrap;
`;

const Titulo = styled.h1`
  color: white;
  max-width: 400px;
  width: 80%;
  text-align: center;
  font-weight: 700;
  font-size: 34px;

  &::after {
    content: "";
    height: 3px;
    width: 200px;
    background-color: #29455f;
    display: block;
    margin: 10px auto;
  }
`;

const ImagenMain = styled.img`
  max-width: 400px;
  width: 80%;
  display: block;
`;

const ContenedorForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
`;

function App() {
  const [moneda, setMoneda] = useState({});
  const [cotizacion, setCotizacion] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.entries(moneda).length !== 0) {
      setLoading(true);
      setCotizacion({});

      const peticion = async () => {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${moneda.stateCripto}&tsyms=${moneda.stateMoneda}&api_key={839bd9fd36f1f0844b0cb54996c3b40067597d982203e430e5f5c753e7a727d5}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCotizacion(
          resultado.DISPLAY[moneda.stateCripto][moneda.stateMoneda]
        );
        setLoading(false);
      };
      peticion();
    }
  }, [moneda]);

  return (
    <Contenedor>
      <ImagenMain src={Img} alt="Imagenes de criptos" />
      <ContenedorForm>
        <Titulo>Cotiza Criptomonedas</Titulo>
        <Formulario setMoneda={setMoneda} />

        {loading && <Spinner />}
        {cotizacion.PRICE && <Cotizado cotizacion={cotizacion} />}
      </ContenedorForm>
    </Contenedor>
  );
}

export default App;
