import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./productList.css"
import { DataGrid } from '@mui/x-data-grid'
import {DeleteOutlined} from "@mui/icons-material"
import {Link} from  "react-router-dom"
import { useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"
import { deleteProduct, getProducts } from "../../redux/apiCalls"

export default function ProductList() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
      getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
      deleteProduct(id, dispatch)
    }

      const columns = [
        { field: '_id', headerName: 'ID', width: 200 },
        { field: 'product', headerName: 'Produto', width: 400, renderCell:(params)=>{
          return (
            <div className="productListItem">
              <img className="productListImg" src={params.row.img} alt=""/>
              {params.row.title}
            </div>
          )
        } },
        { field: 'inStock', headerName: 'Estoque', width: 100 },
        {
          field: 'price',
          headerName: 'Preço',
          width: 100,
        },
        {
          field: 'action',
          headerName: 'Ação',
          width: 120,
          renderCell:(params)=>{
            return(
              <>
              <Link to={"/product/" + params.row._id}>
              <button className="productListEdit">Editar</button>
              </Link>
              <DeleteOutlined className="productListDelete" onClick={() => handleDelete(params.row._id)}/>
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
                <div className="productList">
                <DataGrid rows={products} disableSelectionOnClick columns={columns} getRowId={(row) => row._id} pageSize={8}  checkboxSelection/>
                </div>
            </div>
        </div>
    )
}

  
    
  
     
     