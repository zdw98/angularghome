import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
class Nav extends Component {
    render() {
        const {id,mode} = this.props
        return(
            <Menu
                mode={mode}
                theme={id}
                className="headernav">
                <Menu.Item >
                    <Link to="/index/all">
                        <Icon type="home"></Icon>首页
                                </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/book">
                        <Icon type="book"></Icon> 教程
                                </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/about">
                        <Icon type="info-circle-o"></Icon>关于
                                </Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav