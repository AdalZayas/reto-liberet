import React, { Children } from 'react'
import styled from 'styled-components'

const View = styled.View`
  flex: 1;
  height: auto;
  background-color: #fff;
  border-radius: 5px;
  elevation: 5;
  margin: 10px;
`

const Card = (props) => {
  return (
    <View>
      {props.children}
    </View>
  )
}

export default Card
