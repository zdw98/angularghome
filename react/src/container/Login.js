import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
          <div class="panel">
            <div class="header">
              <ul class="breadcrumb">
                <li><a href="/">主页</a><span class="divider">/</span></li>
                <li class="active">登录</li>
              </ul>
            </div>
            <div class="inner">
              <form id="signin_form" class="form-horizontal" action="/signin" method="post">
                <div class="control-group">
                  <label class="control-label" for="name">用户名</label>

                  <div class="controls">
                    <input class="input-xlarge" id="name" name="name" size="30" type="text"/>
                  </div>
                </div>
                <div class="control-group">
                  <label class="control-label" for="pass">密码</label>

                  <div class="controls">
                    <input class="input-xlarge" id="pass" name="pass" size="30" type="password"/>
                  </div>
                </div>
                <input type="hidden" name="_csrf" value="aDwG1G0Q-HuGi3J4wsrWRd_q0Ws9Pb3bhjOo"/>
                <div class="form-actions">
                  <input type="submit" class="span-primary" value="登录"/>
                    <a href="#">
                        <span class="span-info">
                          通过 GitHub 登录
                        </span>
                    </a>
                    <a id="forgot_password" href="#">忘记密码了?</a>
                </div>
              </form>
            </div>
          </div>
        )
    }
}
