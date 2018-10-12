import React from 'react';
import {Route} from 'react-router-dom';
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";
import ArticleDetails from "./components/ArticleDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";

const BaseRouter = () => {
    return <div className="container">
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/create/' component={ArticleCreate}/>
        <Route exact path='/details/:id/' component={ArticleDetails}/>
        <Route exact path='/login/' component={Login}/>
        <Route exact path='/signup/' component={Signup}/>
    </div>
};

export default BaseRouter;