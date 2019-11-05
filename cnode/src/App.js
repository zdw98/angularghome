import React, { Component } from 'react';
// import RouterIndex from './router';
import Header from './view/header';
import Footer from './view/footer';
import RouterIndex from './router'
import './index.css'
import { Main } from './view/header/style';


class App extends Component {
    render() {
        return (
            <div className="page">
                <Header></Header>
                <Main>
                    <RouterIndex></RouterIndex>
                </Main>
                <Footer></Footer>
            </div>
        )
    }
}

export default App