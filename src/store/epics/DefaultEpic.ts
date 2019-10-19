import {Epic} from 'redux-observable'
import {filter, mapTo, mergeMap, withLatestFrom} from 'rxjs/operators'
import * as actions from '../actions'
import {ActionTypeEnums, AppActionTypes} from '../types/ActionTypes'
import {AppState} from '../ConfigStore'

const IncrementEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$) => {
	return action$.pipe(
		filter((action: AppActionTypes) => (action.type === ActionTypeEnums.INCREMENT)),
		mapTo(actions.LastActionDone('Increment')),
	)
}

const DecrementEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$) => {
	return action$.pipe(
		filter((action: AppActionTypes) => (action.type === ActionTypeEnums.DECREMENT)),
		mapTo(actions.LastActionDone('Decrement')),
	)
}

const ResetEpic: Epic<AppActionTypes, AppActionTypes, AppState> = (action$, state$) => {
	return action$.pipe(
		filter((action: AppActionTypes) => (action.type === ActionTypeEnums.SET_RESET)),
		withLatestFrom(state$),
		filter(() => state$.value.default.counter !== 0),
		mergeMap(() => [actions.ResetAction(), actions.LastActionDone('Reset')])
	)
}

export default [
	IncrementEpic,
	DecrementEpic,
	ResetEpic,
]
