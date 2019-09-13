import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import Loginfeild from '../../contener/loginfeild'
import { MdChevronRight } from "react-icons/md";
import Button from '@material-ui/core/Button';
import { MdEmail } from "react-icons/md";
import { MdLockOpen } from "react-icons/md";



export default class Shop extends React.Component {
  constructor(){
    super()
this.state={
  mail: '',
  password:'',
}
  }
  getvalue = (e)=>{
    console.log(e.target.value, e.target.name)
    this.setState({
      [e.target.name] : e.target.value
    })
      }
    
    loginFunc = ()=> {
      let {mail,password} = this.state
      console.log(this.state)
      if (mail === "giftstore@admin.com" && password === "admin123"){
        this.props.history.push("/deshbordhome")
      }
      else{
        alert("login failed")
      }
    }
render(){

console.log(this.state)

  return (
 
     
     <div>
     <Paper style={{ padding: 20 , width: 600, marginLeft: '500px', marginTop: '100px', height: 350 }}>
            <h1>Login</h1>
            <span style={{float: "left" , marginTop: '20px', }}><MdEmail/></span> 
             <Loginfeild name = 'mail' type= 'email' fullname = 'Enter Email Address' size='500px' onChang = {this.getvalue}/>
            <span style={{float: "left" , marginTop: '20px'}}><MdLockOpen/></span>
            <Loginfeild name = 'password' type= 'password' fullname = 'Enter Password' size='500px'onChang = {this.getvalue}/>
            
            
            <Button size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "30px" }}
                             onClick={()=>{
                              this.loginFunc()
          }
                             }>
                           Log In
                        </Button>

                </Paper>
       
     </div>
  )}};
