import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import * as actions from './store/actions'
import {AppState} from './store/ConfigStore'

const App: React.FC = () => {
	const {counter, lastAction} = useSelector((state: AppState) => state.default, shallowEqual)
	const dispatch = useDispatch()
	
	const increment = () => {
		dispatch(actions.IncrementAction())
	}
	
	const decrement = () => {
		dispatch(actions.DecrementAction())
	}
	
	const reset = () => {
		dispatch(actions.setResetAction())
	}
	
	return (
		<div style={{padding: '50px'}}>
			<h2>Sample app for testing redux-observables using typescript</h2>
			<h3>Last Action: {lastAction} </h3>
			<h3>Counter: {counter}</h3>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
}

export default App;
