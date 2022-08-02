import React from "react";
import { ACTIONS } from "./Todos.js";

const Todo = ({ todo, dispatch }) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.toggleTodo,
            payload: {
              id: todo.id,
              complete: todo.complete,
            },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: ACTIONS.deleteTodo,
            payload: {
              id: todo.id,
            },
          })
        }
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
