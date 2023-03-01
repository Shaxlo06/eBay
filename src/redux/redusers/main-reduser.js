const mainReduser = (state, action) => {
    // get data
    switch(action.type){
        case "CREATE_USER":
            return action.email
        default:
            return state 
    }
}

export default mainReduser