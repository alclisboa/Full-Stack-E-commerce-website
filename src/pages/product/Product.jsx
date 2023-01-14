import { Link, useLocation } from "react-router-dom"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./product.css"
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import {Publish} from "@mui/icons-material"
import { useSelector } from "react-redux"

export default function Product() {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]

    const product = useSelector((state) => state.product.products.find((product) => product._id === productId))

    return (
        <div>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="product">
                    <div className="productTitleContainer">
                        <h1 className="productTitle">Produto</h1>
                        <Link to="/newproduct">
                        <button className="productAddButton">Criar</button>
                        </Link>
                    </div>
                    <div className="productTop">
                        <div className="productTopLeft">
                            <Chart data={productData} dataKey="Vendas" grid title="Performance de vendas"/>
                        </div>
                        <div className="productTopRight">
                            <div className="productInfoTop">
                            <img src={product.img} alt="" className="productInfoImg" />
                            <span className="productName">{product.title}</span>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Id:</span>
                                    <span className="productInfoValue">{product._id}</span>
                                </div>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Vendas:</span>
                                    <span className="productInfoValue">18978.87</span>
                                </div>
                            </div>
                            <div className="productInfoBottom">
                                <div className="productInfoItem">
                                    <span className="productInfoKey">Em estoque</span>
                                    <span className="productInfoValue">{product.inStock}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productBottom">
                    <form className="productForm">
                        <div className="productFormLeft">
                            <label>Nome do Produto</label>
                            <input type="text" placeholder={product.title}/>
                            <label>Descrição do Produto</label>
                            <input type="text" placeholder={product.desc}/>
                            <label>Preço</label>
                            <input type="text" placeholder={product.price}/>
                            <label>Em Estoque</label>
                            <select name="inStock" id="idStock">
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                        <div className="productFormRight">
                                <div className="productUpload">
                                    <img src={product.img} alt="" className="productUploadImg" />
                                    <label for="file">
                                        <Publish/>
                                    </label>
                                    <input type="file" id="file" style={{display:"none"}}/>
                                </div>
                                <button className="productButton">Atualizar</button>
                        </div>                    
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
