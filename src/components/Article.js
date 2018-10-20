import React from 'react';
import {Link} from 'react-router-dom';

const Article = ({article}) => {
    return (
        <div className="container">
            <article>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <figure>
                            {
                                article.photo == null ? <img className="img-responsive" style={{height: 200, width: 200}} src="https://i.pinimg.com/236x/26/13/b9/2613b979bc24e63d4ee935d007b1e003--create-a-cartoon-x.jpg"/> :
                                <img className="img-responsive" style={{height: 200, width: 200}} src={`${article.photo}`}/>
                            }
                        </figure>
                    </div>
                    <div className="col-sm-6 col-md-8">
                    <span className="label label-default pull-right">
                        <i className="glyphicon glyphicon-comment"></i>50
                    </span>
                        <h4>{article.title}</h4>
                        <p>{article.content}</p>
                        <section>
                            <i className="glyphicon glyphicon-folder-open"></i>{article.category.title}
                            <Link className="btn btn-default btn-sm pull-right" to={`/details/${article.id}`}>More ...</Link>
                        </section>
                    </div>
                </div>
            </article>
        </div>
    )
};

export default Article;