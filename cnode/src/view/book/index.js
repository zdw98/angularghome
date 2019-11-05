import React, { Component } from 'react';
import data from './data'
import PublicCard from '../PublicCard'

class Book extends Component {

    render() {
        return (
            <PublicCard data={data}></PublicCard>
        )

    }

}


export default Book;