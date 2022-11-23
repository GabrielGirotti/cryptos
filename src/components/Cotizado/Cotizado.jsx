import styled from "@emotion/styled";

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  padding: 20px;
  width: 400px;
  max-width: 85vw;
  margin-top: 20px;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  gap: 10px;
`;

const Texto = styled.li`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 20px;
`;

const Span = styled.span`
  color: white;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 900;
`;

const Cotizado = ({ cotizacion }) => {
  console.log(cotizacion);
  return (
    <Contenedor>
      <Ul>
        <Texto>
          El precio actual es de: <Span>{cotizacion.PRICE}</Span>
        </Texto>
        <Texto>
          Precio mas alto del dia: <Span>{cotizacion.HIGHDAY}</Span>
        </Texto>
        <Texto>
          Precio mas bajo del dia: <Span>{cotizacion.LOWDAY}</Span>
        </Texto>
        <Texto>
          Ultima actualizacion: <Span>{cotizacion.LASTUPDATE}</Span>
        </Texto>
      </Ul>
    </Contenedor>
  );
};

export default Cotizado;
