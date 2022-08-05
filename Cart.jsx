import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import {MdAddShoppingCart} from 'react-icons/md'
import {MdOutlineRemoveCircleOutline} from 'react-icons/md'
const Container = styled.div`
`
const Wrapper = styled.div`
    padding:20px;
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const TopButton= styled.button`
    background:var(--color-black);
    color: var(--color-white);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 1px;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "var(--color-golden)" : "var(--color-black)"};
    color : ${props => props.type === "filled" && "var(--color-white)"};
    outline: none;
    cursor: pointer;`
const TopText = styled.div`
`
const Text = styled.span`
    text-decoration:underline; 
    cursor:poiner;
    margin:0 10px;
`
const BottomButton = styled.button`
    background-color: var(--color-white);
    color: var(--color-golden);
    font-family: var(--font-base);
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 16px;
    padding: 15px 20px;
    border-radius: 1px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    &:hover{
        background-color: var(--color-golden);
        color: var(--color-white);
        transition: all 0.5s ease;
    }
`
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`
const Info = styled.div`
    flex:3;
    `


const Product = styled.div`
    display:flex;
    justify-content: space-between;

`
const ProductDetail = styled.div`
    flex:2;
    display:flex;
`

const Image = styled.img`
    width:200px;
`
const ProductName = styled.span`
    font-weight:400;
    font-family:var(--font-alt);
`
const ProductColor = styled.span`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color:${props => props.color};
`
const ProductSize = styled.span`

`
const ProductId = styled.span`

`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;



`
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    font-size:20px;
`

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-size:30px;
    margin-bottom:20px;
`
const ProductPrice = styled.span`
    font-size:24px;
    font-weight:200;

`
const ProductAmount = styled.div`
    margin:5px;
`
const Hr = styled.hr`
    background:var(--color-golden);
    height:2px;
    border:none;
`
const Summary = styled.div`
    flex:1;
    border:1px solid var(--color-golden);
    border-radius:20px;
    padding:20px;
    margin-top:20px;
    height:50vh;
`
const SummaryTitle = styled.h2`
    font-weight:400;

`
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props => props.type === "total" && "700"}
    font-size:${props => props.type === "total" && "20px"}`;

const SummaryItemPrice = styled.span`
    font-family:var(--font-alt);
`
const SummaryItemText = styled.span`
    font-family:var(--font-alt);
`


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton type="filled">BUY</TopButton>
                <TopText>
                    <Text>
                        Shopping Bag(2)
                    </Text>
                    <Text>Your Wishlist</Text>
                </TopText>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>

            <Bottom>
                <Info>
                    {/* proizvod i informacije */}
                    <Product>
                    <ProductDetail>

                        <Image src="https://www.prada.com/content/dam/pradanux_products/U/UCS/UCS319/1YOTF010O/UCS319_1YOT_F010O_S_182_SLF.png"/>
                        <Details>
                            <ProductName> 
                                <b>Product: </b> PRADA Shirt
                                 </ProductName>
                            <ProductId>
                                <b>ID:   </b> 64629829b
                            </ProductId>
                            <ProductColor color="red" />
                            <ProductSize>
                                <b>Size:  </b> M
                            </ProductSize>
                        </Details>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <MdAddShoppingCart/>
                                <ProductAmount>2</ProductAmount>
                                <MdOutlineRemoveCircleOutline/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 124</ProductPrice>
                        </PriceDetail>
                    </ProductDetail>
                    </Product>
                        <Hr/>
                    <Product>
                    <ProductDetail>

                        <Image src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png"/>
                        <Details>
                            <ProductName> 
                                <b>Product: </b> SUNNY Dress
                                 </ProductName>
                            <ProductId>
                                <b>ID:   </b> 6fud6s7fj
                            </ProductId>
                            <ProductColor color="gold" />
                            <ProductSize>
                                <b>Size:  </b> S
                            </ProductSize>
                        </Details>

                        <PriceDetail>
                            <ProductAmountContainer>
                                <MdAddShoppingCart/>
                                <ProductAmount>2</ProductAmount>
                                <MdOutlineRemoveCircleOutline/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 57</ProductPrice>
                        </PriceDetail>
                    </ProductDetail>
                    </Product>
                </Info>
                <Summary>
                    {/* ukupan iznos  */}
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 181</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.9</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem  type="total">
                        <SummaryItemText>TOTAL</SummaryItemText>
                        <SummaryItemPrice >$ 181</SummaryItemPrice>
                    </SummaryItem>
                    <BottomButton>CHECKOUT NOW</BottomButton>
                </Summary>
            </Bottom>

        </Wrapper>
        <Footer/>
   </Container>
  )
}

export default Cart
