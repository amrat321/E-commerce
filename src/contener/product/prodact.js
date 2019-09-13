import React from 'react'
import PrimarySearchAppBar from './../../component/navbar/navbar'
import Slider from '../../component/slider/slider'
import FooterPagePro from '../../component/footer/footer'
import CardExample from '../../component/singalprodact/singleprodict.js'
import history from  './../../config/history/history'
export default class Product extends React.Component {

// producFunc(data, productval){
// let productData = localStorage.getItem('productData');
// productObj = {
//     quantity : data,
//     image : productval.Prodict,
//     price : productval.price

// }
// if(productData === null){
//     productData = []
// }
// else{
//     productData = JSON.parse(productData)
// }
// productData.push(productObj)
// localStorage.setItem('productData',JSON.stringify(productData))
// }

    render() {
        console.log(this.props)
        return (
            <div>
                {/* <Slider  /> */}
                <CardExample props = {this.props} onclick = {this.producFunc}/>
                <FooterPagePro/>
            </div>
        )
    }
}