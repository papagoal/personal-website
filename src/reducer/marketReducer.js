import { createAction, handleActions } from 'redux-actions'

const INITIAL_APP_STATE = {
	apple: 1,
}

export const updateApple = createAction('UPDATE_APPLE')

export const marketReducer = handleActions({
	[updateApple]: (state, action) => ({
		...state,
		apple: action.payload
	})
}, INITIAL_APP_STATE)
