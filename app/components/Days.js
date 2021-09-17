import React, { useState } from 'react'

import styled from 'styled-components/native'
import Weekdays from './days/Weekdays'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px;
`
const View = styled.View``

const DatesContainer = styled.TouchableWithoutFeedback`
`

const Days = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let curr = new Date
  var week = []
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i
    let day = new Date(curr.setDate(first))
    week.push(day.getDate())
  }
  const [focused, setFocused] = useState({
    focused: false,

  })
  return (
    <Container>
      {days.map((day, index) => {
        return (
          <DatesContainer key={index} r onPress={() => setFocused({
            'index': index,
            focused: true
          })}>
            <View >
              <Weekdays index={index} day={day} week={week} focused={focused} />
            </View>
          </DatesContainer>
        )
      })}
    </Container >

  )
}

export default Days
