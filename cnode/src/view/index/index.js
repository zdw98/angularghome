import React, { Component } from 'react';
import {  Row, Col } from 'antd';
import './style.css';
import Aside from './Aside'
import IndexList from './IndexList'

class Index extends Component {
    
    render() {
        const tab= this.props.match.params.id
        // console.log(this.props)
        return (
            <Row className="wrapper">
                <Col md={6} xs={0} className="wrapnav">
                    <Aside id="wrapnav"
                        mode="vertical">
                    </Aside>
                </Col>
                <Col md={0} xs={24}>
                    <Aside id="wrapxsnav"
                        mode="horizontal">
                    </Aside>
                </Col>
                <Col md={18} xs={24} className="min">
                    <IndexList tab={tab}/>
                </Col>
            </Row>
        )

    }

}


export default Index;