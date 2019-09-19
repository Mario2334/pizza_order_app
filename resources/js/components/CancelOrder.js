import React , {Component} from 'react'
import {connect} from 'react-redux'
import {push} from 'connected-react-router'

class CancelOrder extends Component{
    componentWillMount() {
        this.setState({
            html:this.updateOrder()
        })
    }

    updateOrder(){
        let query_string = this.props.location.search.split("=");
        axios.patch('api/order',{"order_id":query_string[1],"is_completed":true}).then( (response)=>{
            if (response.status === 200){
                console.log("order updated")
            }
            else {
                console.log("order failed to update")
            }
        });

    }


    render() {
        const imageStyle= {
            width: "300px"
        };
        const hstyle={
            color:'#ad3525'
        };
        const pstyle={
            fontSize:'20px',
            color:"#5C5C5C"
        };

        return(
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-6 col-sm-offset-3">
                        <br></br><h2 style={hstyle}>Failed</h2>
                        <img style={imageStyle} src="https://cdn2.iconfinder.com/data/icons/weird-shapes/128/A-13-512.png"/>
                        <p  style={pstyle}>Retry Payment</p>
                        <a onClick={()=>this.props.push("/")} className="btn btn-danger"> Go to home </a>
                        <br/>
                    </div>

                </div>
            </div>
        )
    }
}
export default connect(null , {push})(CancelOrder)
