import React from 'react'
import styled from 'styled-components'
import {FiMail,FiMapPin} from 'react-icons/fi'
import {AiOutlinePhone} from 'react-icons/ai'
import { mobile,medium } from '../../responsive'
import {
    AiOutlineFacebook,
    AiFillTwitterCircle,
    AiOutlineInstagram,
    AiOutlineLinkedin} 
from 'react-icons/ai'

const FooterContainer = styled.div`
    display: flex;
    ${mobile({flexDirection: 'column'})};
    ${medium({flexDirection: 'column'})};


`
const LeftSide = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    padding:20px;
    ${medium({padding: '10px'})};

`
const Center = styled.div`
    flex:1;
    padding:20;
    font-family: var(--font-base);
    color: var(--color-black);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: 16px;
    ${mobile({display: 'none'})};
    ${medium({display: 'none'})};

    

`
const Title = styled.h3`
    margin-bottom:30px;

`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const List = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;
`

const RightSide = styled.div`
    flex:1;
    padding:20;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    width:100%;

`
const SocialIcon = styled.div`
    color: var(--color-golden);
    width:50px;
    height:50px;
    border-radius:50%;
    font-size:2rem;
    cursor:pointer;
    display:flex;
    align-items:center;
    justify-content:center;
    background:rgba(0,0,0,0.05);
`
const SocialContainer = styled.div`
    display:flex;
`
const Desc = styled.p`
    font-family: var(--font-alt);
    color: var(--color-black);
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-size: 13px;
    margin:20px 0px;
`
const Logo = styled.h1`
    font-family: var(--font-base);
    color: var(--color-golden);
    font-size: 64px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
`

const Footer = () => {
  return (
    <FooterContainer>
        <LeftSide>
            <Logo>LUXURY</Logo>
            <Desc>
            Lorem, ipsum dolor sit amet 
            consectetur adipisicing elit.
             Nemo quos ut quaerat veritatis deleniti animi quia explicabo consequuntur dolorem ab!
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <AiOutlineFacebook/>
                </SocialIcon>
                <SocialIcon>
                    <AiFillTwitterCircle/>
                </SocialIcon>
                <SocialIcon>
                    <AiOutlineInstagram/>
                </SocialIcon>
                <SocialIcon>
                    <AiOutlineLinkedin/>
                </SocialIcon>
            </SocialContainer>

        </LeftSide>
        <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Conditions</ListItem>

                </List>
        </Center>

        <RightSide>
                <Title>Contact</Title>
                <ContactItem> <FiMapPin style={{marginRight:10}}/>
                    622 Dixie Path, Andalusia 98566
                </ContactItem>
                <ContactItem>
                    <AiOutlinePhone style={{marginRight:10}} />
                    +40 40 5783 774 09
                </ContactItem>
                <ContactItem>
                    <FiMail style={{marginRight:10}}/>
                    contact@luxuryforyou.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/paymnet.png"/>
        </RightSide>
    </FooterContainer>
  )
}

export default Footer
