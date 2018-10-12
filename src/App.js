import React, {Component} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter} from 'react-router-dom';
import BaseRouter from './routes';
import {connect} from 'react-redux';
import * as actions from './store/actions/auth';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <NavBar {...this.props}/>
                    <BaseRouter/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
