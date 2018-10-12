import React, {Component} from 'react';
import axios from 'axios';

class ArticleCreate extends Component {

    state = {
        title: '',
        content: ''
    };

    onSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/', {title: this.state.title, content: this.state.content})
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-2">
                        <h2>Create an article</h2>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="title"
                                    required
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Enter title..."/>
                            </div>

                            <div className="form-group">
                                <textarea
                                    type="text"
                                    required
                                    name="content"
                                    onChange={this.onChange}
                                    className="form-control"
                                    placeholder="Enter some content..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
};

export default ArticleCreate;