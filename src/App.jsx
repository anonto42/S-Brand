import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import './App.css'
import Home from "./Pages/Home/Home"
import Cart from "./Pages/cart/Cart"
import Dashbord from "./Pages/Admin/Dashboard/Dashbord"
import NoPage from "./Pages/noPage/NoPage"
import MyState from "./Context/myState"
import AllProducts from "./Pages/AllProducts/AllProducts"
import Login from "./Pages/Registaion/Login"
import Signup from "./Pages/Registaion/Signup"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Children } from "react"
import AddProduct from "./Pages/Admin/pages/AddProduct"
import UpdateProduct from './Pages/Admin/pages/ UpdateProduct';
import ProductInfo from './Pages/productInfo/ProductInfo';


function App() {

  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/order" element={
            <ProtectedRoutes>
              <Order/>
            </ProtectedRoutes>
          } /> */}
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin>
              <Dashbord/>
            </ProtectedRoutesForAdmin>
          } />
          <Route path="allproducts" element={<AllProducts/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo/>} />
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin>
              <AddProduct/>
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin>
              <UpdateProduct/>
            </ProtectedRoutesForAdmin>
          } />
          <Route path="/*" element={<NoPage/>} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  )
}

export default App

// user

export const ProtectedRoutes = ({children}) => {
  const user = localStorage.getItem('user');
  if(user){
    return children
  }else{
    return window.location.href='/login'; 
  }
}

// admin

export const ProtectedRoutesForAdmin = ({children}) =>{
  const admin = JSON.parse(localStorage.getItem('user'));
  if(admin.user.email === 'anontom90@gmail.com'){
    return children;
  }else{
    return window.location.href = '/login'
  }
}