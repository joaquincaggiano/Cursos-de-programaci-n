import { useState } from "react";

export const useCounter = (inicial: number = 10) => {
  const [value, setValue] = useState(inicial);

  const acumular = (numero: number) => {
    setValue(value + numero);
  };

  return {
    value,
    acumular,
  };
};
