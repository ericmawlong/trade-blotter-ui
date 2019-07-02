//component for adding fund

import React, { Component } from 'react'
import './tradeBlotter.css' 
import Modal from 'react-responsive-modal';

class AddFund extends Component {
    state = {
        open: false,
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div> 
                <button className="add-fund-btn" onClick={this.onOpenModal}>Add Fund</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <form  onSubmit={this.props.submitHandler}>
                        <div>
                            <label>Fund Number</label>
                            <input type='text' name='fundNumber' value={this.props.fundNumber} onChange={this.props.handleAdd}/>
                        </div>
                        <div>
                            <label>Fund Name</label>
                            <input type='text' name='fundName' value={this.props.fundName} onChange={this.props.handleAdd}/>
                        </div>
                        {/* <div>
                            <label>Rating</label>
                            <input type='text' name='rating' value={this.props.rating} onChange={this.props.handleAdd}/>
                        </div>
                        <div>
                            <label>Investment Currency</label>
                            <input type='text' name='invCurr' value={this.props.invCurr} onChange={this.props.handleAdd}/>
                        </div> */}
                        <button className='fundSubmit' onSubmit={this.props.handleAdd}>Submit</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default AddFund