import React,{Component} from 'react';

class Pizza extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div className="Pizza">
                <h2>{this.props.pizza.name}</h2>
                <div><img width="200" src={this.props.pizza.url}/></div>
                <p>{this.props.pizza.description}</p>
                <input type="number" ref={this.props.pizza.id}   step="1" width="10px" className="Count"/>
                <button type="button" className="btn btn-info Add-cart">AddtoCart</button>
            </div>
        )
    }
}
export default Pizza
