import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'
import styled from 'styled-components'
import { mobile } from '../../responsive'
const NewsletterContainer = styled.div`
    height:60vh;
    background:var(--color-white);
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Title = styled.h1`
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    margin:20px;
`
const Desrciption = styled.div`
    font-family: var(--font-alt);
    color: var(--color-golden);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    ${mobile({textAlign: 'center'})}
`
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background:white;
    display:flex;
    justify-content:space-between;
    border:1px solid var(--color-golden);
    ${mobile({width: '80%'})}

    
`
const Input = styled.input`
    border:none;
    flex:8;
    font-family: var(--font-alt);
    color: var(--color-golden);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    padding-left:20px
`
const Button = styled.button`
    background-color: var(--color-golden);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 20px;
    padding: 0.5rem 1.5rem;
    border-radius: 1px;
    border: none;
    outline: none;
    cursor: pointer;
    flex:2;
`
const Newsletter = () => {
  return (
    <NewsletterContainer>
        <Title>Newsletter</Title>
        <Desrciption>Get timley updates from your favourite products.</Desrciption>
        <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <AiOutlineSend/>
            </Button>
        </InputContainer>
    </NewsletterContainer>
  )
}

export default Newsletter
