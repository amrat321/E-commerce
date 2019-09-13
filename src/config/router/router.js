import React from "react";
import { Router, Route} from "react-router-dom";
import {Home, Shop, Login,Signup, Aboutus, Contact,Product , Viewcart,Addproduct,Checkout,Deshboard,Editproduct, Loginfacebook,} from './../../contener'
import history from './../history/history'
function AppRouter() {
  return (
    <Router history = {history}>
        <Route exact path="/" component={Home} />
        <Route path="/Shop" component={Shop} />
        <Route path="/admin" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/aboutus" component={Aboutus}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/prodact" component={Product}/>
        <Route path='/viewcart' component={Viewcart}/>
        <Route path = '/addproduct' component={Addproduct}/>
        <Route path = '/checkout' component={Checkout}/>
        <Route path = '/deshbordhome' component={Deshboard}/>
        <Route path = '/editproduct' component={Editproduct}/>
        <Route path = '/facebooklogin' component={Loginfacebook}/>


        

        



    </Router>
  );
}


export default AppRouter;
