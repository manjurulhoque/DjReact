import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import * as actions from '../store/actions/auth';

class NavBar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Djreact</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/create">Create Article</NavLink>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.isAuthenticated ?
                                    <li>
                                        <a href="#" onClick={this.props.onLogout}>Logout</a>
                                    </li> :
                                    <li>
                                        <NavLink to="/login">Login</NavLink>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.authLogout())
    }
};

export default withRouter(connect(null, mapDispatchToProps)(NavBar));