import {Epic} from 'redux-observable'
import {filter, mapTo} from 'rxjs/operators'
import * as actions from '../actions'
import {ActionTypeEnums, AppActionTypes} from '../types/ActionTypes'
import {AppState} from '../ConfigStore'

const IncrementEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$) =>
	action$.pipe(
		filter((action) => (action.type === ActionTypeEnums.INCREMENT)),
		mapTo(actions.LastActionDone('Increment'))
	)

const DecrementEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$) =>
	action$.pipe(
		filter((action) => (action.type === ActionTypeEnums.DECREMENT)),
		mapTo(actions.LastActionDone('Decrement')),
	)

const ResetEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$) =>
	action$.pipe(
		filter((action) => (action.type === ActionTypeEnums.RESET)),
		mapTo(actions.LastActionDone('Reset')),
	)

export default [
	IncrementEpic,
	DecrementEpic,
	ResetEpic,
]
