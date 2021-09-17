import React from 'react'
import styled from 'styled-components/native'


const View = styled.View`
  align-items: center;
`


const Text = styled.Text`
  font-size: 16px;
`
const DateCircle = styled.Text`
  background-color: ${props => props.background || '#f42'};
  border-radius: 50px;
  padding: 10px;
  justify-content: center;
  text-align: center;
`
const Weekdays = ({ index, day, week, focused }) => {
  return (
    <View key={index}>
      <Text>{day}</Text>
      <DateCircle background={focused.focused && focused.index === index ? '#FDC963' : 'rgba(0, 0, 0, 0)'} >
        {week[index]}
      </DateCircle>
    </View>
  )
}

export default Weekdays
