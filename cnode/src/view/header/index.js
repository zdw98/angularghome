import React,{Component} from 'react';
import {Layout,Row,Col,Divider,Dropdown,Button,Icon} from 'antd';
import { PageWrap,H } from './style'
import Nav from './Nav'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <PageWrap>
            <Layout.Header>
                <Row className='wrap'>
                    <Col md={6} xs={24}>
                        <H><Link to="/index/all">cNode</Link></H>
                    </Col>
                    <Col md={18} xs={0} className='antd_col'>
                        <Divider className="headerDivider" type="vertical"/>
                        <Nav mode="horizontal" id="maxNav"></Nav>
                    </Col>
                    <Col md={0} xs={24} className="minnav">
                        <Dropdown overlay={
                            <Nav mode="vertical" id="minNav"/>
                        } trigger={["click","touchend"]}>
                            <Button><Icon type="bars"/></Button>
                        </Dropdown>
                    </Col>
                    
                </Row>
            </Layout.Header>
            </PageWrap>
        )  
    }      
    
}

export default Header