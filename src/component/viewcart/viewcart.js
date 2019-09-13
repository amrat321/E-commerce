import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import SimpleRating from '../star/star'
import { MdShoppingCart } from 'react-icons/md';
import PrimarySearchAppBar from '../navbar/navbar'
import { Link }from 'react-router-dom'



class Viewcart extends React.Component {
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

    


    render() {
        console.log(this.props)
        return (
            <div style={{ margin: "20px" }}>
                <PrimarySearchAppBar data={this.state.myCart}  path={this.props} /> <br />

                <Paper style={{ padding: 20, display: "flex" }}>
                    <div style={{ marginRight: "10px" }}>

                        {/* <div style={{border: '2px solid black', width: '900px' , height:'500px'}}> */}
                        <table >
                            <tr style={{ border: '2px solid black', backgroundColor: '#87CEFA',  }}>
                                <th style={{ width: '300px', border: '2px solid black', }}>
                                    <span style={{  fontSize: "bolder"}}>Image</span>

                                </th>
                                <th style={{ width: '300px', border: '2px solid black' }}>
                                    <span style={{ fontSize: "bolder"}}>Name</span>

                                </th>
                                <th style={{ width: '300px', border: '2px solid black' }}>
                                    <span style={{ fontSize: "bolder" }}>Unit Price</span>

                                </th>
                                <th style={{ width: '300px', border: '2px solid black' }}>
                                    <span style={{ fontSize: "bolder"}}>Quantity</span>

                                </th>
                                <th style={{ width: '300px', border: '2px solid black'  }}>Subtotal</th>
                            </tr>

                        
                        {
                            this.state.myCart.map((val,ind)=>{
                                return  <tr style={{ fontSize: '100px' }}>
                                <td>
                                    <span style={{  }}><img src={val.Prodict} width='100' /></span>

                                </td>
                                <td>
                                    <span style={{  }}>{val.name}</span>

                                </td>
                                <td>
                                    <span style={{ }}> {val.price}</span>

                                </td>
                                <td>
                                    <span style={{  }}>{val.count}</span>

                                </td>
                                {console.log(val.price * val.count)}
                                <td>
                                    <span style={{  }}>{val.price * val.count}</span>

                                </td>
                                <td onClick={()=>this.dlt(ind)}><img src = 'https://img.icons8.com/color/48/000000/delete-sign.png' width='10'/></td>
                            </tr>

                            })



                        }


                            
                        </table>
                        
                    <Button size="large" style={{ color: "#fff", backgroundColor: "#87CEFA", marginTop: "50px" }}
                      onClick={()=>this.props.history.push('/facebooklogin')}  >
                            <MdShoppingCart />Checkout
                        </Button> 
                    </div>

                    {/* </div> */}

                </Paper>
            </div>
        )
    }
}

export default Viewcart;