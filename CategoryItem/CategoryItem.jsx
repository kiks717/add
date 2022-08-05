import React from 'react'
import styled from 'styled-components'
import { mobile, medium,iphoneXR } from '../../responsive'

const ItemContainer = styled.div`
  flex:1;
  margin:3px;
  height:70vh;
  position:relative;


`
const Image = styled.img`
  width:100%;
  height:100%;
  object-fit:cover;
  border:1px solid var(--color-golden);
  ${mobile({height: '30vh'})};
  ${medium({height: '40vh'})};
  ${iphoneXR({height: '40vh'})};

`
const ItemInfo = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0;
  left:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`
const TitleInfo = styled.h1`
  color:var(--color-golden);
  margin-bottom:20px;

`
const CustomButton =  styled.button`
  background-color: var(--color-crimson);
  color: var(--color-black);
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 28px;
  font-size: 16px;
  padding: 0.5rem 1.5rem;
  border-radius: 1px;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover{
    color:var(--color-black);
    background:var(--color-golden);
    transition:all 0.5s ease;
  }
`
const CategoryItem = ({ item }) => {
  return (
    <ItemContainer>
      <Image src={item.img}/>
      <ItemInfo >
        <TitleInfo>{item.title}</TitleInfo>
        <CustomButton>SHOP NOW</CustomButton>
      </ItemInfo>
    </ItemContainer>
  )
}

export default CategoryItem
