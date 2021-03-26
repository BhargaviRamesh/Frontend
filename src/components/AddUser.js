import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions/action'

 class AddUser extends Component {

    constructor(){
        super();
        this.role = React.createRef();
        this.password = React.createRef();
        
        this.state = {message: ''}
    }

    addUser(event){
        console.log('method for adding user role', this.role.current.value)
        console.log('method for adding user password', this.password.current.value)
        event.preventDefault();

        this.props.onAddUser({id:0,role:this.role.current.value,password:this.password.current.value})
    }

    render() {
        return (
            <div>
                
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Customer role</span>
                </div>
                <input type="text" ref={this.role} className="form-control" placeholder="Enter Role" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Customer Address</span>
                </div>
                <input type="text" ref={this.address} className="form-control" placeholder="Enter address" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Customer Email</span>
                </div>
                <input type="text" ref={this.email} className="form-control" placeholder="Enter Email" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Customer Mobile Number</span>
                </div>
                <input type="number" ref={this.mobile} className="form-control" placeholder="Enter MoblieNumber" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Customer Password</span>
                </div>
                <input type="text" ref={this.password} className="form-control" placeholder="Enter Password" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <button type="button" className="btn btn-primary" onClick={this.addCustomer.bind(this)}>Add Customer</button>

            </div>
        )
    }
}


// export default AddUser;

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    console.log(dispatch)
    return {
        onAddUser: (payload) => dispatch(actions.addUser(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddUser);