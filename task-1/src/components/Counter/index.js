// import useReducer from react
import React, { useReducer } from 'react';

// call the useReducer at the top

// function incrementCount() {
//   const updatedCount = count + 1;
//   setCount(updatedCount);
// }

// function decrementCount() {
//   const updatedCount = count - 1;
//   setCount(updatedCount);
// }

function reducer(count, action) {
	// remember it takes 2 arguments
	switch (
		action.type // built in object
	) {
		case 'INCREMENT':
			return count + 1;
		case 'DECREMENT':
			return count - 1;
		default:
			throw new Error('Not working');
	}
}

function Counter() {
	const [count, dispatch] = useReducer(reducer, 0); // dispatch updates the state based on the action that we define

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>ADD 1</button>
			<p>{count}</p>
			<button
				onClick={function () {
					dispatch({ type: 'DECREMENT' });
				}}>
				MINUS 1
			</button>
		</div>
	);
}

export default Counter;
