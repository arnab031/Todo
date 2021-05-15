import React from "react";
import FormTodo from "./component/FormTodo";
import Todo from "./component/Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is a sample todo",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
      <div className="h-full w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div className="mb-4">
        <h1 className="text-grey-darkest">Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
        </div>
        </div>
      
    </div>
  );
}

export default App;
