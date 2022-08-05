import React from 'react'
import styled from 'styled-components'
import {AiOutlineShoppingCart,AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
const ProductInfo = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;

    `

const ProductContainer = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:	#F5F5F5;
    position:relative;
    &:hover ${ProductInfo}{
        opacity:1;
        transition:all 0.3s ease;
        cursor:pointer;
        border:2px solid var(--color-golden);
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:50px;
    height:50px;
    border-radius:50%;
    background:	#F5F5F5;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    cursor:pointer;
    transition:all 0.5s ease;
     &:hover{
        background:	var(--color-golden);
        transform:scale(1.2);
        
    }
`
const Product = ({ item }) => {
  return (
    <ProductContainer>
        <Circle/>
        <Image src={item.img}/>
        <ProductInfo>
            <Icon>
                <AiOutlineShoppingCart/>
            </Icon>
            <Icon>
                <AiOutlineSearch/>
            </Icon>
            <Icon>
                <AiOutlineHeart/>
            </Icon>
        </ProductInfo>
    </ProductContainer>
  )
}

export default Product
