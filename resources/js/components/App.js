import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {history} from "../../store";
import {Route,Switch} from "react-router-dom"
import PizzaPage from "./PizzaPage";
import Checkout from "./Checkout";
import store from "../../store";
import { ConnectedRouter } from 'connected-react-router'

class App extends Component {

    render() {
        return(
            <Provider store={store}>
            <ConnectedRouter history={history}>
                <>
                <Switch>
                    <Route exact path ='/' component={PizzaPage}/>
                    <Route path='/checkout' component={Checkout} />
                </Switch>
                </>
            </ConnectedRouter>
            </Provider>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('app'));
