import "./app.css";

import Input from "../Input";
import List from "../List";
//import { useState } from "react";
import { useReducer } from "react";

function reducer(names, action) {
  switch (action.type) {
    case "ADD_NAME":
      return [...names, action.name];
    default:
      throw new Error("invalid key");
  }
}

function App() {
  //const [names, setNames] = useState([]);
  const [names, dispatch] = useReducer(reducer, []);

  return (
    <main>
      <Input
        addItem={(userInput) => {
          dispatch({ type: "ADD_NAME", name: userInput });
        }}
      />
      <List items={names} />
    </main>
  );
}

export default App;
