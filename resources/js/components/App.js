import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import PizzaList from "./PizzaList";
import Cart from './Cart'
import {Provider} from "react-redux";
import store from "../../store";

class App extends Component {
    constructor(props) {
        super(props);
            this.AddToCart = this.AddToCart.bind(this);
        this.state={
            ordered_pizzas:{}
        }
    }
    AddToCart(pizza , value){
        const current_pizzas = {...this.state.ordered_pizzas};

        var added_pizza =pizza;
        added_pizza["count"] = value;
        const new_pizzas = Object.assign(current_pizzas, added_pizza);
        this.setState({
            ordered_pizzas:new_pizzas
        })
    }

    render() {
        return(
            <Provider store={store}>
            <div className="App">
                <Header text="Welcome To Pizza Time"/>
                <p className="App-intro">Top 10 pizzas to Order</p>
                <PizzaList/>
                <Cart/>
            </div>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
