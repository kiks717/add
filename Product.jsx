import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import Announcement from '../components/Announcement/Announcement'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'
import {MdRemoveCircleOutline} from 'react-icons/md'
import {IoMdAddCircleOutline} from 'react-icons/io'

const Container = styled.div`

`
const  Wrapper = styled.div`
    padding:50px;
    display:flex;
`
const ImageContainer =styled.div`
    flex:1;
`
const Image=styled.img`
    width:100%;
    object-fit:cover;
`
const InfoContainer =styled.div`
    flex:1;
    padding:0px 50px;
`
const Title =styled.h1`
    font-family: var(--font-base);
    color: var(--color-golden);
    font-weight:300;
    font-size: 54px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
`

const Desc =styled.p`
    font-family: var(--font-alt);
    color: var(--color-black);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 15px;
    margin: 20px 0px;
`
const Price  =styled.span`
  font-family: var(--font-alt);
    font-size:38px;
    font-weight:300;
`
const Filter = styled.div`
    display:flex;
    align-items:center;

`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
    width:50%;
    margin: 30px 0px;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
    margin: 0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin-left:5px;
    padding:5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:50%;
`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-weight:700;
`
const Button = styled.button`
    background-color: var(--color-white);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 16px;
    padding: 1rem 1.5rem;
    border-radius: 3px;
    border: 2px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover{
      background-color: var(--color-golden);
       border: 1px solid var(--color-black);

    }
`
const Amount = styled.span`
    font-family: var(--font-alt);
    font-weight: 400;
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid var(--color-golden);
    align-items:center;
    justify-content:center;
    margin: 0px 5px;
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
        <ImageContainer>
            <Image src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"/>
        </ImageContainer>
        <InfoContainer>
            <Title>Crinoline Dress</Title>
            <Desc>Lorem ipsum dolor sit amet consectetur, 
              adipisicing elit. Placeat sed ipsa saepe? 
              Eum voluptatem a nulla maxime, repellat optio ea 
              quaerat voluptatibus corrupti sed aspernatur esse 
              vero praesentium odio aliquid? Vitae fugit velit
               alias magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, soluta. Nemo, amet debitis in harum sunt adipisci distinctio quod explicabo.</Desc>
            <Price>129$</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color='pink'/>
                <FilterColor color='green'/>
                <FilterColor color='gray'/>
              </Filter>

              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>

                </FilterSize>
              </Filter>
            </FilterContainer>

            <AddContainer>
                <AmountContainer>
                  <MdRemoveCircleOutline/>
                    <Amount>1</Amount>

                  <IoMdAddCircleOutline/>
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>

        </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product
