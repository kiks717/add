import React from 'react'
import styled from 'styled-components'
import {BsArrowRightCircle} from 'react-icons/bs'
import {BsArrowLeftCircle}  from 'react-icons/bs'
import { sliderItems } from '../../data'
import { mobile,medium } from '../../responsive'

const SlideContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    overflow:hidden;
    position:relative;
    ${mobile({display: 'none'})};
    ${medium({display: 'none'})};
`
const ArrowContainer = styled.div`
    height:50px;
    width:50px;
    font-size:3rem;
    color:var(--color-golden);
    display:flex;
    align-items:center;
    justify-content:center;
    margin:auto;
    cursor:pointer;
    tansition:var(--transition);
    opacity:0.5;

    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=> props.direction === 'left' && '10px'};
    right:${props=> props.direction === 'right' && '10px'};
    z-index:2;
    `
// pozicioniranje ako su arrows-absolute, roditelj je relative

const SlideWrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`
/*ako je translateX -100vw dobijam drugi slide, ako je 200vw dobijam treci slide  */
const SlideContent = styled.div`
    display:flex;
    align-items:center;
    width:100vw;
    height:100vh;
    background:${props => props.bg};


`
const SlideImageContanier = styled.div`
    flex:1;
    height:100%;
`
const Picture = styled.img`
    height:80%;
    border:1px solid var(--color-golden);

`
const SlideInfoImage = styled.div`
    flex:1;
    margin: 0 30px;

`
const SlideTitle = styled.h1`
        font-family: var(--font-base);
        color: var(--color-black);
        font-weight: 700;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        font-feature-settings: 'tnum' on, 'lnum' on;
        line-height: 29.9px;
        font-size: 23px;
`
const SlideDesc = styled.p`
        font-family: var(--font-alt);
        color: var(--color-black);
        font-weight: 500;
        letter-spacing: 0.04em;
        text-transform: capitalize;
        line-height: 28px;
        font-size: 16px;
        margin:50px 0;

`
const Button = styled.button`
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
`
const Slider = () => {
    const [slideIndex, setSlideIndex] =  React.useState(0)
    const handleClick = (direction) => {
        if(direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else {
            setSlideIndex(slideIndex > 2 ? slideIndex+1 : 0)
        }

    }
  return (
        <SlideContainer>

        <ArrowContainer direction='left' onClick={() => handleClick('right')}>
            <BsArrowLeftCircle/>
        </ArrowContainer>

        <SlideWrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
            <SlideContent bg={item.bg} key={item.id}>
            <SlideImageContanier>
                <Picture src={item.img}/>
                </SlideImageContanier>

                <SlideInfoImage>
                <SlideTitle>
                    {item.title}
                </SlideTitle>
                <SlideDesc>
                    {item.desc}
                </SlideDesc>
                <Button>Shop now</Button>
                </SlideInfoImage>
            </SlideContent>
            ))}

        </SlideWrapper>

        <ArrowContainer direction='right' onClick={() => handleClick('left')}>
            <BsArrowRightCircle/>
        </ArrowContainer>
    
        </SlideContainer>

  )
}

export default Slider
