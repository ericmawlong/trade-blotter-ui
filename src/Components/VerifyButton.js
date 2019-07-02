import React, { Component } from 'react'

class VerifyButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             numberOfFunds: 0,
             verified: false 
        }
    }
    
    verifyHandler = (numberOfFunds) => {
        this.state.numberOfFunds < 6 ? this.setState({
            verified: true 
        }) : console.log("Max trades to place is only 5")
    }

    render() { 
        return this.state.verified ? (
            <div>
                <button className='verifyTrade'>PLACE TRADES</button> 
                <p align='center'> Successfully Verified trades! </p>
            </div>
        ) : (
            <div><button className='verifyTrade' onClick={this.verifyHandler}>VERIFY TRADES</button> </div>
        )
    }
}

export default VerifyButton
