import * as React from "react";
import { Todos, TodoAction } from "../App";

interface Props extends Todos {
  dispatch: React.Dispatch<TodoAction>;
}

const Todo: React.FC<Props> = (props) => {
  const { id, todoName, isCompleted, dispatch } = props;

  const completedStyle: React.CSSProperties = {
    color: isCompleted ? "#aaa" : "#000",
    textDecoration: isCompleted ? "line-through" : "",
    cursor: "pointer",
  };

  const handleToggle = (id: string) => {
    dispatch({ type: "toggle_todo", payload: { id: id } });
  };

  const handleDelete = (id: string) => {
    dispatch({ type: "delete_todo", payload: { id: id } });
  };

  return (
    <div>
      <p style={completedStyle} onClick={() => handleToggle(id)}>
        {todoName}
      </p>
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
