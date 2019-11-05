import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Login from './container/Login';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route path='/home' component={Home} />
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />
                        </div>
                        <div className="sider">
                            <div className="panel">
                                <div className="inner">
                                    <p>CNode：Node.js专业中文社区</p>
                                    <div>
                                        您可以
                                        <a href="#" style={{padding:'0 5px'}}>登录</a>
                                          或
                                        <a href="#" style={{padding:'0 5px'}}>注册</a>
                                        , 也可以
                                        <a href="#">
                                        <span className="span-info">
                                            通过 GitHub 登录
                                        </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="inner">
                                    <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank" className="banner sponsor_outlink" data-label="alinode">
                                        <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                                    </a>
                                    <div className="sep10"></div>
                                    <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" className="banner sponsor_outlink" data-label="ucloud-banner">
                                        <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                    </a>
                                    <div className="sep10"></div>
                                    <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank" className="banner sponsor_outlink" data-label="qiniu-sidebar">
                                        <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                                    </a>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="header">
                                    <span className="col_fade">无人回复的话题</span>
                                </div>
                                <div className="inner">
                                    <ul className="unstyled">
                                        <li>
                                            <div><a className="dark topic_title" href="#" title="node安装完成后npm -v检查报错">node安装完成后npm -v检查报错</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div><a className="dark topic_title" href="#" title="前端react window.location.href='下载路径' ，后端用servlet，这种下载文件方式有问题吗？大佬">前端react window.location.href='下载路径' ，后端用servlet，这种下载文件方式有问题吗？大佬</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div><a className="dark topic_title" href="#" title="一种支持插件式开发的命令行工具开发模式">一种支持插件式开发的命令行工具开发模式</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div><a className="dark topic_title" href="#" title="请问缓存的内存模型是什么呢">请问缓存的内存模型是什么呢</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div><a className="dark topic_title" href="#" title="Hackers周刊第十期（2019-11-03）">Hackers周刊第十期（2019-11-03）</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="header">
                                    <span className="col_fade">积分榜</span>
                                    &nbsp;
                                    <a className="dark" href="#">TOP 100 &gt;&gt;</a>
                                </div>
                                <div className="inner">
                                    <ol>
                                        <li>
                                            <span className="top_score">21755</span>
                                            <span className="user_name"><a href="#">i5ting</a></span>
                                        </li>
                                        <li>
                                            <span className="top_score">15675</span>
                                            <span className="user_name"><a href="#">alsotang</a></span>
                                        </li>
                                        <li>
                                            <span className="top_score">9350</span>
                                            <span className="user_name"><a href="#">leapon</a></span>
                                        </li>
                                        <li>
                                            <span className="top_score">9150</span>
                                            <span className="user_name"><a href="#">atian25</a></span>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="header">
                                    <span className="col_fade">友情社区</span>
                                </div>
                                <div className="inner">
                                    <ol className="friendship-community">
                                        <li>
                                            <a href="https://ruby-china.org/" target="_blank">
                                                <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                            </a>
                                        </li>
                                        <div className="sep10"></div>
                                        <li>
                                            <a href="http://golangtc.com/" target="_blank">
                                                <img src="//static2.cnodejs.org/public/images/golangtc-logo.png"/>
                                            </a>
                                        </li>
                                        <div className="sep10"></div>
                                        <li>
                                            <a href="http://phphub.org/" target="_blank">
                                                <img src="//static2.cnodejs.org/public/images/phphub-logo.png"/>
                                            </a>
                                        </li>
                                        <div className="sep10"></div>
                                        <li>
                                            <a href="https://testerhome.com/" target="_blank">
                                                <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                                            </a>
                                        </li>
                                    </ol>
                                </div>
                            </div>
                            <div className="panel">
                                <div className="header">
                                    <span className="col_fade">客户端二维码</span>
                                </div>
                                <div className="inner cnode-app-download">
                                    <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                        <br/>
                                            <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
