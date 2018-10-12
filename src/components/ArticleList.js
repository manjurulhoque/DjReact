import React from 'react';
import axios from 'axios';
import Article from './Article';

class ArticleList extends React.Component {

    state = {
        articles: []
    };

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/')
            .then((res) => {
                this.setState({
                    articles: res.data
                });
            })
    }

    render() {
        const articleList = this.state.articles.map((article) => {
            return <Article key={article.title} article={article}/>
        });
        return (
            <div>
                {articleList}
            </div>
        )
    }
}

export default ArticleList;