//component for displaying funds

import React, { Component, PureComponent } from 'react'
import './tradeBlotter.css' 
import AddFund from './AddFund'
import 'materialize-css/dist/css/materialize.min.css';
//import M from 'materialize-css'
// import axios from 'axios'

class Table extends PureComponent {

    constructor(props) {
         super(props)
    
         this.state = {
            funds: [
                {
                    fundNumber: '',
                    fundName: '',
                    invManager: '',
                    rating: '',
                    invCurr: '',
                    setCycle: '',
                    nav: '',
                    sAndPRating: '',
                    moodyRating: ''
                }
            ],
            fundForm : [],
            tableData :[]
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
    addF = (fundName, fundNumber) =>{
        console.log(fundNumber);
    }

    addFund = (fundName, fundNumber, invManager='GS', invCurr='INR', setCycle='12', nav='10', sAndPRating='6', moodyRating='9', quantity='0' ) => {
        console.log("Here"); 
        const newFund = {
            fundName,
            fundNumber,
            invCurr,
            invManager,
            setCycle,
            nav,
            sAndPRating,
            moodyRating ,
            quantity
           }
           this.setState (
            {
                funds: [...this.state.funds, newFund],
                tableData: [    
                    <tr>
                        <td>{this.state.fundName}</td>
                        <td>{this.state.fundNumber}</td>
                        <td>invCurr</td>
                        <td>invManager</td>
                        <td>GS</td>
                        <td>12</td>
                        <td>7</td>
                        <td>6</td>
                        <td>9</td>
                        <td>4</td>
                    </tr>
                ]

            }
            
            );
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
                            <th>Investment Currency</th>
                            <th>Investment Manager</th>
                            <th>Set Cycle</th>
                            <th>NAV</th>
                            <th>S&P Rating</th>
                            <th>Moody Rating</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>EY Funds</td>
                            <td>1</td>
                            <td>9</td>
                            <td>INR</td>
                            <td>GS</td>
                            <td>12</td>
                            <td>7</td>
                            <td>6</td>
                            <td>9</td>
                            <td>4</td>

                        </tr>
                        <tr>
                            <td>KPMG Funds</td>
                            <td>2</td>
                            <td>6</td>
                            <td>INR</td>
                            <td>GS</td>
                            <td>12</td>
                            <td>7</td>
                            <td>6</td>
                            <td>9</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>{}</td>
                            <td>3</td>
                            <td>7</td>
                            <td>INR</td>
                            <td>GS</td>
                            <td>12</td>
                            <td>7</td>
                            <td>6</td>
                            <td>9</td>
                            <td>4</td>
                        </tr>

                        {this.state.tableData[0]}
                        
                    </tbody>
                </table>

<<<<<<< HEAD
                {/* <div class="popup-container">
=======
                <AddFund/>

                <div className="popup-container">
>>>>>>> 22eed4292f9dcea0be7241ab76dca1819b7c8d38
                    {this.state.fundForm}
                    <button className = 'verifyTrade' type='submit' onSubmit={this.handleVerify}>
                        VERIFY TRADE
                    </button>
                </div> */}
            </div>
        )
    }
}

export default Table;
