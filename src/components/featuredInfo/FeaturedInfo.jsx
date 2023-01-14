import "./featuredInfo.css"
import { ArrowDownwardOutlined ,ArrowUpward} from "@mui/icons-material"
import { useEffect, useState } from "react"
import { userRequest } from "../../requestMethods"

export default function FeaturedInfo() {
  const [income, setIncome] =useState([])

  useEffect(()=>{
    const getIncome = async () =>{
      try {
        const res = await userRequest.get("orders/income")
        setIncome(res.data)
      } catch{}
    }
    getIncome()
  },[])

  console.log(income)
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Rendimento</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2425</span>
          <span className="featuredMoneyRate">-11.4<ArrowDownwardOutlined className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">Comparado ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Vendas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2425</span>
          <span className="featuredMoneyRate">-11.4<ArrowDownwardOutlined className="featuredIcon negative"/></span>
        </div>
        <span className="featuredSub">Comparado ao mês passado</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Despesa</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">R$2425</span>
          <span className="featuredMoneyRate">+11.4<ArrowUpward className="featuredIcon"/></span>
        </div>
        <span className="featuredSub">Comparado ao mês passado</span>
      </div>
    </div>
  )
}
