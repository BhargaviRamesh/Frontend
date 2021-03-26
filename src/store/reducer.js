// make changes in store's state

const initialState = {
    message: '',
    admins: [
        // { id: 11, name: 'Abhinav', salary: 12345 },
        // { id: 102, name: 'Abhishek', salary: 23456 },
        // { id: 103, name: 'Ajay', salary: 34567 }
    ]
}

const reducer = (state = initialState, { type, payload }) => {

    console.log(type);
    switch (type) {
        
    case "ADD_ADMIN":
        return {message: payload.message, admins: state.admins};
    case "DELETE_ADMIN":
        var filteredList = state.admins.filter((admin)=>{
            if(admin.id !== payload.id){
                return admin;
            }
        })
        console.log(filteredList)
        return { admins: filteredList }
        
    case "FIND_ADMINS":

        console.log(payload)
        return {admins: payload} 

    default:
        return state
    }
}

export default reducer;