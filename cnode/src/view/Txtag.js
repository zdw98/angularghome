import React, { Component } from 'react';
import { Tag } from 'antd';

const tag = {
    top: {
        color: "magenta",
        txt: "置顶"
    },
    good: {
        color: "geekblue",
        txt: "精华"
    },
    job: {
        color: "cyan",
        txt: "招聘"
    },
    share: {
        color: "purple",
        txt: "分享"
    },
    ask: {
        color: "green",
        txt: "问答"
    },
    dev: {
        color: "lime",
        txt: "问答"
    }
}

function getag(data) {
    return data.top ?
        "top" :
        data.good ?
            "good" :
            data.tab

}
class Txtag extends Component {
    render() {
        return (
            <Tag color={tag[getag(this.props.data)].color}>{tag[getag(this.props.data)].txt}</Tag>
        )
    }
}

export default Txtag