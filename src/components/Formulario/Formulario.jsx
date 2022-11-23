import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../../hooks/useSelectMonedas";
import monedas from "../../data/monedas";

const InputSubmit = styled.input`
  border: none;
  background-color: #9497ff;
  width: 150px;
  height: 40px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  color: white;
  text-transform: uppercase;
  transition: transform 450ms, background-color 450ms, font-weight 450ms;

  &:hover {
    background-color: #5d61dc;
    transform: scale(1.05);
    font-weight: 900;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

const MsjeError = styled.div`
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 900;
  text-align: center;
  width: 100%;
  padding: 20px 0;
  border-radius: 15px;
`;

const Formulario = ({ setMoneda }) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [stateMoneda, SelectMonedas] = useSelectMonedas(
    "Elige tu moneda",
    monedas
  );

  const [stateCripto, SelectCripto] = useSelectMonedas(
    "Elige tu cripto",
    criptos
  );

  useEffect(() => {
    const peticion = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key={839bd9fd36f1f0844b0cb54996c3b40067597d982203e430e5f5c753e7a727d5}";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const CryptoArray = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Internal,
          nombre: cripto.CoinInfo.FullName,
        };

        return objeto;
      });

      setCriptos(CryptoArray);
    };
    peticion();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([stateCripto, stateMoneda].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setMoneda({
      stateCripto,
      stateMoneda,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SelectMonedas />

      <SelectCripto />

      {error && <MsjeError>Todos los campos son obligatorios</MsjeError>}

      <InputSubmit type="submit" value="Cotizar" />
    </Form>
  );
};

export default Formulario;
