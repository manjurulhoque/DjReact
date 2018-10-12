import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
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
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/create-article">Create Article</a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.isAuthenticated ?
                                    <li>
                                        <a href="#" onClick={this.props.onLogout}>Logout</a>
                                    </li> :
                                    <li>
                                        <a href="/login">Login</a>
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