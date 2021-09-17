import React, { useState } from 'react'
import { Modal } from "react-native";
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.TouchableWithoutFeedback``
const Button = styled.TouchableWithoutFeedback``
const ExternalView = styled.View`
background-color: 'rgba(0,0,0,0.5)';
height: 100%;`
const ModalView = styled.View`
  background-color: #fff;
  color: #fff;
  elevation: 80;
  margin-top: 180px;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  padding: 20px;
`
const ChipV = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
justify-content:space-between;
background-color: #fff;
border-radius: 15px;
elevation: 5;
padding: 7px;
margin: 5px;
`
const TextChip = styled.Text`
  font-family: 'RegencieLight';
  font-size: 10px;

`
const ModalText = styled.Text`
  border-radius: 5px;
  font-weight: bold;
  font-family: 'RegencieLight';
  font-size: 15px;
  color: #000;
  background: #fff;
  elevation: 5;
  padding: 5px;
  margin: 3px;
`
const Text = styled.Text`
  font-family: 'RegencieLight';
  font-size: 10px;
  margin-left: 12px;
`
const View = styled.View`
  flex-direction: row;
  align-items: center;

`

const ChipTime = ({ icon }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [hora, setHora] = useState('11:00 am-12:00 am');
  return (
    <>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <ExternalView>

          <ModalView>
            <View>
              <Icon name={icon} size={25} color="#FDC963" />
              <Text>Elige un Horario de entrega</Text>
            </View>

            <Button onPress={() => {
              setHora('11:00am-12:00 am')
              setModalVisible(!modalVisible)

            }}>
              <ModalText>11:00am - 12:00 am</ModalText>
            </Button>
            <Button onPress={() => {
              setHora('1:00pm - 2:00pm')
              setModalVisible(!modalVisible)

            }}>
              <ModalText>1:00pm - 2:00pm</ModalText>
            </Button>
            <Button onPress={() => {
              setHora('2:00pm - 3:00pm')
              setModalVisible(!modalVisible)

            }}>
              <ModalText>2:00pm - 3:00pm</ModalText>
            </Button>
          </ModalView>
        </ExternalView>
      </Modal>

      <Container onPress={() => { setModalVisible(true) }}>
        <ChipV>
          <Icon name={icon} size={20} color="#FDC963" />
          <TextChip>{hora}</TextChip>
        </ChipV>
      </Container>
    </>
  )
}

export default ChipTime
