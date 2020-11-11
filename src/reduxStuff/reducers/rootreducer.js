import {combineReducers} from 'redux'
import modal from './modal'
import showcase from './showcases'
import result from './results'
import loading from './loading'

export default combineReducers(
    {
       modal,
       showcase,
       result,
       loading
    }
)
    
