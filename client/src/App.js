
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_LOCAL_STORAGE } from "./actions/index";
import { Route } from 'react-router-dom';
import LandingPage from './components/landing/landing';
import Home from './components/home/home';
import Detail from './components/detail/detail';
// import SignUp from "./components/register/userRegister/signUp/SignUp";
// import Login from './components/register/userRegister/login/login';
import Dashboard from './components/register/userRegister/dashboard/dashboard';
import UpdateProfile from './components/register/userRegister/updateProfile/updateProfile';
import ForgotPassword from './components/register/userRegister/forgotPassword/forgotPassword';
import Vinos from './components/categories/vinos/vinos';
import Espumantes from './components/categories/espumantes/espumantes';
import Cervezas from "./components/categories/cervezas/cervezas";
import Whiskys from './components/categories/whiskys/whiskys';
import Varios from "./components/categories/varios/varios";
import { AuthProvider } from "../src/contexts/AuthContext";
import PrivateRouteUser from './components/register/userRegister/privateRouteUser/privateRouteUser';
import PrivateRouteAdmin from "./components/register/adminRegister/privateRouteAdmin/privateRouteAdmin";
import AdminComponent from './components/register/adminRegister/component/AdminComponent';
import Delivery from './components/register/userRegister/component/confirmDelivery';
import Cart from "./components/shoppingCart/Cart"
import About from './components/about/about'

import ShoppingCart from "./components/shoppingCart/ShoppingCart";


function App() {

  const dispatch = useDispatch()
  useEffect(() => {
  dispatch({type:GET_LOCAL_STORAGE})
  },[])
  return (
    <React.Fragment>
      <AuthProvider>
        <PrivateRouteUser component={Dashboard} exact path='/dashboard'/>
        <PrivateRouteUser component={UpdateProfile} path='/update-profile'/>
        <PrivateRouteUser component={Delivery} path='/delivery'/>
        {/* <PrivateRouteAdmin component={AdminComponent} path='/dashboard-admin'/> */}
        <Route component={AdminComponent} path='/dashboard-admin'/>
        {/* <Route component={GestionPedidos} exact path='/dashboard-admin/pedidos'/>
        <Route component={GestionProductos} exact path='/dashboard-admin/productos'/>
        <Route component={GestionUsuarios} exact path='/dashboard-admin/usuarios'/> */}
        <Route component={LandingPage} exact path='/'/>
        <Route component={ShoppingCart} exact path='/compras'/>
        <Route component={Cart} exact path='/order'/>
        <Route component={About} exact path='/about'/>
        <Route component={Home} exact path='/home'/>
        <Route component={Whiskys} exact path='/whiskys'/>
        <Route component={Varios} exact path='/varios'/>
        <Route component={Espumantes} exact path='/espumantes'/>
        <Route component={Cervezas} exact path='/cervezas'/>
        <Route component={Vinos} exact path='/vinos'/>
        {/* <Route component={SignUp} exact path='/signup'/>
        <Route component={Login} exact path='/login'/> */}
        <Route component={ForgotPassword} exact path='/forgotPassword'/>
        <Route component={Detail} exact path='/detail/:id'/>
      </AuthProvider>
    </React.Fragment>
  )
};

export default App;
