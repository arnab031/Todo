import React from "react";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");

  const todoSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form
      onSubmit={todoSubmit}
      className="flex mt-4"
    >
        <input
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />{" "}
        <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Submit</button>
    </form>
  );
}

export default FormTodo;
