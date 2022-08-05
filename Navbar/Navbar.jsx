import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { mobile } from '../../responsive'
import { medium } from '../../responsive'


const NavContainer = styled.div`
    background: var(--color-black);
    color:var(--color-white);
     height: 80px;
  text-align:center;
     
  ${mobile({ height: "60px" })};
  ${medium( { width: '100%'})}
`;

const NavWrap = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "0px 0px" })}
`;

const LeftSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const NavLanguage = styled.span`
  font-size: 14px;
  color:var(--color-white);
  cursor: pointer;
  ${mobile({ display: "none" })};
  ${medium( {display : 'none'})}
`;

const NavSearch = styled.div`
  border: 0.5px solid var(--color-golden);
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ marginLeft: "0px" })};
  ${medium( {marginLeft : '0px', padding: '3px'})}

`;

const NavInput = styled.input`
  border: none;
  background-color:var(--color-black);
  color: var(--color-white);
  ${mobile({ width: "50px" })};
  ${medium( {width: '50px'})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-family: var(--font-base);
  color: var(--color-golden);
  text-transform: capitalize;
  letter-spacing: 0.04rem;
  line-height:74.2px;
  cursor:pointer;
  ${mobile({ fontSize: "24px" })};

`;
const RightSide = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const NavLinks = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <NavContainer>
        <NavWrap>
            <LeftSide>
            <NavLanguage>EN</NavLanguage>
                <NavSearch>
                    <NavInput placeholder="Search"/>
                    <BsSearch style={{color:'var(--color-grey)', fontSize:'1rem'}}/>
                </NavSearch>
            </LeftSide>
            <Center><Logo to="/home">LUXURY.</Logo></Center>
            <RightSide>
                <NavLinks href="#register">REGISTER</NavLinks>
                <NavLinks>SIGN IN</NavLinks>
                <NavLinks>
                    <AiOutlineShoppingCart color='var(--color-golden)'/>
                </NavLinks>

            </RightSide>
        </NavWrap>
    </NavContainer>
  )
}

export default Navbar
