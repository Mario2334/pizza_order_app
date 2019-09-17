import React,{Component} from 'react';
import Pizza from './Pizza'
import {connect} from 'react-redux'
import {fetchPizzaList} from '../actions/pizzaActions'
import Proptypes from 'prop-types'

class PizzaList extends Component{
    componentWillMount() {
        this.props.fetchPizzaList();
    }
    render() {
        return(
            <div className="Pizza-list">
                {
                   this.props.pizza_items.map(pizza =>(
                       <Pizza pizza={pizza}/>
                    ))
                }
            </div>
        )
    }

}
PizzaList.Proptypes={
    fetchPizzaList : Proptypes.func.isRequired,
    pizza_items: Proptypes.array.isRequired
};
const mapStateToProps = state =>({
    pizza_items: state.pizza_items.top_pizza_list // pizza_items came from combine reducers that we have assigned for PizzaReducers
});
export default connect(mapStateToProps , { fetchPizzaList })(PizzaList)
