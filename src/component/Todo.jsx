import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div>
      <div className="flex mb-4 mt-4 items-center">
        <p
          className="w-full text-grey-darkest"
          style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
        >
          {todo.text}
        </p>
        <button
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          onClick={() => markTodo(index)}
        >
          Done
        </button>{" "}
        <button
          className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red"
          onClick={() => removeTodo(index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default Todo;
