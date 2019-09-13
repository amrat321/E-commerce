    import React from 'react';
    import Paper from '@material-ui/core/Paper';
    import Button from '@material-ui/core/Button';
    import SimpleRating from '../star/star'
    import { MdShoppingCart } from 'react-icons/md';
    import { useState } from 'react';
    import PrimarySearchAppBar from '../../component/navbar/navbar'


    class CardExample extends React.Component {
        constructor(){
            super()
            this.state = {
                count : 1,
                myCart : []
            }
        }
        addToCart() {
            let data = this.props.props.location.state
            let productObj = {
                name : data.name,
                Prodict: data.Prodict,
                count: this.state.count,
                price:data.price
            }
        console.log(productObj)
            this.state.myCart.push(productObj)
            this.setState({
                myCart : this.state.myCart
            })
            localStorage.setItem('product', JSON.stringify(this.state.myCart))

        }
        componentDidMount(){
            let productval = localStorage.getItem('product')
            if(productval){
                productval = JSON.parse(productval);
                this.setState({
                    myCart : productval
                })
            }
        }
        render(){
            console.log(this.props.props," dffdf")
            return(
            <div style={{ margin: "20px" }}>
                <PrimarySearchAppBar data={this.state.myCart} path={this.props.props}   /> <br />

                <Paper style={{ padding: 20, display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>
                        <img src={this.props.props.location.state.Prodict} width="500" />
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <h2>{}</h2>
                        <SimpleRating />
                        <p>{this.props.props.location.state.discraption}</p>
                        <h3 style={{ color: "#9C27B0" }}>Rs: {this.props.props.location.state.price}</h3>
                        <h3>Quantity:</h3>
                        <div style={{ display: 'flex',  marginLeft: 190, border: '1px solid black', justifyContent: "space-between", width: "20%" }}>
                            <button onClick={() => this.state.count > 1 &&
                             this.setState({count : this.state.count - 1})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>-</button>
                            <h5 style={{ color: "#9C27B0", marginTop: "2px" }}>{this.state.count}</h5>
                            <button onClick={() => this.setState({count : this.state.count + 1})} style={{ height: "35px", width: "40px", backgroundColor: "#eff0f5" }}>+</button>
                        </div>
                        <Button size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "30px" }}
                            onClick={this.addToCart.bind(this)}>
                            <MdShoppingCart />Add to Cart
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
    }

    export default CardExample;