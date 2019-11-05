import React, { Component } from 'react';
import TxtDetails from './TxtDetails'
import ReplyList from './ReplyList';
import {connect} from 'react-redux';
import axios from 'axios'



class Details extends Component {
    constructor(arg){
        super(arg)
        const id=this.props.match.params.id
        this.getDetaile(id)
    }
    shouldComponentUpdate(nextProps){
        let id = this.props.match.params.id;
        let nextid= nextProps.match.params.id;
        if(id !== nextid){
            this.getDetaile(nextid)
            return false;
        }
        return true;
    }
    getDetaile(id){
       this.props.dispatch({
            type:'ADD_DETAILS_CHANGE'
        })
        this.props.dispatch( (dispatch)=>{
            axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then( (res)=>{
               dispatch({
                   type:'ADD_DETAILS',
                   data:res.data.data
               })
            })
        })
    }
    render() {
        const {data,loading} = this.props
        return (
            <div  className="BookWrap">
                <TxtDetails data={data} loading={loading}></TxtDetails>
                <ReplyList
                    replices={data.replies}
                    reply_count={data.reply_count}
                    loading={loading}
                    className="replyList"
                ></ReplyList>
            </div>
        )

    }

}


export default connect(state=>state.details)(Details) ;