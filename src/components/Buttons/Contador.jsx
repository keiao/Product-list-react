/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import "./Contador.scss";

const Contador = () => {
  const [contador, setContador] = useState(null);
  const [esContador, setEsContador] = useState(false);

  const iniciarContador = () => {
    setEsContador(true);
    setContador(1);
  };

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
    if (contador === 1) {
      setEsContador(false);
      setContador(null);
    }
  };

  return (
    <div className="contador-main">
      {!esContador ? (
        <button className="boton-agregar" onClick={iniciarContador}>
          <span className="material-icons">add_shopping_cart</span>
          <span>Add to Cart</span>
        </button>
      ) : (
        <div className="boton-contador">
          <button className="botones" onClick={restar}>
            <span className="material-icons">remove</span>
          </button>
          <h2 className="contador">{contador}</h2>
          <button className="botones" onClick={sumar}>
            <span className="material-icons">add</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Contador;
