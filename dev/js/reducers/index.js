import { combineReducers } from 'redux';
import UserReducers from './Users-Reducers';
import { reducer as formReducer } from 'redux-form'



const allReducers = combineReducers({
    UserReducers : UserReducers,
    form: formReducer
})

export default allReducers;