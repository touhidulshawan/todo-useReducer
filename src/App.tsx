import * as React from "react";
import { useReducer } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
export interface Todos {
  id: string;
  todoName: string;
  isCompleted: boolean;
}

interface AddTodoAction {
  type: "add_todo";
  payload: { name: string };
}

interface ModifyTodoAction {
  type: "toggle_todo" | "delete_todo";
  payload: { id: string };
}

type TodoAction = AddTodoAction | ModifyTodoAction;

const reducer = (todos: Array<Todos>, action: TodoAction) => {
  switch (action.type) {
    case "add_todo":
      return [...todos, newTodo(action.payload.name)];

    case "toggle_todo":
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });

    case "delete_todo":
      return todos.filter((todo) => todo.id !== action.payload.id);

    default:
      return todos;
  }
};

const newTodo = (name: string): Todos => {
  return { id: uuid(), todoName: name, isCompleted: false };
};

const App: React.FC = () => {
  const [todos, dispatch] = useReducer(reducer, []);

  const renderTodo = todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        id={todo.id}
        todoName={todo.todoName}
        isComplete={todo.isCompleted}
        dispatch={dispatch}
      />
    );
  });

  return (
    <main>
      <TodoForm dispatch={dispatch} />
      {renderTodo}
    </main>
  );
};

export default App;
