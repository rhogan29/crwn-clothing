// this is the base reducer object that represents all of our app state
// combines all of our other states together 
import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
});


