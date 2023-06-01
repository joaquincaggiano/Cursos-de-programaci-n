import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

export const useCalculadora = () => {
  const [numberCalc, setNumberCalc] = useState('0');
  const [numberBeforeCalc, setNumberBeforeCalc] = useState('0');

  const lastOperation = useRef<Operadores>();

  const cleanCalc = () => {
    setNumberCalc('0');
    setNumberBeforeCalc('0');
  };

  const madeANumber = (textNumber: string) => {
    // No aceptar doble punto
    if (numberCalc.includes('.') && textNumber === '.') return;

    if (numberCalc.startsWith('0') || numberCalc.startsWith('-0')) {
      // Punto decimal
      if (textNumber === '.') {
        setNumberCalc(numberCalc + textNumber);

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && numberCalc.includes('.')) {
        setNumberCalc(numberCalc + textNumber);

        // Evaluar si es diferente de 0 y no tiene un punto
      } else if (textNumber !== '0' && !numberCalc.includes('.')) {
        setNumberCalc(textNumber);

        // Evitar 000.0
      } else if (textNumber === '0' && !numberCalc.includes('.')) {
        setNumberCalc(numberCalc);
      } else {
        setNumberCalc(numberCalc + textNumber);
      }
    } else {
      setNumberCalc(numberCalc + textNumber);
    }
  };

  const positiveNegative = () => {
    if (numberCalc.includes('-')) {
      setNumberCalc(numberCalc.replace('-', ''));
    } else {
      setNumberCalc('-' + numberCalc);
    }
  };

  const btnDeleteLastNumber = () => {
    let negative = '';
    let numberTemp = numberCalc;

    if (numberCalc.includes('-')) {
      negative = '-';
      numberTemp = numberCalc.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumberCalc(negative + numberTemp.slice(0, -1));
    } else {
      setNumberCalc('0');
    }
  };

  const changeNumberForBeforeNumber = () => {
    if (numberCalc.endsWith('.')) {
      setNumberBeforeCalc(numberCalc.slice(0, -1));
    } else {
      setNumberBeforeCalc(numberCalc);
    }
    setNumberCalc('0');
  };

  const btnDivide = () => {
    changeNumberForBeforeNumber();
    lastOperation.current = Operadores.dividir;
  };

  const btnMultiply = () => {
    changeNumberForBeforeNumber();
    lastOperation.current = Operadores.multiplicar;
  };

  const btnSubtract = () => {
    changeNumberForBeforeNumber();
    lastOperation.current = Operadores.restar;
  };

  const btnAdd = () => {
    changeNumberForBeforeNumber();
    lastOperation.current = Operadores.sumar;
  };

  const calculate = () => {
    const num1 = Number(numberCalc);
    const num2 = Number(numberBeforeCalc);

    switch (lastOperation.current) {
      case Operadores.sumar:
        setNumberCalc(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumberCalc(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumberCalc(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumberCalc(`${num2 / num1}`);
        break;
    }

    setNumberBeforeCalc('0');
  };

  return {
    numberCalc,
    numberBeforeCalc,
    cleanCalc,
    madeANumber,
    positiveNegative,
    btnDeleteLastNumber,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    calculate,
  };
};
