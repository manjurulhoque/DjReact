import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../store/actions/auth';

class Signup extends Component {

    state = {
        email: '',
        username: '',
        password: '',
        confirm_password: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onAuth(this.state.username, this.state.email, this.state.password, this.state.confirm_password);
        this.props.history.push('/');
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        let errorMessage = null;
        if (this.props.error) {
            errorMessage = (
                <p>{this.props.error.message}</p>
            );
        }
        return (
            <div className="col-md-6 col-md-offset-2">
                {errorMessage}
                {
                    this.props.loading ?
                        'Loading' :
                        <form className="form-horizontal" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <h2 className="class-h2">Signup</h2>
                            </div>
                            <div className="form-group">
                                <label className="label-control">Username</label>
                                <input onChange={this.onChange} name="username" className="form-control" type="text"
                                       placeholder="Enter Username"/>
                            </div>
                            <div className="form-group">
                                <label className="label-control">Email</label>
                                <input onChange={this.onChange} name="email" className="form-control" type="email"
                                       placeholder="Enter email"/>
                            </div>
                            <div className="form-group">
                                <label className="label-control">Password</label>
                                <input onChange={this.onChange} name="password" className="form-control" type="password"
                                       placeholder="Enter password"/>
                            </div>
                            <div className="form-group">
                                <label className="label-control">Confirm Password</label>
                                <input onChange={this.onChange} name="confirm_password" className="form-control"
                                       type="password"
                                       placeholder="Enter password"/>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Signup"/>
                                or
                                <a href="/login" className="btn btn-success">Login</a>
                            </div>

                        </form>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, email, password, confirm_password) => dispatch(actions.authSignup(username, email, password, confirm_password))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);