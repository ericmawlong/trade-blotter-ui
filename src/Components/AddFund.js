//component for adding fund

import React, { Component } from 'react'
import './tradeBlotter.css' 
import Modal from 'react-responsive-modal';

class AddFund extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            open: false,
        fundName: '',
        fundNumber: ''     
        }
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    // addFund = () => {
    //     //const  {addFund} = this.props; 
    //     return 
    // }

    onSubmit = (event) => {
        // const {addFund} = this.props; 
        event.preventDefault();
        console.log(this.state.fundName);
        this.props.addFund(this.state.fundName, this.state.fundNumber)
        // addFund(this.state.fundName, this.state.fundNumber);
        // this.setState({fundNumber:''});
    }

    onChange = (event) => 
    this.setState({ 
        [event.target.id]: event.target.value
    });

    render() {
        const { open } = this.state;
        return (
<<<<<<< HEAD
            <div> 
                <button className="add-fund-btn" onClick={this.onOpenModal}>Add Fund</button>
=======
            <div>
                <button className="add-fund-btn" onClick={this.onOpenModal}>+ Add Fund</button>

>>>>>>> 22eed4292f9dcea0be7241ab76dca1819b7c8d38
                <Modal open={open} onClose={this.onCloseModal} center>
                    <form >
                        <div>
                            <label>Fund Number</label>
                            <input id="fundNumber" type='text' name='fundNumber' value={this.state.fundNumber} onChange={this.onChange}/>
                        </div>
                        <div>
                            <label>Fund Name</label>
                            <input id="fundName" type='text' name='fundName' value={this.state.fundName} onChange={this.onChange}/>
                        </div>

                        <button className='fundSubmit' type='submit' onClick={this.onSubmit}>Submit</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddFund