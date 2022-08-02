import { useReducer, useState } from "react";
import Todo from "./Todo.js";

export const ACTIONS = {
  addTodo: "add-todo",
  toggleTodo: "toggle-todo",
  deleteTodo: "deleteTodo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.addTodo:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.toggleTodo:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !action.payload.complete };
        }
        return todo;
      });
    case ACTIONS.deleteTodo:
      return todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: ACTIONS.addTodo,
      payload: {
        name: name,
      },
    });
    setName("");
  }

  return (
    <div>
      <div>{name}</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todos;
