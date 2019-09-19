import React,{Component} from 'react'
import Popup from "reactjs-popup";
import CartItem from './CartItem'
import online from '../../static/images/online-order.png'
import store from "../store";
import {connect} from "react-redux";
import { push } from 'connected-react-router'

class Cart extends Component{
    constructor(props) {
        super(props);
        this.state={
            cart_items:{}
        };
        store.subscribe(()=>{
            this.setState({
                cart_items:store.getState().pizza_items.add_buy_pizza
            });
        });
    }

    getFullPrice(){
        let fullPrice = 0;
        for(let key in this.state.cart_items){
            let itemPrice = this.state.cart_items[key]["price"];
            itemPrice = parseFloat(itemPrice);
            let value =this.state.cart_items[key]["count"];
            fullPrice += itemPrice*value;
        }
        return fullPrice.toFixed(2).toString()
    }

    render() {
        if(Object.keys(this.state.cart_items).length > 0){
            return(
                <Popup trigger={<a><img src={online} className="Online"/> </a>}  modal>
                    { close =>(
                        <div id="cartModal" className="Cart-modal" tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content">
                                    <div className="modal-header border-bottom-0">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                            Your Shopping Cart
                                        </h5>
                                        <button type="button" onClick={() => {close();}} className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <table className="table Table-image">
                                            <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Product</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Qty</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Object
                                                    .keys(this.state.cart_items)
                                                    .map(key => <CartItem key={key} meta={this.state.cart_items[key]}/>)
                                            }
                                            </tbody>
                                        </table>
                                        <div className="d-flex justify-content-end">
                                            <h5>Total: <span className="Price text-success">{this.getFullPrice()}$</span></h5>
                                        </div>
                                    </div>
                                    <div className="Modal-footer border-top-0 d-flex justify-content-between">
                                        <button type="button" onClick={() => {close();}} className="btn btn-secondary Close-button" data-dismiss="modal">Close
                                        </button>
                                        <button type="button" onClick={()=>this.props.push('/checkout')} className="btn btn-success Checkout-button">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    }
                </Popup>
            )
        }
        else {
           return( <Popup trigger={<a><img src={online} className="Online"/> </a>}  modal>
                { close =>(
                    <div id="cartModal" className="Cart-modal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-bottom-0">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Your Shopping Cart
                                    </h5>
                                    <button type="button" onClick={() => {close();}} className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <h2>Add Something to Cart</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                )

        }
            </Popup>
           )
    }
    }
}

export default connect(null, { push })(Cart);
