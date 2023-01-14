import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./user.css"
import { PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocationSearching, Publish } from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function User() {
    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="user">
                    <div className="userTitleContainer">
                        <h1 className="userTitle">Editar usuário</h1>
                        <Link to="/newUser">
                            <button className="userAddButton">Criar</button>
                        </Link>
                    </div>
                    <div className="userContainer">
                        <div className="userShow">
                            <div className="userShowTop">
                                <img src="https://i.pinimg.com/564x/ec/8c/c9/ec8cc99040ffab5126a0bdfe5e4ac6a6.jpg" alt="" className="userShowImg" />
                                <div className="userShowTopTitle">
                                    <span className="userShowUsername">Ana Lisbôa</span>
                                    <span className="userShowUserTitle">Software Engineer</span>
                                </div>
                            </div>
                            <div className="userShowBottom">
                                <span className="userShowTitle">Detalhes da conta</span>
                                <div className="userShowInfo">
                                    <PermIdentity className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        annalisboa
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <CalendarToday className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        15/01/1769
                                    </span>
                                </div>
                                <span className="userShowTitle">Detalhes de contato</span>
                                <div className="userShowInfo">
                                    <PhoneAndroid className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        +55 (61) 9XXXX-XXXX
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <MailOutline className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        ana@gmail.com
                                    </span>
                                </div>
                                <div className="userShowInfo">
                                    <LocationSearching className="userShowIcon" />
                                    <span className="userShowInfoTitle">
                                        Brasília, DF, Brasil
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="userUpdate">
                            <span className="userUpdateTitle">Editar</span>
                            <form className="userUpdateForm">
                                <div className="userUpdateLeft">
                                    <div className="userUpdateItem">
                                        <label>Username: </label>
                                        <input type="text" placeholder="annalisboa" className="userUpdateInput" />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Nome: </label>
                                        <input type="text" placeholder="Ana Lisbôa" className="userUpdateInput" />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Número: </label>
                                        <input type="text" placeholder="+55 (61) 9XXXX-XXXX" className="userUpdateInput" />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>E-mail: </label>
                                        <input type="text" placeholder="ana@gmail.com" className="userUpdateInput" />
                                    </div>
                                    <div className="userUpdateItem">
                                        <label>Endereço: </label>
                                        <input type="text" placeholder=" Brasília, DF, Brasil" className="userUpdateInput" />
                                    </div>
                                </div>
                                <div className="userUpdateRight">
                                    <div className="userUpdateUpload">
                                        <img className="userUpdateImg" src="https://i.pinimg.com/564x/ec/8c/c9/ec8cc99040ffab5126a0bdfe5e4ac6a6.jpg" alt="" />
                                        <label htmlFor="file">
                                            <Publish className="userUpdateIcon" />
                                        </label>
                                        <input type="file" id="file" style={{ display: "none" }} />
                                    </div>
                                    <button className="userUpdateButton">Atualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
