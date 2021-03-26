export const saveAdmin = (payload) => {

    // http call using fetch.POST method

    return {type: "ADD_ADMIN", payload: {message: "Successfully added an admin!!"}}
}

export const addAdmin = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };
    return dispatch => {
        fetch('http://localhost:8082/admin/add', requestOptions)
            .then(res => {
                console.log(res)
                // console.log(res.json())
                if(res.status === 201){
                    console.log("success");
                    dispatch(saveAdmin())
                }
            })
        
    }

}


export const findAdmins = (payload) => {
    return {type: "FIND_ADMINS", payload: payload}
}

export const fetchAdmins = () => {

    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    return dispatch => {
        fetch('http://localhost:8082/admin/', requestOptions)
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(data => {
                console.log(data);
                dispatch(findAdmins(data));
            })
        }         
}
const updateAdmin = () =>{
        console.log('inside update admin')
        return {type : "UPDATE_ADMIN",payload : {message : "Successfully updated admin"}}
        
        }
        
        export const EditAdmin = (payload) =>{
             const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            };
            return dispatch => {
                fetch('http://localhost:8082/admin/', requestOptions)
                    .then(res => {
                        console.log(res)
                        // console.log(res.json())
                        if(res.status === 204){
                            console.log("success");
                            dispatch(updateAdmin())
                        }
                    })

                }
        }
          
          