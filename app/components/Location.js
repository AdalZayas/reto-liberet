import React from 'react'
import { View } from 'react-native'
import IconFa from 'react-native-vector-icons/FontAwesome5'
import styled from 'styled-components/native'


const ViewLeft = styled.View`
  flex:1;
  flex-direction: row;
  align-items: center;
`

const Button = styled.TouchableWithoutFeedback`
`
const Text = styled.Text`
  margin-left: 10px;
  color: #4D4D4D;
  font-size: 14px;
  font-family: 'RegencieLight';
`

const Location = ({ onPress }) => {
  return (

    <ViewLeft>
      <Button onPress={() => alert('Seleccione Locacion')}>
        <IconFa style={{ marginLeft: 20, }} name="map-marker-alt" size={30} color="#F49897" />
      </Button>
      <Text> Select location... </Text>
    </ViewLeft>
  )
}

export default Location


