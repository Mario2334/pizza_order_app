import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addPizza} from "../actions/pizzaActions";
import Popup from "reactjs-popup";

class Pizza extends Component{
    constructor(props) {
        super(props);
        this.numInput = React.createRef();
        this.state={
            isEmpty:false
        };
        this.clickAction = this.clickAction.bind(this);
    }
    clickAction(){
        if(this.numInput.current.value>0){
            this.props.addPizza(this.props.pizza , this.numInput.current.value);
            this.setState({
                isEmpty:false
            })
        }
        else {
            this.setState({
                isEmpty:true
            })
        }
    }

    render() {
        return(
            <div className="Pizza">
                <Popup open={this.state.isEmpty}>
                    <div className="text-center">
                        <div className="badge-danger" role="status">
                            <span className="badge badge-danger">Add Quantity</span>
                        </div>
                    </div>
                </Popup>
                <h2>{this.props.pizza.name}</h2>
                <div><img width="200" src={this.props.pizza.url}/></div>
                <p>{this.props.pizza.description}</p>
                <input type="number" ref={this.numInput} defaultValue="0" step="1" className="Count"/>
                <button type="button" className="btn btn-info Add-cart" onClick={this.clickAction}>AddtoCart</button>
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
