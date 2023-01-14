import { Badge } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import styled from 'styled-components'
import { mobile } from "../responsive"
import {useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Container = styled.div`
    height:60px;
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
// faz com que os lados sejam divididos igualmente
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    aling-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "15px" })}
`

const Rigth = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "11px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity =  useSelector(state=>state.cart.quantity)
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>BR</Language>
                    <SearchContainer>
                        <Input placeholder="Pesquisar" />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>
                        ALCLISBOA.
                    </Logo>
                </Center>
                <Rigth>
                    <MenuItem>REGISTRO</MenuItem>
                    <MenuItem>ENTRAR</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Rigth>
            </Wrapper>

        </Container>
    )
}

export default Navbar
