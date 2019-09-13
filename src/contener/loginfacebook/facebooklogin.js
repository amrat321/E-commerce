import React from "react";
import Popup from "reactjs-popup";
import './facebook.css'
import Paper from '@material-ui/core/Paper';
import TextField from '../../contener/loginfeild'
import {loginFunc} from './../../config/function/function' 

class Facebook extends React.Component{
    constructor(){
        super()
        this.state = {
      
        }
}

async facebook(){
let user = await loginFunc()
console.log(user)
 let obj = await {
name: user.displayName,
photoo : user.photoURL
}
console.log(obj)
await this.props.history.push('/checkout' , obj)
}

    render(){
        console.log(this.state)
        return(
<div>
    <Paper style={{width:'400px',height:'100px',margin:'0 auto'}}>
        <span>First you want to login with facebook</span>
        <br/>
<button onClick = {()=>this.facebook()} class="loginBtn loginBtn--facebook">
  Login with Facebook
</button>
 </Paper>

           </div>

)
}
}
export default Facebook
