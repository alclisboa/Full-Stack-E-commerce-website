import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutlined} from "@mui/icons-material"
import {userRows} from "../../dummyData"
import {Link} from  "react-router-dom"
import { useState } from "react"

export default function UserList() {
  const [data,setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item)=>item.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 230, renderCell:(params)=>{
      return (
        <div className="userListUser">
          <img className="userListImg" src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 230 },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
    },
    {
      field: 'transaction',
      headerName: 'Transações',
      width: 140,
    },
    {
      field: 'action',
      headerName: 'Ação',
      width: 120,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/"+params.row.id}>
          <button className="userListEdit">Editar</button>
          </Link>
          <DeleteOutlined className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    },
  ];

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
        <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection/>
        </div>
      </div>
    </div>
  )
}
