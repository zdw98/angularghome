import React,{Component} from 'react';
import { Row,Col, Avatar } from 'antd'
// import data from './data';
import UserList from './UserList';
import {connect} from 'react-redux';
import axios from 'axios'

class User extends Component{
    constructor(arg){
        super(arg)
       
        // console.log(this.props)
        let id = this.props.match.params.id;
        this.getData(id)
    }

    shouldComponentUpdate(nextProps){
        let id = this.props.match.params.id;
        let nextid= nextProps.match.params.id;
        if(id !== nextid){
            this.getData(nextid)
            return false;
        }
        return true
    }
    
    getData(id){
        this.props.dispatch({
            type:'ADD_USER_CHANGE'
        })
        this.props.dispatch( (dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/user/${id}`).then( (res)=>{
                    dispatch({
                        type:'ADD_USER_DATA',
                        data:res.data.data
                    })
            }).catch( (error)=>{
                console.log(error)
            })
        })

    }
    render(){
        const {avatar_url,loginname,score,create_at,recent_topics,recent_replies} = this.props.data
        return  (
            <div className="userWrap">
                    <Avatar src={avatar_url} className="user"/>
                    <Row className="userRow">
                        <Col md={8}>
                            用户名:<a>{loginname}</a>
                        </Col>
                        <Col md={8}>
                            积分:<a>{score}</a>
                        </Col>
                        <Col md={8}>
                            注册时间:<a>{create_at.split('T')[0]}</a>
                        </Col>
                    </Row>

                    <UserList 
                         loading={this.props.loading} 
                         title="最近创建话题"
                         data={recent_topics}
                    >

                    </UserList>
                    <UserList 
                         loading={this.props.loading} 
                         title="最近回复话题"
                         data={recent_replies}
                    >

                    </UserList>
            </div>

        )
        
    }      
    
}
export default connect(state=>state.user)(User) ;