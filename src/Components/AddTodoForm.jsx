import React, { useState, useEffect } from "react";
import axios from "axios";
import AddTodoForm from "./AddTodoForm";

const ApiFetch = () => {
  const [todos, setTodos] = useState([]);
  const apiUrl = "http://49.13.2.10:4000/todos";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setTodos(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleTodoAdded = (newTodo) => {
    setTodos([...todos, newTodo]); // Update todos list with the new todo
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <AddTodoForm apiUrl={apiUrl} onTodoAdded={handleTodoAdded} />
      {/* Todo list rendering */}
    </div>
  );
};

export default ApiFetch;
