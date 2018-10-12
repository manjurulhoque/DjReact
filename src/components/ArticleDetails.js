import React from 'react';
import axios from 'axios';
import Article from './Article';

class ArticleDetails extends React.Component {

    state = {
        article: {}
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`http://127.0.0.1:8000/api/${id}`)
            .then((res) => {
                this.setState({
                    article: res.data
                })
            })
    }

    onDelete = () => {
        const id = this.props.match.params.id;

        axios.delete(`http://127.0.0.1:8000/api/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    };

    render() {
        const article = this.state.article;
        return (
            <div className="container">
                <Article article={article}/>
                <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
            </div>
        )
    }
}

export default ArticleDetails;