import React from 'react';
import {connect} from 'react-redux';
import {withRouter, NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as actions from '../store/actions/auth';
import { getCategories } from '../store/actions/categories';

class NavBar extends React.Component {

    componentDidMount() {
        this.props.getCategories();
    }

    render() {
        const { categories } = this.props.categories;
        const categoriesMenu = categories.map(category => 
            <li key={category.id}><a href="#">{category.title}</a></li>
        )
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
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false" aria-haspopup="true">
                                    Categories <span className="caret"></span>
                                </a>

                                <ul className="dropdown-menu" name="category" onChange={this.onChange}>
                                    {categoriesMenu}
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            {
                                this.props.auth.isAuthenticated ?
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
};

NavBar.propTypes = {
    getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    categories: state.categories
});

const mapDispatchToProps = dispatch => {
    return ({
        onLogout: () => dispatch(actions.authLogout()),
        getCategories
    })
};

export default withRouter(connect(mapStateToProps, {getCategories})(NavBar));