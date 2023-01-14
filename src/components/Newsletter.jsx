import SendIcon from '@mui/icons-material/Send'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
    height: 40vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
`

const Title = styled.h1`
    font-size:50px;
    margin-bottom: 10px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weigth: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center" })}
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display:flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    ${mobile({width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    cursor: pointer;
    background-color: teal;
    color: white;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>NOTÍCIAS</Title>
            <Desc>Cadastre-se para receber notícias sobre ALCLISBOA.</Desc>
            <InputContainer>
                <Input placeholder="DIGITE AQUI SEU EMAIL 👩🏽‍💻✉️" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
