import React, { Component } from 'react';
import GrantSpesific from '../components/grant-spesific/grant-spesific';

class Grant extends Component{
    render(){
        const { match } = this.props;
        return ( 
            <GrantSpesific id={match.params.id}/>
        );
    }
}

export default Grant;