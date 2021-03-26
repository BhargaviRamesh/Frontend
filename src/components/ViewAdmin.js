import React, { Component } from 'react'
import {
    Link
  } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from '../actions/action'


// Get admins json from Spring app..

class ViewAdmin extends Component {

    constructor() {
        super();
        this.state = { admins: [], message: '' }
    }


    componentDidMount() {
        console.log('Initialization...')
        fetch('http://localhost:8082/admin/')
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    this.setState({ admins: data })
                }
            );
    }
    deleteAdmin(id){
        console.log('Deleting admin ...' , id)
        const url = 'http://localhost:8082/admin/delete/' + id
        fetch(url, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(
                data => {
                    console.log(data)
                    this.setState({admins:data.admins, message: data.text})

                }
            );
    }



    render() {

        var adminList = this.state.admins.map((admin, i) => {
            const { UpdateAdmin , value} = this.props;
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{admin.adminName}</td>
                    <td>{admin.adminContact}</td>
                    
                    <td><button type="button" className="btn btn-danger" onClick={this.deleteAdmin.bind(this, admin.adminId)}> X </button>
                    <Link to={"/update/" + admin.adminId} ><button type="button" className="btn btn-warning">Edit</button></Link>
                    </td>
                </tr>
            )
        })


        return (
            <div >
                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Admin_Name</th>
                            <th scope="col">Admin_Contact</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {adminList}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    console.log('State is:: ', state)
    return {
        admins: state.admins
        // this.props.admin = this.state.admins;
    }
}


const mapDispatchToState = (dispatch) => {
    return {
        onFetchAdmins: () => dispatch(actions.fetchAdmins())
    }
}

// export default ViewAdmin;
export default connect(mapStateToProps, mapDispatchToState)(ViewAdmin);