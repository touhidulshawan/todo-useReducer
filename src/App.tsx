import * as React from "react";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import TodoForm from "./components/TodoForm";
export interface Todos {
  id: string;
  todoName: string;
  isCompleted: boolean;
}

type TodoAction = {
  type: "add_todo" | "toggle_todo" | "delete_todo";
  payload: { name: string };
};

const reducer = (todos: Array<Todos>, action: TodoAction) => {
  switch (action.type) {
    case "add_todo":
      return [...todos, newTodo(action.payload.name)];

    default:
      return todos;
  }
};

const newTodo = (name: string): Todos => {
  return { id: uuid(), todoName: name, isCompleted: false };
};

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <main>
      <TodoForm dispatch={dispatch} />
    </main>
  );
};

export default App;
