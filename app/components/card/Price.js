import React from 'react'
import styled from 'styled-components'
import Icon from 'react-native-vector-icons/Feather';

const View = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 6px;
  padding-right: 6px;
  `

const Text = styled.Text`
  font-weight: bold;
  color: ${props => props.color || '#000'};
  font-family: 'RegencieLight';
`

const Price = ({ price }) => {
  return (
    <View>
      <Icon name="clock" size={20} color="#FDC963" />
      <Text color='#000' style={{ padding: 6, }} >{`$${(parseInt(price) / 1000).toFixed(2)}`}</Text>
    </View>

  )
}

export default Price