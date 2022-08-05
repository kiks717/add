import React from 'react'
import styled from 'styled-components'

const LoginContainer = styled.div`
    font-family: var(--font-alt);
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80") 
     center;
     background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0;
    padding:0;
    `

const Wrapper = styled.div`
    width:35%;
    padding:20px;
    background-color:var(--color-white);
    border: 1px solid var(--color-golden);
`
const Input = styled.input`
    flex:1;
    min-width:45%;
    margin:13px 5px;
    padding:10px;
`
const Form = styled.form`
    display:flex;
    flex-direction:column;
`
const Title = styled.h1`
    font-size:30px;
    font-weight:400;
` 
const Link = styled.a`
    margin:10px 0px;
    font-family: var(--font-alt);
    font-size:12px;
    font-weight:300;
    text-decoration:underline;
    cursor: pointer;

`
const Button = styled.button`
    background-color: var(--color-golden);
    color: var(--color-black);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 15px 20px;
    border-radius: 10px;
    border:none;
    outline: none;
    cursor: pointer;
    margin-bottom:10px;
`
const Login = () => {
  return (
    <LoginContainer>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input  placeholder="username"/>
                    <Input  placeholder="password"/>
                        <Button>LOG IN</Button>
                        <Link>YOU DON'T REMEMBER PASSWORD?</Link>
                        <Link>CREATE A NEW ACCOUNT</Link>
                </Form>
            </Wrapper>
    </LoginContainer>

  )
}

export default Login
