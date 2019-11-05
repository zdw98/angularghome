import React, { Component } from 'react'

export default class Job extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount(){
    let page = 4;
    fetch('https://cnodejs.org/api/v1/topics?page='+page)
    .then((res)=>res.json())
    .then((res)=>{
      this.setState({data:res.data});
    })
  }
    render() {
        return (
          <div className="inner no-padding">
              <div className="topic_list">
                {
                  this.state.data.map((item)=>(
                    <div className="cell" key={item.id}>

                        <a className="user_avatar pull-left" href="#">
                            <img src={item.author.avatar_url} title={item.author.loginname}/>
                        </a>
                        <span className="reply_count pull-left">
                            <span className="count_of_replies" title="回复数">
                              {item.reply_count}
                            </span>
                            <span className="count_seperator">/</span>
                            <span className="count_of_visits" title="点击数">
                              {item.visit_count}
                            </span>
                          </span>

                        <a className="last_time pull-right" href="#">
                            <img className="user_small_avatar" src={item.author.avatar_url}/>
                            <span className="last_active_time">8 分钟前</span>
                        </a>
                        <div className="topic_title_wrapper">
                            <a className="topic_title" href="#" title={item.title}>
                              {item.title}
                            </a>
                        </div>
                    </div>
                  ))
                }
              </div>
          </div>
        )
    }
}
