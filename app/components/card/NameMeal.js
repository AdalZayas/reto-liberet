import React from 'react'
import styled from 'styled-components'

const View = styled.View`
  background: rgba(0, 0, 0, 0.4);
  padding: 6px;
  width: 100%;
  
`

const Text = styled.Text`
  font-weight: bold;
  color: ${props => props.color || '#000'};
  font-family: 'RegencieLight';
  font-size: 12px;
`




const NameMeal = ({ category, name }) => {
  return (
    <View >
      <Text color='#fff'>{category}</Text>
      <Text numberOfLines={1} color='#FDC963'>{name}</Text>
    </View>
  )
}

export default NameMeal
