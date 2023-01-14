import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PhoneIcon from '@mui/icons-material/Phone'
import PinterestIcon from '@mui/icons-material/Pinterest'
import RoomIcon from '@mui/icons-material/Room'
import TwitterIcon from '@mui/icons-material/Twitter'
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Logo = styled.h1`

`

const Desc = styled.p`
  margin: 20px 0px;
`

const SocialContainer = styled.div`
  display: flex;
`

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color : white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`

const Title = styled.h3`
  margin-bottom:30px;
`

const List = styled.ul`
  margin: 0;
  padding:0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;  
`

const Right = styled.div`
  flex: 1;
  padding: 20px; 
  ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`

const Payment = styled.img`
  width: 80%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ALCLISBOA.</Logo>
        <Desc>Quem disse que dinheiro não traz felicidade não sabia aonde ir às compras compre em ALCLISBOA.</Desc>
        <Title>REDES SOCIAS 📱</Title>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon color="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>

      </Left>
      <Center>
        <Title> LINKS ÚTEIS 😉 </Title>
        <List>
          <ListItem>Início</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Moda Masculina</ListItem>
          <ListItem>Moda Feminina</ListItem>
          <ListItem>Moda Infantil</ListItem>
          <ListItem>Acessórios</ListItem>
          <ListItem>Minha conta</ListItem>
          <ListItem>Rastreamento de pedidos</ListItem>
          <ListItem>Lista de desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title> CONTATO ☎️ </Title>
        <ContactItem >
          <RoomIcon style={{ marginRight: "10px" }} />Brasília, DF, Brasil
        </ContactItem>

        <ContactItem>
          <PhoneIcon style={{ marginRight: "10px" }} />+55 61 922xx-32xx
        </ContactItem>

        <ContactItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} />analuisacarneirolisboa@gmail.com
        </ContactItem>

        <Payment src="https://cdn.discordapp.com/attachments/919669383834525757/1058172030362591342/image.png" />
      </Right>
    </Container >
  )
}

export default Footer
