import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./newUser.css"

export default function NewUser() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className="newUserTitle">Novo Usuário</h1>
          <form className="newUserForm">
            <div className="newUserItem">
              <label>Username</label>
              <input type="text" placeholder="ana"/>
            </div>
            <div className="newUserItem">
              <label>Nome</label>
              <input type="text" placeholder="Ana Lisbôa"/>
            </div>
            <div className="newUserItem">
              <label>E-mail</label>
              <input type="email" placeholder="ana@gmail.com"/>
            </div>
            <div className="newUserItem">
              <label>Senha</label>
              <input type="password" placeholder="Ana Lisbôa"/>
            </div>
            <div className="newUserItem">
              <label>Número</label>
              <input type="text" placeholder="+55(61) 9XXX-XXXX"/>
            </div>
            <div className="newUserItem">
              <label>Endereço</label>
              <input type="text" placeholder="Brasília, DF, Brasil"/>
            </div>
            <div className="newUserItem">
              <label>Gênero</label>
              <div className="newUserGender">
              <input type="radio" name="Gênero sexual" id="male" value="male"/>
              <label for="male">Homem</label>
              <input type="radio" name="Gênero sexual" id="female" value="female"/>
              <label for="female">Mulher</label>
              <input type="radio" name="Gênero sexual" id="other" value="other"/>
              <label for="other">Outro</label>
              </div>
            </div>
            <div className="newUserItem">
            <label>Ativo</label>
            <select className="newUserSelect" name="active" id="active">
                <option value="yes">Sim</option>
                <option value="no">Não</option>
            </select>
            </div>
            <button className="newUserButton">Criar</button>
          </form>
        </div>
      </div>
    </div>
  )
}
