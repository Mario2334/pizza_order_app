import React , {Component} from 'react'
import {connect} from 'react-redux'
import {push} from "connected-react-router"

class SuccessOrder extends Component{
    constructor(props) {
        super(props);
        this.updateOrder = this.updateOrder.bind(this);

    }
    componentWillMount() {
        this.updateOrder()
    }

    updateOrder(){
        let query_string = this.props.location.search.split("=");
        axios.patch('api/order',{"order_id":query_string[1],"is_completed":true}).then( (response)=>{
            if (response.status === 200){
                console.log("order updated")
            }
            else {
                this.props.push('/cancel_order')
            }

        });

    }


    render() {
        const imageStyle= {
            width: "300px"
        };
        const hstyle={
            color:'#0fad00'
        };
        const pstyle={
            fontSize:'20px',
            color:"#5C5C5C"
        };
        return(
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <br></br><h2 style={hstyle}>Success</h2>
                            <img style={imageStyle} src="https://thumbs.dreamstime.com/z/pizza-delivery-smile-motorcycle-boy-delivers-hot-pizzas-cartoon-n-110596227.jpg"/>
                                <p style={pstyle}>Order Coming up in 30 minutes.</p>
                                <a onClick={()=>this.props.push("/")} className="btn btn-success"> Go to home </a>
                                <br/>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(null,{push})(SuccessOrder)
