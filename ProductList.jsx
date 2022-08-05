import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement/Announcement'
import Products from '../components/Products/Products'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Container = styled.div`


`
const FilterContainer =styled.div`
    display:flex;
    justify-content:space-between;

    `
const Title = styled.h1`
    margin:20px;
`
const Filter = styled.div`
    margin:20px;
`
const FilterText = styled.span`
    font-family: var(--font-alt);
    color: var(--color-black);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    margin-right:18px;
    
`
const Select = styled.select`
    font-family: var(--font-alt);
    border:1px solid var(--color-golden);
    padding:5px;
    margin-right:8px;

`
const Option = styled.option`
    font-family: var(--font-alt);

`
const ProductList = () => {
  return (
    <Container>
          <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
                <Option disabled selected>Color</Option>
                <Option>White</Option>
                <Option>Pink</Option>
                <Option>Blue</Option>
                <Option>Yellow</Option>
                <Option>Black</Option>
                <Option>Gray</Option>
                <Option>Green</Option>
                <Option>Red</Option>
                <Option>Purple</Option>
            </Select>
            <Select>
                <Option disabled selected>Size</Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>

            </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Poducts:</FilterText>
            <Select>
                <Option selected>Newest</Option>
                <Option>Price (asc)</Option>
                <Option>Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
    <Products/>
    <Newsletter/>
    <Footer/>
    </Container>
  )
}

export default ProductList
