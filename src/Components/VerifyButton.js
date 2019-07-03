import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import Popup from 'reactjs-popup'
import Axios from 'axios';

class VerifyButton extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             numberOfFunds: 0,
             verified: false, 
             open: false 
        }
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    verifyHandler = (numberOfFunds) => {
        Axios.post('http://localhost:8762/trade/verify', {headers: {}, body: this.props.funds})
        .then(Response => {
            Response == `Verified Trades` ? (
            this.setState({
                verified: true  
            })
        ) : (console.log("Not verified"))
        }).catch(error => console.log(error))
    }

    submitHandler = () => {
        verified == true ? (
            Axios.post(`http://localhost:8762/trade/exchange`, {headers: {}, body: this.props.funds})
            .then(Response => {
                Response.status==201 ? console.log(`Exchanged trades`) : console.log(`Error occurred`)
            })) : (
                console.log(`Not verified`)
            ) 
    }

    render() { 
        const {open} = this.state 
        return this.state.verified ? (
            <div>
                <button className='verifyTrade' onClick={this.onOpenModal}>PLACE TRADES</button> 
                <p align='center'> Successfully Verified trades! </p>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <div>
                        <p align="center">Are you sure you want to place trades?</p>
                        <form onSubmit={this.submitHandler}>
                            <button className='verifyTrade' type="submit">Yes</button> 
                        </form>
                    </div>
                </Modal>
            </div>
        ) : (
            <div><button className='verifyTrade' onClick={this.verifyHandler}>VERIFY TRADES</button> </div>
        )
    }
}

export default VerifyButton
