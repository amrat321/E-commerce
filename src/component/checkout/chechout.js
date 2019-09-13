import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SimpleRating from '../star/star'
import { MdShoppingCart } from 'react-icons/md';
import PrimarySearchAppBar from '../navbar/navbar'
import OutlinedTextFields from '../../contener/checkoutform/checkoutform'
import Grid from '@material-ui/core/Grid';




class Checkout extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1,
            myCart: []
        }
    }
    componentDidMount() {
        let productval = localStorage.getItem('product')
        if (productval) {
            productval = JSON.parse(productval);
            this.setState({
                myCart: productval
            })
        }
    }
    dlt(ind){
this.state.myCart.splice(ind,1)
this.setState({myCart: this.state.myCart})
localStorage.setItem('product',JSON.stringify(this.state.myCart))
    }

    submitdata(){
        alert("order successfully submitted")
    }

    godata = (e)=>{
        console.log(e.target.value);
        
    }

    


    render() {

        console.log(this.props.location.state)
        return (
            <div style={{ margin: "20px" }}>
                
                <PrimarySearchAppBar data={this.state.myCart}  path={this.props}/> <br />
                <Paper style={{ padding: 20 , width: 400, float: 'right', height: 200,  }}>
                    <h6 style={{width: "300px", margin: '0 auto', backgroundColor: "lightgrey", color: 'white', padding: '8px'}}>Proceed to pay</h6>
                    <div  style={{fontWeight: 'bolder'}}>Order Summary</div>
                    <div ><span style={{float: 'left'}}>Subtotal</span><span style={{float: 'right'}}>Rs: 12000</span></div> <br/><br/><br/>
                    <div ><span style={{float: 'left'}}>Total</span><span style={{float: 'right'}}>Rs: 12000</span></div>
</Paper>
                <Paper style={{ padding: 20 , width: 800, marginLeft: '100px', height: 500 }}>
                    <h1>Checkout</h1>
<Grid item xs={3} sm = {6} md = {4} lg = {12} >
            <OutlinedTextFields fullname = 'Full Name' size='800px' onclick= {this.godata}/>
            <OutlinedTextFields fullname = 'Enter Email Or Phone Number'  size='800px' onclick= {this.godata}/>
           </Grid>
            <div style={{float: "left", display: 'inline-block'}}>
            <OutlinedTextFields fullname = 'Province' size = '250px'onclick= {this.godata} />
            <OutlinedTextFields fullname = 'City' size = '250px' onclick= {this.godata}/>
            </div>
            <div  style={{float: "right", display: 'inline-block' , marginLeft: '50px'}}>
            <OutlinedTextFields fullname = 'Area' size = '250px' />
            <OutlinedTextFields fullname = 'Full Address' size = '250px'/>
            </div>
            <Button size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "50px" }}
                       onClick = {()=>this.submitdata()}
                       >
                            <MdShoppingCart />Submit
                        </Button>

            



                </Paper>
       
            </div>
        )
    }
}

export default Checkout;