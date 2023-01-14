import { useSelector } from 'react-redux'
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
    font-weight: normal
`

// const TitleLogo = styled.h1`
//     font-weight: 300;
//     text-align: center;
//     font-weight: 500
// `

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
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
   width: 290px;
   height: 380px;
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
    flex: 2;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
`

const SummaryTitle = styled.h1`
    font-weight: 200;
    font-size: 30px;
    font-weight: normal
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

const Success = () => {
    const cart = useSelector(state => state.cart)
    return (
        <Container>
               {/* <TitleLogo>ALCLISBOA.</TitleLogo> */}
               <Navbar/>
            <Announcement />
            <Wrapper>
                <Title>Transação Realizada Com Sucesso</Title>
                <Top >
                    Esperamos que ame o que pediu! Mas se você não estiver 100% satisfeito, tornamos o processo de devolução muito fácil. 😉
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
                                        <ProductAmount>{product.quantity}</ProductAmount><ProductPrice>R$ {product.price * product.quantity}</ProductPrice>
                                    </Details>
                                </ProductDatail>
                            </Product>))}
                        <Hr />
                    </Info>
                    <Hr />
                    <Summary>
                        <SummaryTitle>Resumo do Pedido</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> R$ {cart.total+30.00}</SummaryItemPrice>
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
                        <SummaryItem type="total">
                            <SummaryItemText >Método de pagamento</SummaryItemText>
                            <SummaryItemPrice> PIX </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Previsão de Entrega </SummaryItemText>
                            <SummaryItemPrice> 12/XX </SummaryItemPrice>
                        </SummaryItem>
                        <br></br>
                        <SummaryTitle>
                            Endereço de Entrega Selecionado
                        </SummaryTitle>
                        <br></br>
                        <SummaryItemText >
                            Titular do pedido:
                        </SummaryItemText>
                        <SummaryItemText >
                            XXXXXXXXXX
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Logradouro:
                        </SummaryItemText>
                        <SummaryItemText >
                            Quadra XX Conjunto YY
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Casa/Número:
                        </SummaryItemText>
                        <SummaryItemText >
                            XY
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Ponto de referência:
                        </SummaryItemText>
                        <SummaryItemText >
                            XXXXXXXX
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Cidade:
                        </SummaryItemText>
                        <SummaryItemText >
                            XXXYX
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Estado:
                        </SummaryItemText>
                        <SummaryItemText >
                            XX
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            CEP:
                        </SummaryItemText>
                        <SummaryItemText >
                            XXXXX-XXX
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryItemText >
                            Método de entrega:
                        </SummaryItemText>
                        <SummaryItemText>
                            Sedex
                        </SummaryItemText>
                        <br></br>
                        <br></br>
                        <SummaryTitle>Precisa de Ajuda?</SummaryTitle>
                        <SummaryItem>
                            Fale conosco para resolver questões
                            e solucionar dúvidas.
                            <br></br>
                            <br></br>
                            Atendimento ao Consumidor:
                            <br></br>
                            <br></br>
                            XXXX 5X1 41XX
                            <br></br>
                            <br></br>
                            Seg - Sex: das 9h às 18h
                        </SummaryItem>
                    </Summary>
                </Bottom>
                <Hr />
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Success
