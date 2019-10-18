export enum ActionTypeEnums {
	INCREMENT = 'INCREMENT',
	DECREMENT = 'DECREMENT',
	RESET = 'RESET',
	LAST_ACTION = 'LAST_ACTION'
}

export interface IncrementActionType {
	type: ActionTypeEnums.INCREMENT
}

export interface DecrementActionType {
	type: ActionTypeEnums.DECREMENT
}

export interface ResetActionType {
	type: ActionTypeEnums.RESET
}

export interface LastActionType {
	type: ActionTypeEnums.LAST_ACTION
	action: string
}


export type AppActionTypes =
	IncrementActionType
	| DecrementActionType
	| ResetActionType
	| LastActionType
