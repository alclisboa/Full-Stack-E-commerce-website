import "./app.css"
import Home from "./pages/home/Home";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import UserList from "./pages/userList/UserList";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";


function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin)
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/login" element={<Login />} />
        {admin && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/newproduct" element={<NewProduct />} />        
          </>
        )}
      </Routes>

    </BrowserRouter>
  )
}

export default App;

