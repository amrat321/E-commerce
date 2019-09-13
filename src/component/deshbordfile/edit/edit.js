import React from 'react'
import Paper from '@material-ui/core/Paper';
import OutlinedTextFields from './../../../contener/checkoutform/checkoutform'
import { MdChevronRight } from "react-icons/md";
import Button from '@material-ui/core/Button';
import {Firebase} from '../../../config/firebase/firebase'
import PersistentDrawerLeft from './../../drawer/creatproduct'

class Deshboard extends React.Component{
    constructor(){
        super()
        this.state = {
        name : "",
        price: "",
        discription : "",
        url:"",
        quantity: "",
        fileName : ""
        }
        this.AddButton=this.AddButton.bind(this)
}
// img = async (e)=>{
                
//     console.log(e.target.files[0])
//     let fileName = e.target.files[0].name
//     firebase.firestore().collection("Products").add(this.state)
//     let ref = firebase.storage().ref('/').child(`imges/${fileName}`)
//     await ref.put(e.target.files[0])
//     ref.getDownloadURL().then(url => 
//        this.setState({
//            url
//        })
//                         )
// }
componentDidMount(){
let edit = this.props.location.state.obj
console.log(edit)
this.setState({
    name : edit.name,
    price: edit.price,
    discription: edit.discription,
    url: edit.url,
    id: edit.id,
    fileName: edit.fileName
})}
            
productName = (e) => {
    this.setState({
        name: e.target.value
    })
}
productPrice = (e) => {
    this.setState({
        price: e.target.value
    })
}
productDiscription = (e) => {
    this.setState({
        discription: e.target.value
    })
}
// productUrl = (e) => {
//     this.setState({
//         url: e.target.value
//     })
// }
productQuantity = (e) => {
    this.setState({
        quantity: e.target.value
    })
}
img = async (e) => {
    console.log(e.target.files[0])
    let fileName = e.target.files[0].name
    let ref = Firebase.storage().ref('/').child(`imges/${this.state.fileName}`)
    await ref.put(e.target.files[0])
    ref.getDownloadURL().then(url =>
        this.setState({
            url
        })
        )}
    
AddButton() {
    Firebase.firestore().collection("Products").doc(this.state.id).set(this.state)
console.log(this.state)


}

    render(){
        let {name,price,discription,url} = this.state
        console.log(this.state)
        return(
<div>
      <PersistentDrawerLeft/>
<Paper style={{ padding: 20 , width: 500, marginLeft: '450px', marginTop: '100px', height: 500 }}>
       <h1>Edit Product</h1>
       <span style={{float: "left" , marginTop: '20px'}}><MdChevronRight/></span>  <OutlinedTextFields fullname = 'Product Name' value ={name} size='400px' onclick = {this.productName}/>
     <span style={{float: "left" , marginTop: '20px'}}><MdChevronRight/></span> <OutlinedTextFields fullname = 'Product Price'  value ={price} size='400px' onclick = {this.productPrice}/>
     <span style={{float: "left" , marginTop: '20px'}}><MdChevronRight/></span> <OutlinedTextFields fullname = 'Product Description'  value ={discription} size='400px'onclick = {this.productDiscription}/>
     <span style={{float: "left" , marginTop: '20px'}}><MdChevronRight/>
     {console.log(url)}
     </span> <input type = 'file' name = "hugugu"  onChange={this.img.bind(this)}/> <br/>
     <br/><br/>
     <select onClick = {(e)=>this.setState({catagery : e.target.value})}>
              <option value = "">Select Catagery</option>
              <option value = "Shirt">Shirt</option>
              <option value = "Watch">Watch</option>
              <option value= "Laptop ">Laptop</option>
              <option value="Shouse ">Shouse</option>
                        <option value="Devices ">Devices</option>
                        <option value="Mobile ">Mobile</option>


          </select>
          <br/><br/>


     <Button onClick = {this.AddButton} size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "30px" }}
                      >
                      Add Product
                   </Button>
           </Paper>
           </div>

)
}
}
export default Deshboard