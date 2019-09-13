import React from 'react'
import Paper from '@material-ui/core/Paper';
// import OutlinedTextFields from './../../../contener/checkoutform/checkoutform'
// import { MdChevronRight } from "react-icons/md";
// import Button from '@material-ui/core/Button';
import {Firebase} from '../../config/firebase/firebase'
import PersistentDrawerLeft from '../../component/drawer/creatproduct'
import './deshboardhome.css'

class Deshboard extends React.Component{
    constructor(){
        super()
        this.state = {
        myCart: [],
        products:[],
        }

}

    
componentDidMount(){
    let {products} = this.state;
   Firebase.firestore().collection("Products").get()
   .then(data=>{
       console.log(data)
       data.forEach(value=>{
           let result = value.data();
            result.id = value.id
           products.push(result);
            this.setState({
                products:products
            })
       })
   }) 

   
        
    
    let productval = localStorage.getItem('product')
    if(productval){
        productval = JSON.parse(productval);
        this.setState({
            myCart : productval
        })
    }
}   
dlt(id ,ind){
    let {products} = this.state
    products.splice(ind,1)
    this.setState({products: products})
    Firebase.firestore().collection("Products").doc(id).delete().then(()=> {
        console.log("Document successfully deleted!");
    }).catch((error)=> {
        console.error("Error removing document: ", error);
    });

}          
render(){
    console.log(this.state.products)
        // console.log(this.state)
        return(
<div>
      <PersistentDrawerLeft/>
      {console.log(this.props)}
 <Paper style={{ padding: 20 , width: 1350, marginLeft: '50px', marginTop: '100px', height: 400 }}>
       <h1>dashboard</h1>
       <Paper style={{marginLeft:'100px',float: 'left', display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
     <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/145/145867.svg' width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total User</span>
         <span style={{fontSize: '50px', marginRight: '30px' }} >75</span>

         </Paper>

         <Paper style={{marginLeft:'100px', float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
         <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/2099/2099103.svg' width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total Order</span>
         <span style={{fontSize: '50px' , marginRight: '30px'}} >100</span>

         </Paper>

         <Paper style={{marginLeft:'100px',float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
         <span style={{ }} className='img'><img  src='https://image.flaticon.com/icons/svg/138/138360.svg'width = '40' height = '40'/></span>
         <span style={{fontWeight: 'bolder' }} className='img2'>Total Payment</span>
         <span style={{fontSize: '50px' }} >$800</span>

     </Paper>

     <Paper style={{marginLeft:'100px',float: 'left',display: 'inline-block', padding: 20 , width: 220, marginTop: '100px', height: 120 }}>
     <span style={{}} className='img'><img  src='https://image.flaticon.com/icons/svg/743/743007.svg'width = '40' height = '40'/></span>
     <span style={{fontWeight: 'bolder' }} className='img2'>Total Sale</span>
     <span style={{fontSize: '50px' }} >700</span>

     
     </Paper> 
  {/* products */}

         </Paper>
         <br/>
    
  <Paper style={{ display: "inline-block" }}>
                    <div style={{ marginRight: "10px" }}>

                        {/* <div style={{border: '2px solid black', width: '900px' , height:'500px'}}> */}
                        <table >
                            <tr style={{  backgroundColor: '#87CEFA', color: 'white'  }}>
                                <th style={{ width: '250px', }}>
                                    <span style={{  fontSize: "bolder"}}>Image</span>

                                </th>
                                <th style={{ width: '250px',  }}>
                                    <span style={{ fontSize: "bolder"}}>Name</span>

                                </th>
                                <th style={{ width: '250px',  }}>
                                    <span style={{ fontSize: "bolder" }}>Unit Price</span>

                                </th>
                                <th style={{ width: '250px', }}>
                                    <span style={{ fontSize: "bolder"}}></span>

                                </th>
                                <th style={{ width: '250px',  }}>Catagiry</th>
                                <th style={{ width: '100px',  }}>Delete</th>
                                <th style={{ width: '100px',  }}>Edit</th>


                            </tr>

                      
                        
{

this.state.products.map((val, i)=> 
          <tr style={{ fontSize: '100px' }} >
        <td>
            <span style={{  }}> <img src = {val.url} alt = "image" width='100'/></span>

        </td>
        <td>
            <span style={{  }}>{val.name}</span>

        </td>
        <td>
            <span style={{ }}>{val.price}</span>

        </td>
        <td>
            <span style={{  }}>{val.count}</span>

        </td>
        <td>
            <span style={{  }}>{val.catagery}</span>

        </td>
        <td onClick={()=>this.dlt(val.id ,i)}><img src = 'https://image.flaticon.com/icons/svg/1632/1632708.svg' width='10'/></td>
        <td key = {val.id} onClick={()=>this.props.history.push('/editproduct',{obj : val})}><img src = 'https://image.flaticon.com/icons/svg/61/61456.svg' width='10'/></td>

    </tr>
)}
    







                            
                        </table>
                   
                    </div>

                    {/* </div> */}

                </Paper>
           </div>

)
}
}
export default Deshboard