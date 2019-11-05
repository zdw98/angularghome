import React, { Component } from 'react'
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Good from './Good';
import All from './All';
import Share from './Share';
import Job from './Job';
export default class Home extends Component {
    currentTab=(a,_)=>{
      document.getElementsByClassName('topic-tab current-tab')[0].setAttribute("class", "topic-tab")
      document.getElementById(a).setAttribute("class", "topic-tab current-tab")
    }
    render() {
      /*let pathname=this.props.location.pathname*/
      let url = this.props.match.url
        return (
          <Router>
            <div className="panel">
                <div className="header">
                    <Link to={url+'/all'} className="topic-tab current-tab" id="homeall" onClick={this.currentTab.bind(this,'homeall')}>全部</Link>
                    <Link to={url+'/good'} className="topic-tab" id="homegood" onClick={this.currentTab.bind(this,'homegood')}>精华</Link>
                    <Link to={url+'/share'} className="topic-tab" id="homeshare" onClick={this.currentTab.bind(this,'homeshare')}>分享</Link>
                    <Link to={url+'/job'} className="topic-tab" id="homejob" onClick={this.currentTab.bind(this,'homejob')}>招聘</Link>
                </div>
                <div>
                    <Route path={`${url}/all`}  component={All} />
                    <Route path={`${url}/good`} component={Good} />
                  <Route path={`${url}/share`} component={Share} />
                  <Route path={`${url}/job`} component={Job} />
                    {/* <Route path='/home/:tab' component={List}/> */}
                </div>
            </div>
          </Router>
        )
    }
}
