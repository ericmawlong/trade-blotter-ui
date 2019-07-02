//component for displaying funds

import React, { Component } from 'react'
import './tradeBlotter.css' 
import AddFund from './AddFund'
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css'
// import axios from 'axios'

class Table extends Component {

    constructor(props) {
         super(props)
    
         this.state = {
            funds: [
                {
                    fundName: [],
                    fundNumber: []
                    // rating: [],
                    // invCurr: []
                }
            ],
            fundForm : []
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

    componentDidMount(){
        var fundForm = [];
        fundForm.push(<AddFund key="1"/>);
        this.setState({
            fundForm: fundForm
        })
    }
    
    handleVerify = (event) => {
        event.preventDefault();
        // var baseUrl = "http://localhost:8762/";
        // var payload = {
        //     "fundName": this.state.fundName,
        //     "fundNumber": this.state.fundNumber,
        //     "rating": this.state.rating,
        //     "invCurr": this.state.invCurr
        // }
    }

    handleAdd = (fundName, fundNumber) => {
         const newFund = {
             fundName,
             fundNumber,
           }
           this.setState ({fundForm: [...this.state.fundForm, newFund]});
    }

    submitHandler = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <div className="page-content">
                <table className='centered'>
                    <thead>
                        <tr>
                            <th>Fund Name</th>
                            <th>Fund Number</th>
                            <th>Rating</th>
                            <th>Investment currency</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>EY Funds</td>
                            <td>1</td>
                            <td>9</td>
                            <td>INR</td>
                        </tr>
                        <tr>
                            <td>KPMG Funds</td>
                            <td>2</td>
                            <td>6</td>
                            <td>INR</td>
                        </tr>
                        <tr>
                            <td>PWC Funds</td>
                            <td>3</td>
                            <td>7</td>
                            <td>INR</td>
                        </tr>
                        
                    </tbody>
                </table>

                {/* <div class="popup-container">
                    {this.state.fundForm}
                    <button className = 'verifyTrade' type='submit' onSubmit={this.handleVerify}>
                        VERIFY TRADE
                    </button>
                </div> */}
            </div>
        )
    }
}

export default Table