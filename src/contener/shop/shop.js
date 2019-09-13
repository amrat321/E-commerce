import React from 'react'
import PrimarySearchAppBar from './../../component/navbar/navbar'
import Slider from '../../component/slider/slider'
import FooterPagePro from '../../component/footer/footer'
import {Firebase} from '../../config/firebase/firebase'
import RecipeReviewCard from '../../component/cards/card'
import SmallChips from '../../component/chips/chips'
import { FaBreadSlice } from "react-icons/fa";
import { MdWatchLater,MdLaptop ,MdTapAndPlay,MdDevicesOther,MdFilterList} from "react-icons/md";

export default class Shop extends React.Component {
        constructor(){
            super()
            this.state = {
                myCart: [],
                products:[],
            }
        }
        filter=(a)=>{
            let {products} = this.state;
            console.log(a)
            products = []
            Firebase.firestore().collection("Products").where("catagery", '==', a).get()
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
           }) }
    render() {
        return (
            <div>
                <PrimarySearchAppBar data={this.state.myCart}  path={this.props}/> <br/>
                <br/>
               <h1>Shop</h1>
               <SmallChips icon = {<MdWatchLater/>} lable='Watches' onclick = {()=>this.filter('Watch')}/>
               <SmallChips icon = {<FaBreadSlice />}lable='Shirt'  onclick = {()=>this.filter('Shirt')}/>
               <SmallChips icon = {<MdLaptop/>} lable='Laptops' onclick = {()=>this.filter('Laptop')}/>
               <SmallChips icon = {<MdFilterList/>}lable='Shouse' onclick = {()=>this.filter('Shoes')}/>
               <SmallChips icon = {<MdDevicesOther/>}lable='Devices' onclick = {()=>this.filter('Devices')}/>
               <SmallChips icon = {<MdTapAndPlay/>}lable='Mobile' onclick = {()=>this.filter('Mobile')}/>
               <br/><br/><br/>


               {this.state.products.map((val,i)=>{
                   return <RecipeReviewCard
                    name ={val.name}
                     discraption = {val.discription}
                     Prodict = {val.url}
                     price={val.price}
                   
                     />
                })}
                <FooterPagePro/>
            </div>
        )
    }
}