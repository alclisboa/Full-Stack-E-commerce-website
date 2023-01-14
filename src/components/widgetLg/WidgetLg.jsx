import { useEffect, useState } from "react"
import "./widgetLg.css"
import { userRequest } from "../../requestMethods"
import {format} from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([])
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch {

      }
    }
    getOrders()
  }, [])
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transações mais recentes</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Data</th>
          <th className="widgetLgTh">Montante</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map((order)  => (
        <tr className="widgetLgTr" key={order._id}>
          <td className="widgetLgUser">
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">R${order.amount}</td>
          <td className="widgetLgStatus"><Button type={order.status} /></td>
        </tr>
            ))}
      </table>
    </div>
  )
}

       

