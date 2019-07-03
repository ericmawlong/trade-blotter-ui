//component for displaying funds

import React, { Component } from 'react'
import './tradeBlotter.css' 
import AddFund from './AddFund'
import FundItem from './FundItem';
import VerifyButton from './VerifyButton';
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css'
//import axios from 'axios'

class Table extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            funds: [
                {
                    fundName: 'eric',
                    fundNumber: '1',
                    invManager: 'GS',
                    invCurr: 'INR',
                    setCycle: '12',
                    nav: '69',
                    sAndPRating: '6',
                    moodyRating: '9',
                    quantity: '5'
                }, 
                {
                    fundName: 'praneet',
                    fundNumber: '2',
                    invManager: 'GS',
                    invCurr: 'INR',
                    setCycle: '12',
                    nav: '69',
                    sAndPRating: '6',
                    moodyRating: '9',
                    quantity: '5'
                }
            ]
         }
    }

    // componentDidMount () {
    //     axios.get('http://localhost:8762/')
    //     .then (response => {
    //         console.log(response)
    //         this.setState({})
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    addFund = function (fundName, fundNumber, invManager, invCurr, setCycle, nav, sAndPRating, moodyRating, quantity) {
        console.log({fundName}, {fundNumber}); 
        const newFund = {
            fundName,
            fundNumber,
            invManager: 'GS',
            invCurr: 'INR',
            setCycle: '12',
            nav: '10',
            sAndPRating: '6',
            moodyRating: '9' ,
            quantity: '10'
           }
           this.setState (
            {
                funds: [...this.state.funds, newFund]
            })
    }.bind(this);

    render() {
        return (
            <div className="page-content">
                
                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Fund Name</th>
                            <th>Fund Number</th>
                            <th>Investment Manager</th>
                            <th>Investment Currency</th>
                            <th>Set Cycle</th>
                            <th>NAV</th>
                            <th>S&P Rating</th>
                            <th>Moody Rating</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody> {
                        this.state.funds.map((f) => (
                            <FundItem className = "fund-item" fundName={f.fundName} fundNumber={f.fundNumber} invManager={f.invManager}
                            invCurr={f.invCurr} setCycle={f.setCycle} nav={f.nav} sAndPRating={f.sAndPRating} moodyRating={f.moodyRating}
                            quantity={f.quantity}
                             /> 
                        ))
                        }                          
                    </tbody>
                </table>

                <AddFund addFund={this.addFund} numberOfTrades={this.state.funds.length}/>
                <VerifyButton numberOfTrades={this.state.funds.length}/> 
            </div>
        )
    }
}

export default Table;