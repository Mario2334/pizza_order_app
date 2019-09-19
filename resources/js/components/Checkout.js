import React,{Component} from 'react'
import store from "../store";
import axios from "axios";
import {connect} from "react-redux";
import {push} from 'connected-react-router'
import Popup from "reactjs-popup";

class Checkout extends Component{
    constructor(props) {
        super(props);
        this.state={
            order_items:{},
            total :0,
            is_loading:false
        };
        this.addOrder = this.addOrder.bind(this);
        this.state.order_items = store.getState().pizza_items.add_buy_pizza;
    }
    componentWillMount() {
        this.setState({
            total:this.calcTotalOrder()
        });
    }

    sortOrderItems(){
        let order_items = this.state.order_items;
        return Object
                .keys(order_items)
            .map(key => order_items[key])
    }

    calcTotalOrder(){
        let total_order = 0;
        for(let key in this.state.order_items){
            let price = parseFloat(this.state.order_items[key].price);
            total_order += price  * this.state.order_items[key].count
        }
        console.log(total_order);
        return total_order.toFixed(2)
    }
    addOrder(evt) {
        evt.preventDefault();
        let form ={
            name:this.firstName.value + " " + this.lastName.value,
            address:this.address1.value + " " + this.address2.value,
            pin: this.pin.value,
            pizzas:this.sortOrderItems()
        };
        this.setState({
            is_loading:true
        });
        axios.post("/api/order",form).then( (response) => {
            console.log(this);
            console.log(response.data);
            if(response.status === 200){
                let stripe = Stripe('pk_test_pofVORRgdhM49jaZs7sWUJVW00ICq6kbiQ');
                stripe.redirectToCheckout({
                    // Make the id field from the Checkout Session creation API response
                    // available to this file, so you can provide it as parameter here
                    // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
                    sessionId: response.data["session"]["id"]
                }).then((result) => {
                    alert("Stripe down try again later\n" + result.error.message);
                    // If `redirectToCheckout` fails due to a browser or network
                    // error, display the localized error message to your customer
                    // using `result.error.message`.
                });
            }
        } )

    };
    render() {
        return(
            <div className="container">
                <Popup open={this.state.is_loading}>
                    <div className="text-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </Popup>
                <div className="py-5 text-center">
                        <h2>We deliver Pizza To You</h2>
                        <p className="lead">Give us Your Address and We Will deliver the pizza in under 30 minutes .
                            If We Fail We Give You the Pizza For Free!
                        </p><small>Terms and Conditions Apply</small>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">{Object.keys(this.state.order_items).length}</span>
                        </h4>
                        <ul className="list-group mb-3">
                            {Object
                                .keys(this.state.order_items)
                                .map(key => <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 className="my-0">{this.state.order_items[key].name}</h6>
                                    </div>
                                    <span className="text-muted">{parseFloat(((this.state.order_items[key].price) * this.state.order_items[key].count).toFixed(2))}</span>
                                </li>)
                            }
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${this.state.total}</strong>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" noValidate="" onSubmit={(evt)=> this.addOrder(evt)}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName">First name</label>
                                    <input type="text" ref={(input) => this.firstName = input} className="form-control" id="firstName" placeholder=""
                                           required/>
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName">Last name</label>
                                    <input type="text"  ref={(input) => this.lastName = input} className="form-control" id="lastName" placeholder=""
                                           required=""/>
                                        <div className="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" ref={(input) => this.email = input} className="form-control" id="email" placeholder="you@example.com"/>
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address">Address</label>
                                <input type="text" ref={(input) => this.address1 = input} className="form-control" id="address" placeholder="1234 Main St"
                                       required=""/>
                                {}
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="address2">Address 2 <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="text" ref={(input) => this.address2 = input} className="form-control" id="address2"
                                       placeholder="Apartment or suite"/>
                            </div>

                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label htmlFor="zip">Zip</label>
                                    <input type="text" className="form-control" ref={(input) => this.pin = input} id="zip" placeholder="" required=""/>
                                        <div className="invalid-feedback">
                                            Zip code required.
                                        </div>
                                </div>
                            </div>

                            <hr className="mb-4"/>
                            <button className="btn btn-primary btn-lg btn-block" {...( (this.state.total>0) ? {} : { disabled: true } )} type="submit">Continue to
                                            checkout
                            </button>
                        </form>
                    </div>
                </div>

                <footer className="my-5 pt-5 text-muted text-center text-small">
                    <p className="mb-1">© 2017-2019 HydeTech LLC</p>
                    <ul className="list-inline">
                        <li className="list-inline-item"><a href="#">Privacy</a></li>
                        <li className="list-inline-item"><a href="#">Terms</a></li>
                        <li className="list-inline-item"><a href="#">Support</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default connect(null, {push})(Checkout);
