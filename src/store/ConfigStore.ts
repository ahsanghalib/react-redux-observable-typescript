import {applyMiddleware, combineReducers, createStore} from 'redux'
import DefaultReducer from './reducers/DefaultReducer'
import {combineEpics, createEpicMiddleware} from 'redux-observable'
import {AppActionTypes} from './types/ActionTypes'
import epics from './epics/DefaultEpic'
import {composeWithDevTools} from 'redux-devtools-extension'

const rootReducer = combineReducers({
	default: DefaultReducer,
})

export type AppState = ReturnType<typeof rootReducer>

const epicMiddleware = createEpicMiddleware<AppActionTypes, AppActionTypes, AppState>()

const rootEpic = combineEpics(
	...epics,
)


const ConfigStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(epicMiddleware)),
	)
	
	epicMiddleware.run(rootEpic)
	
	return store
}

export default ConfigStore
