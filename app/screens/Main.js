import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FlatList } from 'react-native'
import ItemCard from '../components/ItemCard'
import Days from '../components/Days'
import ChipsMenu from '../components/ChipsMenu'


const SView = styled.SafeAreaView`
padding-left: 10px;
padding-right: 10px;
background: #E4E4E4;
flex: 1;
`

const Main = () => {
  const apiUrl = 'https://www.themealdb.com/api/json/v1/1'
  const [meals, setMeals] = useState([])
  useEffect(async () => {
    fetch(`${apiUrl}/filter.php?c=Beef`)
      .then(res => res.json())
      .then(data => setMeals(data.meals))
  }, [])

  const renderItem = ({ item }) => (
    <ItemCard id={item.idMeal} />
  );

  return (
    <>
      <Days />
      <ChipsMenu />
      <SView>
        <FlatList
          data={meals}
          renderItem={renderItem}
          keyExtractor={item => item.idMeal}
          numColumns={2}
        />
      </SView>
    </>

  )
}

export default Main
