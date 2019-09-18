import React,{Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import {deletePizza} from "../actions/pizzaActions";

class CartItem extends Component{
    calculatePrice(price , quantity){
        price = parseFloat(price);
        var total = price*quantity;
        return total.toFixed(2).toString()
    }
    render() {
        return(
            <tr>
                <td className="w-25">
                    <img
                    src={this.props.meta.url}
                    className="img-fluid img-thumbnail" alt="Sheep"/>
                </td>
                <td>{this.props.meta.name}</td>
                <td>{this.props.meta.price}$</td>
                <td className="qty"><input type="number" className="form-control-sm" id="input1" value={this.props.meta.count}/></td>
                <td>{this.calculatePrice(this.props.meta.price,this.props.meta.count)}$</td>
                <td>
                    <a href="#" onClick={()=>this.props.deletePizza(this.props.meta.id)} className="btn btn-danger btn-sm">
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </td>
            </tr>
        )
    }
}
CartItem.propTypes={
    deletePizza:PropTypes.func.isRequired
};

const mapStateToProps=state=>({
    pizza_items:state.pizza_items.add_buy_pizza
});

export default connect(mapStateToProps,{deletePizza})(CartItem)
