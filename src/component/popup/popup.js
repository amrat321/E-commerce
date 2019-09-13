import React from "react";
import Popup from "reactjs-popup";
import './popup.css';
import Button from '@material-ui/core/button'
import { MdSettingsInputSvideo } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import img2 from '../../img/shopping-cart (1).png'

const ToolTipPositions = (props) => (
  <div className="example-warper">
    <Popup
      trigger={<img src ="http://www.newdesignfile.com/postpic/2010/06/shopping-cart-icon-white_235863.png" width= '40'/>}
      position="bottom right"
      on="hover"
    >

       {console.log(props.data)}
      {props.data.length ?  props.data.map((val, ind) =>
        <div style={{ color: 'black', }} >
          <img style={{ float: 'left' }} src={val.Prodict} width='40' />
          <span style={{ fontSize: '12px', float: 'left', marginLeft: '5px', marginTop: '7px', marginRight:'30px' }}>{val.name} </span>
          <span style={{ fontSize: '12px', float: 'left', marginTop: '7px', marginLeft: '5px', marginRight:'12px'  }}>Rs : {val.price} </span>
          <span style={{ fontSize: '12px', float: 'left', marginTop: '7px', marginLeft: '5px' }}>{val.count}</span>
          <span   style={{float: 'right'}}><img src = 'https://image.flaticon.com/icons/svg/2/2772.svg' width='10'/></span> <br /><br />

        </div>
        )
         :
          <span style={{color:'black'}}>Cart Is Empty</span> 

      }<br/>

      {console.log(props.path)}
      <Button  disabled={props.data.length ? false : true}  onClick={()=>props.path.history.push('/viewcart',{data:props.data})}  size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "10px" }}
      >
        View Cart
        </Button>
    </Popup>
  </div>
);
export default ToolTipPositions

 