import { useState, useReducer } from "react";

const ACTION_TYPE = {
  decrement: "decrement",
  increment: "increment",
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.decrement:
      return { count: state.count - 1 };
    case ACTION_TYPE.increment:
      return { count: state.count + 1 };
    default:
      return;
  }
};
function App() {
  // const [count, setCount] = useState(0);
  // const decrement = () => {
  //   setCount((previous) => previous - 1);
  // };
  // const increment = () => {
  //   setCount((previous) => previous + 1);
  // };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: ACTION_TYPE.decrement })}>
        -
      </button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: ACTION_TYPE.increment })}>
        +
      </button>
    </div>
  );
}

export default App;
