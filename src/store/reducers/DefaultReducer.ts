import {DefaultStoreType} from '../types/StoreTypes'
import {
	ActionTypeEnums,
	AppActionTypes,
	DecrementActionType,
	IncrementActionType,
	LastActionType,
	ResetActionType,
} from '../types/ActionTypes'

const initialState: DefaultStoreType = {
	counter: 0,
	lastAction: '',
}

const onIncrement = (state: DefaultStoreType, action: IncrementActionType): DefaultStoreType => {
	const newState = {} as DefaultStoreType
	newState.counter = state.counter + 1
	return {...state, ...newState}
}

const onDecrement = (state: DefaultStoreType, action: DecrementActionType): DefaultStoreType => {
	const newState = {} as DefaultStoreType
	newState.counter = state.counter - 1
	return {...state, ...newState}
}

const onReset = (state: DefaultStoreType, action: ResetActionType): DefaultStoreType => {
	const newState = {} as DefaultStoreType
	newState.counter = 0
	return {...state, ...newState}
}

const LastAction = (state: DefaultStoreType, action: LastActionType): DefaultStoreType => {
	const newState = {} as DefaultStoreType
	newState.lastAction = action.action
	return {...state, ...newState}
}

const DefaultReducer = (state = initialState, action: AppActionTypes) => {
	switch (action.type) {
		case ActionTypeEnums.INCREMENT:
			return onIncrement(state, action)
		case ActionTypeEnums.DECREMENT:
			return onDecrement(state, action)
		case ActionTypeEnums.RESET:
			return onReset(state, action)
		case ActionTypeEnums.LAST_ACTION:
			return LastAction(state, action)
		default:
			return state
	}
}

export default DefaultReducer
