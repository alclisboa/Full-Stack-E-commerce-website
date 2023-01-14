import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { addProduct } from '../redux/cartRedux'
import { publicRequest } from "../requestMethods"
import { mobile } from "../responsive"
import { useDispatch } from 'react-redux'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`

const ImgContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 90%;
    height: 97vh;
    object-fit: cover;
    ${mobile({ height: "60vh" })}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
    font-weight: 200;
`
const Description = styled.p`
    margin: 20px 0px;
    text-align: justify;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilterColor = styled.div`
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 2px;
    cursor: pointer;
`

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}  
`

const AmountContainer = styled.div`
    display: flex;
    border: 1px solid teal;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;  
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 7px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    background-image: -webkit-linear-gradient(45deg, tel 50%, transparent 50%);
    background-image: linear-gradient(45deg, teal 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 300ms ease-in-out;

    &:hover{
        box-shadow: 0 0 10px  teal, 0 0 20px teal, 0 0 30px teal;
        background-position: 0;
        color: white;
    }

   &:hover:after {
        content: "🛒";
    }
`

const Product = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id)
                setProduct(res.data)
            } catch { }
        }
        getProduct()
    }, [id])

    const handleQuantity = (type) =>{
        if(type === "dec"){
            quantity>1 && setQuantity(quantity-1)
        }else{
            setQuantity(quantity+1) 
        }
    }

    const handleClick = () =>{
        dispatch(addProduct({ ...product, quantity, color, size}))
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.desc}</Description>
                    <Price>R$ {product.price}</Price>
                    <Description>Em até 3x sem juros</Description>
                    <FilterContainer>
                        <Filter>
                            {/* escolher a cor da roupa  */}
                            <FilterTitle>Cor</FilterTitle>
                            {product.color?.map((c) => (
                                <FilterColor key={c} color={c} onClick={()=>setColor(c)} />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Tamanho</FilterTitle>
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map((s)=>(
                                    <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon onClick={()=>handleQuantity("dec")}/>
                            <Amount>{quantity}</Amount>
                            <AddIcon  onClick={()=>handleQuantity("inc")} />
                        </AmountContainer>
                        <Button onClick={handleClick}>ADICIONE AO CARRINHO</Button>     
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
