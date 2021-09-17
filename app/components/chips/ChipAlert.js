import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Container = styled.TouchableWithoutFeedback``

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
  font-size: 14px;
`

const ChipAlert = ({ icon }) => {
  return (
    <Container onPress={() => { alert('MAS PLATILLOS😀😀😀') }}>
      <ChipV>
        <Icon name={icon} size={20} color="#FDC963" />
        <TextChip>Platillos</TextChip>
      </ChipV>
    </Container>
  )
}

export default ChipAlert
