import React, { Component } from 'react'
import { connect } from 'react-redux';

 class AddCustomer extends Component {

    constructor(){
        super();
        this.adminName = React.createRef();
        this.adminContact = React.createRef();
        this.state = {message: ''}
    }

    AddAdmin(event){
        console.log('method for adding admin', this.adminName.current.value)
        console.log('method for adding admin', this.adminContact.current.value)
        
        event.preventDefault();


        this.props.onAddAdmin({id: 0, Admin_Name: this.adminName.current.value, Contact: this.adminContact.current.value});

        // const url = 'http://localhost:8080/api/employees/';
        // fetch(url, {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({name: this.name.current.value, salary: this.salary.current.value})
        // })
        // .then(response => {
        //     console.log(response.status);
        //     if(response.status === 201){
        //         this.setState({message: 'Employee inserted sucessfully!!'})
        //     }
        // })
        
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
                    <span className="input-group-text" id="basic-addon1">Admin contact</span>
                </div>
                <input type="number" ref={this.adminContact} className="form-control" placeholder="Enter contact" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>


                <button type="button" className="btn btn-primary" onClick={this.addAdmin.bind(this)}>Add Admin</button>

            </div>
        )
    }
}


// export default AddAdmin;

const mapStateToProps = (state) => {
    return {
        // message: state.employee.message,
        // employees: state.employees
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onAddAdmin: (payload) => dispatch({type: "ADD_ADMIN", payload: payload})
    }
}


export default (AddAdmin);