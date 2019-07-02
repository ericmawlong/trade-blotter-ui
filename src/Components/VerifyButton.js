import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import Popup from 'reactjs-popup'

class VerifyButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             numberOfFunds: 0,
             verified: false, 
             open: false 
        }
    }
    
    verifyHandler = (numberOfFunds) => {
        this.state.numberOfFunds < 6 ? this.setState({
            verified: true 
        }) : console.log("Max trades to place is only 5")
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

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
