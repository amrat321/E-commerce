import React from 'react'
import PrimarySearchAppBar from './../../component/navbar/navbar'
import Slider from '../../component/slider/slider'
import SmallChips from '../../component/chips/chips'
import RecipeReviewCard from '../../component/cards/card'
import FooterPagePro from '../../component/footer/footer'
import Grid from '@material-ui/core/Grid';
import {Firebase} from '../../config/firebase/firebase'
export default class Home extends React.Component {
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

    render() {
        {console.log(this.props)}
        return (
            <div>
                <PrimarySearchAppBar data={this.state.myCart}  path={this.props} /> <br/>
                <Slider  />
                <br/>
                {/* <img src = {banner} height='90'/> */}
                <br/>
                <br/>
                <br/>
                <br/> 
                <br/>
                <br/>
                <br/>
                <Grid container justify = 'center' >
               
                
                {this.state.products.map((val,i)=>{
                   return <RecipeReviewCard
                    name ={val.name}
                     discraption = {val.discription}
                     Prodict = {val.url}
                     price={val.price}
                   
                     />
                })}
                
                
                </Grid>
               
                <br/>
                <br/>
                <br/>
                <FooterPagePro/>
            </div>
        )
    }
}