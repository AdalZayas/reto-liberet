import React, { useState, useEffect } from 'react'
import Card from './card/Card'
import NameMeal from './card/NameMeal'
import Price from './card/Price'
import styled from 'styled-components'

const Image = styled.ImageBackground`
  flex: 1;
  align-items: flex-end;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 125px;
  overflow: hidden;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`

const Tag = styled.Text`
  border-radius: 5px;
  font-weight: bold;
  color: #FDC963;
  font-family: 'RegencieLight';
  display: ${props => props.display || 'flex'};
  background: #fff;
  text-align: right;
  margin: 3px;
  padding: 6px;
  font-size: 10px;
`

const ItemCard = ({ id }) => {

  const apiUrl = 'https://www.themealdb.com/api/json/v1/1'

  const [meals, setMeal] = useState([])
  useEffect(async () => {
    fetch(`${apiUrl}/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => setMeal(data.meals))
  }, [])


  return (
    meals.map(meal => (
      <Card key={meal.idMeal}>
        <Image source={{ uri: meal.strMealThumb }}>
          {!meal.strTags ? <Tag display='none' /> : <Tag>{meal.strTags.split(',')[0]}</Tag>}
          <NameMeal category={meal.strArea} name={meal.strMeal} />
        </Image>
        <Price price={id} />
      </Card>
    ))
  )
}

export default ItemCard
