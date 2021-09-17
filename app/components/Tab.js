import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import styled from 'styled-components/native'

const Container = styled.TouchableWithoutFeedback`
`
const Background = styled.View`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 6px;
`

const Tab = (props) => {
  const { label, accessibilityState, onPress } = props
  console.log(props)
  const focused = accessibilityState.selected

  return (
    <Container onPress={() => (onPress())}>
      <Background focused={focused} label={label} >
        <Icon name={label} size={24} color={focused ? '#FCAB3F' : '#4D4D4D'} />
      </Background>
    </Container>
  )
}

export default Tab
