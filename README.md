# useReducer Workshop

## Task 1: Refactor a counter with useReducer

- `cd` to the `task-1` folder in your terminal.
- Navigate to src/components/Counter.
- Use the links to the documentation below to refactor the `Counter` component so that it uses `useReducer` instead of `useState`:
  - https://reactjs.org/docs/hooks-reference.html#usereducer
  - https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer
  - https://beta.reactjs.org/apis/react/useReducer

Remember to **write a plan, including planning out the actions**, before coding!

## Task 2: Refactor a list with useReducer

- `cd` to the `task-2` folder.
- Refactor the `names` state to use `useReducer` instead when adding names to the list.

## Bonus tasks

### Bonus 1: Add logic to your task 2 reducer

- Refactor your logic in task 2 so that you are providing a unique key prop of an id along with each name in the list.
- Use this id as the key prop when the names are listed in the List component's `map` function.

**Remember to make all updates immutably using spread and slice!**

### Bonus 2: Create another piece of useReducer functionality

- Once your functionality from the tasks above is working, brainstorm another piece of functionality that can be handled as a finite state machine using useReducer.
- Plan out how your reducer will work, including which action types, before you write your code.
- Only when you have a fully fleshed out plan, code your idea into a useReducer.

### Bonus 3: Test Your Reducer

- Try out testing your reducer function(s) using Jest. Start with the counter!

**NOTE: Jest is already installed as part of Create-React-App. Don't manually `npm i jest`, or it will break!**
