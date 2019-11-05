import React,{Component} from 'react';
import {Card} from 'antd';
class PublicCard extends Component{
    render(){
        const { data } = this.props
        return(
            <div className="BookWrap">
                {data.map((item, index) => (
                    <Card
                        title={item.title}
                        type="inner"
                        key = {index}
                        loading={false}
                        className={item.className}
                    >
                        <div  dangerouslySetInnerHTML={{ __html:item.content}}>    
                        </div>
                    </Card>

                )

                )}
            </div>
        )
    }
}
export default PublicCard;