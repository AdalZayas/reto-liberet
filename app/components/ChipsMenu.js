import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import Chip from './chips/ChipTime'
import ChipCategory from './chips/ChipCategory'
import ChipAlert from './chips/ChipAlert'

const View = styled.View`
  flex-direction: row;
  background: #E4E4E4;
  padding-left: 10px;
  padding-right: 10px;
`

const ChipsMenu = () => {
  return (
    <View>
      <Chip icon='clock-outline' />
      <ChipCategory icon='silverware-fork-knife' />
      <ChipAlert icon='plus-one' />
    </View>
  )
}

export default ChipsMenu
