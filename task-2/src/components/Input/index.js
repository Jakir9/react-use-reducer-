//import { useState } from "react";
import "./input.css";
import { useReducer } from "react";

function Input({ addItem }) {
  //make our states for useReducer
  const [userInput, dispatch] = useReducer(reducer, "");

  //create reducer function which is our state 'bodyguard' - think Finite state automata
  function reducer(userInput, action) {
    console.log(userInput, action.payload);
    switch (action.type) {
      case "ADD_INPUT":
        return action.payload;
      default:
        throw new Error("invalid key");
    }
  }

  function handleChange(e) {
    // setUserInput(e.target.value);
    //dipatch function takes info about the action and hands it to the reducer function
    //the reducer function then decides what to do with the action
    //the reducer function then returns the new state
    //the dispatch function then updates the state
    //the state is then passed to the component
    //the component then re-renders

    dispatch({ type: "ADD_INPUT", payload: e.target.value });
    console.log(userInput);
  }

  function handleClick() {
    addItem(userInput);
    dispatch({ type: "ADD_INPUT", payload: "" });
  }

  return (
    <div id="input">
      <label>
        Bootcamper name: <input value={userInput} onChange={handleChange} />
      </label>
      <button onClick={handleClick}>Add to bootcamper list</button>
    </div>
  );
}

export default Input;
