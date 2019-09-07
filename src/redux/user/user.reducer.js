// a reducer is just a function that gets 2 properties: 
// state(previous state), and an action(obj with type, and payload)

const INITIAL_STATE = {
    // dont forget null is considered a value!
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER': 
            return {
                ...state,
                currentUser: action.payload
            }
        default: 
            return state;
    }
}

export default userReducer;