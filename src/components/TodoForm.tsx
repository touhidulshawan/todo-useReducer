import * as React from "react";
import { useState } from "react";

interface Props {
  dispatch: Function;
}

const TodoForm: React.FC<Props> = ({ dispatch }) => {
  const [todoName, setTodoName] = useState("");

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTodoName(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    dispatch({ type: "add_todo", payload: { name: todoName } });
    setTodoName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoName}
        placeholder="Type new todo"
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoForm;
