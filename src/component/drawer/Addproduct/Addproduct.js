import React from 'react'
import Paper from '@material-ui/core/Paper';
import OutlinedTextFields from './../../../contener/checkoutform/checkoutform'
import { MdChevronRight } from "react-icons/md";
import Button from '@material-ui/core/Button';
import {Firebase} from '../../../config/firebase/firebase'
import PersistentDrawerLeft from '../creatproduct'

class Addproduct extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            price: "",
            discription: "",
            url: "",
            quantity: ""
        }
        this.AddButton = this.AddButton.bind(this)
    }
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
    productUrl = (e) => {
        this.setState({
            url: e.target.value
        })
    }
    productQuantity = (e) => {
        this.setState({
            quantity: e.target.value
        })
    }
    img = async (e) => {

        console.log(e.target.files[0])
        let fileName = e.target.files[0].name
        let ref = Firebase.storage().ref('/').child(`imges/${fileName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then(url =>
            this.setState({
                url,
                fileName : fileName
            })
            )
            
            
        }
        
        AddButton() {
            Firebase.firestore().collection("Products").add(this.state)
        console.log(this.state)
        alert('Product Created')

    }


    render() {
        console.log(this.state)
        return (
            <div>
                <PersistentDrawerLeft />
                <Paper style={{ padding: 20, width: 500, marginLeft: '400px', marginTop: '100px', height: 500 }}>
                    <h1>Add Product</h1>
                    <span style={{ float: "left", marginTop: '20px' }}><MdChevronRight /></span>  <OutlinedTextFields fullname='Product Name' size='400px' onclick={this.productName} />
                    <span style={{ float: "left", marginTop: '20px' }}><MdChevronRight /></span> <OutlinedTextFields fullname='Product Price' size='400px' onclick={this.productPrice} />
                    <span style={{ float: "left", marginTop: '20px' }}><MdChevronRight /></span> <OutlinedTextFields fullname='Product Description' size='400px' onclick={this.productDiscription} />
                    <span style={{ float: "left", marginTop: '20px' }}><MdChevronRight /></span> <input type='file' onChange={this.img.bind(this)} /> <br />
                    <br /><br />
                    <select onClick={(e) => this.setState({ catagery: e.target.value })}>
                        <option value="">Select Catagery</option>
                        <option value="Shirt">Shirt</option>
                        <option value="Watch">Watch</option>
                        <option value="Laptop ">Laptop</option>
                        <option value="Shouse ">Shouse</option>
                        <option value="Devices ">Devices</option>
                        <option value="Mobile ">Mobile</option>


                    </select>
                    <br /><br />


                    <Button onClick={this.AddButton} size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "30px" }}
                    >
                        Add Product
                   </Button>
                </Paper>
            </div>

        )
    }
}
export default Addproduct