import React,{Component} from 'react';
import {List,Avatar} from 'antd';
import {Link } from 'react-router-dom';
import Txtag from '../Txtag';
import {connect} from 'react-redux';
import axios from 'axios'
 
class IndexList extends Component{
    constructor(arg){
        super(arg);
        this.state={
            page:1
        }
        this.getData(this.props.tab)
    }
    shouldComponentUpdate(nextProps,nextState){
        // console.log(nextProps)
        if( this.props.tab!== nextProps.tab){
            this.getData(nextProps.tab)
            return false;
        }
        return true;
    }
    getData(tab){
        this.props.dispatch({
            type:'LADING_LIST',
        })
        this.props.dispatch( (dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${this.state.page}&limit=15`).then( (res)=>{
                // console.log(res)
                dispatch({
                    type:'ADD_LIST',
                    data:res.data.data
                })
            }).catch( (error)=>{
                console.log(error)
            })
        })
    }

    render(){
      
        return(
            <List
                loading={this.props.loading}
                dataSource = {this.props.data}
                renderItem = { item=>(<List.Item
                     actions={["访问"+item.reply_count,"回复"+item.visit_count]}
                    >
                    <List.Item.Meta
                        avatar ={ <Avatar src={item.author.avatar_url}/> }
                        title = {<div>
                                    <Txtag data={item}/>
                                    <Link to={"/details/"+item.id}>
                                        {item.title}
                                    </Link>
                            </div>}
                        description ={<p>
                            <Link to={"/user/"+item.author.loginname}>
                                {item.author.loginname}
                            </Link>
                            发表于:{item.create_at.split('T')[0]}
                        </p>}
                    />
                </List.Item>)}
            >

            </List>
        )
    }
}

export default connect( state=>state.list)(IndexList)