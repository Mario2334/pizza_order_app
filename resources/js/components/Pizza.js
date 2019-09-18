import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPizza} from "../actions/pizzaActions";

class Pizza extends Component{
    constructor(props) {
        super(props);
        this.numInput = React.createRef();
    }


    render() {
        return(
            <div className="Pizza">
                <h2>{this.props.pizza.name}</h2>
                <div><img width="200" src={this.props.pizza.url}/></div>
                <p>{this.props.pizza.description}</p>
                <input type="number" ref={this.numInput}   step="1" className="Count"/>
                <button type="button" className="btn btn-info Add-cart" onClick={()=>this.props.addPizza(this.props.pizza , this.numInput.current.value)}>AddtoCart</button>
            </div>
        )
    }
}

Pizza.propTypes ={
    addPizza:PropTypes.func.isRequired
};

const mapStateToProps=state=>({
    pizza_items:state.pizza_items.add_buy_pizza
});
export default connect(mapStateToProps , {addPizza})(Pizza)
