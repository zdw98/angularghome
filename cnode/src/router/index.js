import React,{Component} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import Index from '../view/index';
import About from '../view/about';
import Book from '../view/book';
import User from '../view/user';
import Details from '../view/details';

class RouterIndex extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact render={ ()=>(
                    <Redirect to="/index/all"/>
                )}/>
                <Route path="/index/:id"  component={Index}/>
                <Route path="/book" component={Book}/>
                <Route path="/about" component={About}/>
                <Route path="/index" component={Index}/>
                <Route path="/details/:id" component={Details}/>
                <Route path="/user/:id" component={User}/>
            </Switch>
        )
    }
}

export default RouterIndex