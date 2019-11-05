import React, { Component } from 'react';
import { List, Card, Avatar } from 'antd';
import {Link} from 'react-router-dom'


class UserList extends Component {
    render() {
        const { loading, title,data} = this.props;
        // console.log(data)
        return (
            <Card
                loading={loading}
                type="inner"
                title={title}
            >
                <List
                    className="useList"
                    dataSource={data}
                    renderItem={ (item)=>(
                        <List.Item key={item.id}>
                            <Avatar src={item.author.avatar_url}/>
                            <Link to={"/user/"+item.author.loginname} className="usename">{item.author.loginname}</Link>
                            <h4><Link to={"/details/"+item.id} >{item.title}</Link></h4>
                            <time>注册时间:{item.last_reply_at.split("T")[0]}</time>
                        </List.Item>
                    )}
                    
                    >

                </List>

            </Card>
        )
    }
}
export default UserList