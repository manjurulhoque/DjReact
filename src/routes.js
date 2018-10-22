import React from 'react';
import {Route, Redirect, Switch } from 'react-router-dom';
import ArticleList from "./components/ArticleList";
import ArticleCreate from "./components/ArticleCreate";
import ArticleDetails from "./components/ArticleDetails";
import Login from "./components/Login";
import Signup from "./components/Signup";

const BaseRouter = () => {
    return <div className="container">
        <Switch>
            <Route exact path='/' component={ArticleList}/>
            <Route exact path='/categories/:id' component={ArticleList}/>
            <Route exact path='/create/' component={ArticleCreate}/>
            <Route exact path='/details/:id/' component={ArticleDetails}/>
            <Route exact path='/login/' component={Login}/>
            <Route exact path='/signup/' component={Signup}/>
            <Route path='/*' render={() => <Redirect to="/"/>}/>
        </Switch>
    </div>
};

export default BaseRouter;