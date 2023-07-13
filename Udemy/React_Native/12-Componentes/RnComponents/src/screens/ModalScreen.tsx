import React, {useState} from 'react';
import {View, Button, Modal, Text, StyleSheet} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';

export const ModalScreen = () => {
  const [isVisible, setisVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir Modal" onPress={() => setisVisible(true)} />

      <Modal
        animationType="fade" //como se abre el modal, puede ser 'slide' tambien
        visible={isVisible} //valor boolean que abre o cierra el modal
        transparent={true} //se ve lo del fondo cuando se abre el modal
      >
        <View style={modalStyles.modalContainer}>
          <View style={modalStyles.modalBoxStyle}>
            <Text style={modalStyles.modalTitle}>Titulo</Text>
            <Text style={modalStyles.modalBody}>Cuerpo</Text>
            <Button title="Cerrar" onPress={() => setisVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBoxStyle: {
    backgroundColor: 'white',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  modalBody: {
    fontSize: 16,
    marginBottom: 20,
  },
});
