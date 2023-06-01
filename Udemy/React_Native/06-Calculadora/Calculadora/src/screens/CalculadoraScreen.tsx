import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {BotonCalc} from '../components/BotonCalc';
import {useCalculadora} from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {
  const {
    numberBeforeCalc,
    numberCalc,
    cleanCalc,
    positiveNegative,
    btnDeleteLastNumber,
    btnDivide,
    madeANumber,
    btnMultiply,
    btnAdd,
    btnSubtract,
    calculate,
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numberBeforeCalc !== '0' && (
        <Text style={styles.resultadoPequeno}>{numberBeforeCalc}</Text>
      )}

      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>
        {numberCalc}
      </Text>

      <View style={styles.fila}>
        <BotonCalc texto="C" color="#9B9B9B" action={cleanCalc} />
        <BotonCalc texto="+/-" color="#9B9B9B" action={positiveNegative} />
        <BotonCalc texto="del" color="#9B9B9B" action={btnDeleteLastNumber} />
        <BotonCalc texto="/" color="#FF9427" action={btnDivide} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="7" action={madeANumber} />
        <BotonCalc texto="8" action={madeANumber} />
        <BotonCalc texto="9" action={madeANumber} />
        <BotonCalc texto="X" color="#FF9427" action={btnMultiply} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="4" action={madeANumber} />
        <BotonCalc texto="5" action={madeANumber} />
        <BotonCalc texto="6" action={madeANumber} />
        <BotonCalc texto="-" color="#FF9427" action={btnSubtract} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="1" action={madeANumber} />
        <BotonCalc texto="2" action={madeANumber} />
        <BotonCalc texto="3" action={madeANumber} />
        <BotonCalc texto="+" color="#FF9427" action={btnAdd} />
      </View>

      <View style={styles.fila}>
        <BotonCalc texto="0" action={madeANumber} ancho />
        <BotonCalc texto="." action={madeANumber} />
        <BotonCalc texto="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
