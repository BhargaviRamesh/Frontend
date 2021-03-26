import React, { Component } from 'react'

export default class UpdateAdmin extends Component {


    constructor(){
        super();
        this.adminName = React.createRef();
        this.adminContact = React.createRef();
        
        this.state = {message: ''}
    }

    updateAdmin(event){
        console.log('name', this.adminName.current.value)
        console.log('contact', this.adminContact.current.value)
       
        event.preventDefault();

        const url = 'http://localhost:8082/admin/';
        fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({adminId: this.props.match.params.id, adminName:this.adminName.current.value,adminContact:this.adminContact.current.value})
        })
        .then(response => {
            console.log(response.status);
            if(response.status === 201){
                this.setState({message: 'Admin updated sucessfully!!'})
            }
        })
        
    }



    render() {
        return (

            <div>

                <div className="alert alert-success" role="alert">
                    {this.state.message}
                </div>


                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Admin Id</span>
                    </div>
                    <input type="number" disabled value={this.props.match.params.id} className="form-control" placeholder="Enter Id" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Admin Name</span>
                    </div>
                    <input type="text" ref={this.adminName} className="form-control" placeholder="Enter Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Admin contact</span>
                    </div>
                    <input type="text" ref={this.adminContact} className="form-control" placeholder="Enter contact" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

               
                <button type="button" className="btn btn-primary" onClick={this.updateAdmin.bind(this)}>Update Admin</button>

            </div>

        )
    }
}