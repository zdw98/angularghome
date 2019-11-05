import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Card, Avatar,List } from 'antd'

class ReplyList extends Component{
    render(){
        const { loading,reply_count,replices} = this.props
        return( 
            <Card
                loading={loading}
                title={reply_count+"条回复"}
                type="inner"
            >
                <List
                    itemLayout="vertical"
                    dataSource={replices}
                    renderItem={
                        (item)=>(
                            <List.Item key={item.id}
                            extra={ item.ups.length>0 ? <span>有{item.ups.length}人绝得很赞</span> :"" }>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.author.avatar_url}/>}
                                    description={ <div>
                                        <Link to={"/user/"+item.author.loginname}>{item.author.loginname}</Link>
                                        发表于:{item.create_at.split("T")[0]}</div>
                                   }
                                />
                                <div
                                    dangerouslySetInnerHTML = {{
                                        __html:item.content
                                    }}
                                >

                                </div>
                            </List.Item>
                           
                        )
                    }
                >

                </List>
            </Card>
        )
    }
}

export default ReplyList