import React , {Component} from 'react'
import Header from "./Header";
import PizzaList from "./PizzaList";
import Cart from "./Cart";

class PizzaPage extends Component{
    render() {
        return(
            <div className="App">
                <Header text="Welcome To Pizza Time"/>
                <p className="App-intro">Top 10 pizzas to Order</p>
                <PizzaList/>
                <Cart/>
            </div>
        )
    }
}
export default PizzaPage
