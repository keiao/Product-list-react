import { useState } from "react";

const contador = () => {
  const [contador, setContador] = useState(0)

  const sumar = () => {
    setContador(contador + 1 );
  };

  const restar = () => {
    if(contador > 0)
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>{contador}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
    </div>
  );
};

onclick;

export default contador;
