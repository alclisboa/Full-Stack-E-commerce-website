import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"
import WidgetLg from "../../components/widgetLg/WidgetLg"
import WidgetSm from "../../components/widgetSm/WidgetSm"
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import { useEffect, useMemo, useState } from "react"
import { userRequest } from "../../requestMethods"

export default function Home() {
  const [userStats, setUsersStats] = useState([])

  const MONTHS = useMemo(
    () => ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez',],[])

    useEffect(()=>{
        const getStats = async ()=>{
          try {
            const res = await userRequest.get("/users/status")
            res.data.map(item=>
              setUsersStats(prev=>[...prev,{name:MONTHS[item._id-1], "Usuários ativos": item.total},])
            )
          } catch {}
        }
        getStats()
    },[MONTHS])

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart data={userStats} title="Análise de usuários" grid dataKey="Usuários ativos" />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </div>
  )
}
