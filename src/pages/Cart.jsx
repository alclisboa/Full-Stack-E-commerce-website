import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === "filled" && "none"};
    background-color: ${(props) => props.type === "filled" ? "black" : "transparent"};
    color: ${(props) => props.type === "filled" && "white"};
    ${mobile({ margin: "5px 5px" })}
`
const TopTexts = styled.div`
${mobile({ display: "none" })}
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`

const ProductDatail = styled.div`
   flex:2;
   display: flex;
`

const Image = styled.img`
   width: 200px;
   height: 280px;
   object-fit: cover;
`

const Details = styled.div`
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`

const ProductName = styled.span`
   
`

const ProductId = styled.span`
   
`

const ProductColor = styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props => props.color};
`

const ProductSize = styled.span`
   
`

const PriceDatails = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: "20px" })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 30px;
`

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
    
`

const SummaryItemPrice = styled.span`
    
`

const Button = styled.button`
   width: 100%;
   padding: 10px;
   background-color: black;
   color: white;
   font-weight: 600;
`


const Cart = () => {
    const cart = useSelector(state => state.cart)
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>MINHA SACOLA</Title>
                <Top>
                    <Link to="/products/feminino">
                        <TopButton >CONTINUE COMPRANDO</TopButton>
                    </Link>
                    <TopTexts>
                        <TopText>Bolsa de compras (2)</TopText>
                        <TopText>Sua lista de desejos (0)</TopText>
                    </TopTexts>
                    <Link to="/success">
                        <TopButton type="filled">FINALIZAR COMPRA</TopButton>
                    </Link>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <Product>
                                <ProductDatail>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Produto:</b>{product.title}</ProductName>
                                        <ProductId><b>ID:</b>{product._id}</ProductId>
                                        <ProductColor color={product.color} />
                                        <ProductSize><b>Tamanho:</b>{product.size}</ProductSize>
                                    </Details>
                                </ProductDatail>
                                <PriceDatails>
                                    <ProductAmountContainer>
                                        <AddIcon />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <RemoveIcon />
                                    </ProductAmountContainer>
                                    <ProductPrice>R$ {product.price * product.quantity}</ProductPrice>
                                </PriceDatails>
                            </Product>))}
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DA COMPRA</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> R$ {cart.total + 30.00}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Entrega</SummaryItemText>
                            <SummaryItemPrice> R$ 30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto de entrega</SummaryItemText>
                            <SummaryItemPrice> R$ - 30,00</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice> {cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <Link to="/success">
                            <Button>Compre Agora</Button>
                        </Link>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Cart
