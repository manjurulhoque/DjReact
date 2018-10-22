import React from 'react';
import axios from 'axios';
import Article from './Article';

class ArticleList extends React.Component {

    state = {
        articles: [],
    };

    componentDidMount() {
        console.log('compnent mounted');
        const id = this.props.match.params.id;
        if (id !== undefined) {
            axios.get(`http://127.0.0.1:8000/api/categories/${id}`)
                .then((res) => {
                    this.setState({
                        articles: res.data
                    });
                })
        } else {
            axios.get('http://127.0.0.1:8000/api/')
                .then((res) => {
                    this.setState({
                        articles: res.data
                    });
                })
        }
    }

    render() {
        const no_article = <h4 className="text-center">No article with this category</h4>
        const articleList = this.state.articles.length > 0 ? this.state.articles.map((article) => {
            return <Article key={article.title} article={article}/>
        }) : no_article;
        return (
            <div>
                {articleList}
            </div>
        )
    }
}

export default ArticleList;