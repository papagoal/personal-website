import { combineReducers } from 'redux'
import { marketReducer } from './marketReducer'

const rootReducer = combineReducers({
	market: marketReducer,
})

export default rootReducer
