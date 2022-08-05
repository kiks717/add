import React from 'react'
import styled from 'styled-components'
const RegisterContainer = styled.div`
    width:100vw;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)),
     url("https://images.pexels.com/photos/999267/pexels-photo-999267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") 
     center;
     background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    `

const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:var(--color-white);
    border: 1px solid var(--color-golden);

`
const Input = styled.input`
    flex:1;
    min-width:45%;
    margin:20px 10px 0px 0px;
    padding:10px;
`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:30px;
    font-weight:400;
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
    margin-left:10px;
`
const Agreement = styled.span`
    font-size:14px;
    margin:15px 0px;
    font-family: var(--font-alt);

`   

const Register = () => {
  return (
        <RegisterContainer>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input  placeholder="name"/>
                    <Input  placeholder="username"/>
                    <Input  placeholder="email"/>
                    <Input  placeholder="password"/>
                    <Input  placeholder="confirm password"/>
                    <Agreement>
                        By creating an account,
                         I consent to the processing of my
                          personal data in accordance with the  <br/>
                          <b>PRIVACY POLICE</b>.
                        <Button>CREATE</Button>
                    </Agreement>
                </Form>
            </Wrapper>
        </RegisterContainer>
  )
}

export default Register
