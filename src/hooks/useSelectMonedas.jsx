import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: white;
  display: block;
  font-size: 24px;
  font-weight: 700;
`;
const Select = styled.select`
  width: 100%;
  border-radius: 10px;
  padding: 14px;
  font-size: 18px;
`;

const Option = styled.option`
  text-align: center;
`;

const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <Option value="">Seleccione</Option>

        {opciones.map((opcion) => {
          return (
            <Option value={opcion.id} key={opcion.id}>
              {opcion.nombre}
            </Option>
          );
        })}
      </Select>
    </>
  );
  return [state, SelectMonedas];
};

export default useSelectMonedas;
