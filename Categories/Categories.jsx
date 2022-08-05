import React from 'react'
import styled from 'styled-components'
import { categories } from '../../data'
import CategoryItem from '../CategoryItem/CategoryItem'
import {mobile} from '../../responsive'
const CatContainer = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({ padding: "0px", flexDirection: 'column' })};

`
const Categories = () => {
  return (
    <CatContainer>
        {categories.map(item => (
            <CategoryItem item={item} key={item.id}/>
        ))}
        {/* for each item am calling categoryitems */}
    </CatContainer>
  )
}

export default Categories
