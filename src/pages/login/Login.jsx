import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../redux/apiCalls"

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "100vh",
            backgroundImage: "url(https://p7criativo.com.br/wp-content/uploads/2021/01/P7Criativo_bannersite_15-01.png)",
            backgroundSize: "cover"

        }}>
            <div style={{
                width: "15%",
                padding: "20px",
                backgroundColor: "white",
            }}>
                <input style={{
                    width: "87%",
                    padding: 10,
                    marginBottom: 20
                }}
                    type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}
                />

                <input style={{
                    width: "87%",
                    padding: 10,
                    marginBottom: 20
                }}
                    type="password" placeholder="senha" onChange={(e) => setPassword(e.target.value)}
                />

                <button style={{
                    width: "50%",
                    padding: 10,
                    border: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "teal",
                    color: "white",
                    fontWeight: 600,
                    cursor:"pointer"
                }}
                    onClick={handleClick}>Entrar</button>
            </div>
        </div>
    )
}

export default Login
