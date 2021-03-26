import React, { Component } from 'react'
import { connect } from 'react-redux';

import * as actions from '../actions/action'

 class AddAdmin extends Component {

    constructor(){
        super();
        this.adminName = React.createRef();
        this.adminContact = React.createRef();
        
        this.state = {message: ''}
    }

    addAdmin(event){
        console.log('method for adding admin adminName', this.adminName.current.value)
        console.log('method for adding admin adminContact', this.adminContact.current.value)
        
        event.preventDefault();

        this.props.onAddAdmin({id:0,adminName:this.adminName.current.value,adminContact:this.adminContact.current.value})
    }

    render() {
        return (
            <div>
                
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Admin Name</span>
                </div>
                <input type="text" ref={this.adminName} className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Admin Contact</span>
                </div>
                <input type="text" ref={this.adminContact} className="form-control" placeholder="Enter contact" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                

                <button type="button" className="btn btn-primary" onClick={this.addAdmin.bind(this)}>Add Admin</button>

            </div>
        )
    }
}


// export default AddAdmin;

const mapStateToProps = (state) => {
    return {
        message: state.message
    }
}

const mapDispatchToState = (dispatch) => {
    console.log(dispatch)
    return {
        onAddAdmin: (payload) => dispatch(actions.addAdmin(payload))
    }
}


export default connect(mapStateToProps, mapDispatchToState)(AddAdmin);