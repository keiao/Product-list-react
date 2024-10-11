/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import "./Contador.scss";

const contador = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return (
    <div className="contador-main">
      <button className="botones" onClick={restar}>
        <span className="material-icons">remove</span>
      </button>
      <h2 className="contador">{contador}</h2>
      <button className="botones" onClick={sumar}>
        <span className="material-icons">add</span>
      </button>
    </div>
  );
};

onclick;

export default contador;
