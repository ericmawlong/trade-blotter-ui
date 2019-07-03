import React, { Component } from 'react'
import AddFund from './AddFund';
import Table from './Table'
import VerifyButton from './VerifyButton';

class TradeBlotter extends Component {
    render() {
        return (
            <div>
                <Table />
                <VerifyButton />    
            </div>
        )
    }
}

export default TradeBlotter
