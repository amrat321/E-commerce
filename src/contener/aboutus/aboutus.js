import React from 'react'
import PrimarySearchAppBar from './../../component/navbar/navbar'
import Slider from '../../component/slider/slider'
import FooterPagePro from '../../component/footer/footer'
export default class Aboutus extends React.Component {

    render() {
        return (
            <div>
                <PrimarySearchAppBar /> <br/>
                <Slider  />
                <br/>
               <h1>About us</h1>
               <h1>Heerji Sodha </h1>
                <FooterPagePro/>
            </div>
        )
    }
}