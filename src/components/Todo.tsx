import * as React from "react";

interface Props {
  id: string;
  todoName: string;
  isComplete: boolean;
  dispatch: Function;
}

const Todo: React.FC<Props> = (props) => {
  const { id, todoName, isComplete, dispatch } = props;

  const completedStyle: React.CSSProperties = {
    color: isComplete ? "#aaa" : "#000",
    textDecoration: isComplete ? "line-through" : "",
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
