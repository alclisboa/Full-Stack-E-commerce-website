import Announcement from '../components/Announcement'
import Navbar from "../components/Navbar"
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import styled from "styled-components"
import { mobile } from '../responsive'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div`

`
// const Title = styled.h1`
//   margin: 20px;
//   text-transform: uppercase
// `

// const Image = styled.img`
//     width: 100%;
//     height: 65vh;
//     overflow: hidden; 
//     // object-fit: cover;
//     ${mobile({display: "none"})}
// `

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
   padding: 10px;
   margin-right: 20px;
   ${mobile({ margin: "10px 0px" })}
`
const Option = styled.option`
   
`

const ProductList = () => {
    const location = useLocation()
    const cat = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (
        <Container>
            <Navbar />
            <Announcement />
            {/* <Title>{cat}</Title> */}
            <FilterContainer>
                <Filter>
                    <FilterText>Filtrar Produtos: </FilterText>
                    <Select name="typecategories" onChange={handleFilters}>
                        <Option > CATEGORIAS </Option>
                        <Option>Bermudas</Option>
                        <Option>Blazeres</Option>
                        <Option>Blusas</Option>
                        <Option>Blusões</Option>
                        <Option>Calças</Option>
                        <Option>Camisas</Option>
                        <Option>Casacos</Option>
                        <Option>Jaquetas</Option>
                        <Option>Regatas</Option>
                        <Option>Saias</Option>
                        <Option>Shorts</Option>
                        <Option>Vestidos</Option>
                    </Select>
                    <Select name="color" onChange={handleFilters}>
                        <Option > COR </Option>
                        <Option>Multicolorido</Option>
                        <Option>Branco</Option>
                        <Option>Cinza</Option>
                        <Option>Preto</Option>
                        <Option>Azul</Option>
                        <Option>Roxo</Option>
                        <Option>Rosa</Option>
                        <Option>Vermelho</Option>
                        <Option>Amarelo</Option>
                        <Option>Laranja</Option>
                        <Option>Verde</Option>
                        <Option>Marrom</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option>TAMANHO</Option>
                        <Option>PP</Option>
                        <Option>P</Option>
                        <Option>M</Option>
                        <Option>G</Option>
                        <Option>GG</Option>
                        <Option>XGG</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar por:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option>ORDENAR</Option>
                        <Option value="asc">Maior Preço</Option>
                        <Option value="desc">Menor Preço</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
