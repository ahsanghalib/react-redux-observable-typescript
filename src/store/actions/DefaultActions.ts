import {
	ActionTypeEnums,
	DecrementActionType,
	IncrementActionType,
	LastActionType,
	ResetActionType,
	setResetActionType,
} from '../types/ActionTypes'

export const IncrementAction = (): IncrementActionType => {
	return {
		type: ActionTypeEnums.INCREMENT
	}
}

export const DecrementAction = (): DecrementActionType => {
	return {
		type: ActionTypeEnums.DECREMENT
	}
}

export const ResetAction = (): ResetActionType => {
	return  {
		type: ActionTypeEnums.RESET
	}
}

export const setResetAction = (): setResetActionType => {
	return  {
		type: ActionTypeEnums.SET_RESET
	}
}

export const LastActionDone = (action: string): LastActionType => {
	return {
		type: ActionTypeEnums.LAST_ACTION,
		action: action
	}
}
