import React from "react";
import { useState } from "react";
import TodoDisplay from "./TodoDisplay";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentTodoUnderUpdation, setcurrentTodoUnderUpdation] = useState({});


  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo !== "") {
      setTodos((todos) => {
        return [
          ...todos,
          {
            id: todos.length + 1,
            name: todo.trim(),
          },
        ];
      });
    }
    setTodo("");
  };

  const handleEditInputChange = (e) => {
    setcurrentTodoUnderUpdation({
      ...currentTodoUnderUpdation,
      name: e.target.value,
    });
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();

    console.log("called");

    handleUpdationOfTodo(currentTodoUnderUpdation.id, currentTodoUnderUpdation);
  };

  const handleUpdationOfTodo = (todoId, updatedTodo) => {
    const updatedList = todos?.map((todo) => {
      return todo.id === todoId ? updatedTodo : todo;
    });
    setIsUpdating(false);
    setTodos(updatedList);
  };

  console.log(todos);


  return (
    <main>
      {isUpdating ? (
        <>
          <form onSubmit={handleEditFormSubmit}>
            <div className="heading">Edit Todo</div>
            <input
              autoFocus
              type="text"
              name="editTodo"
              value={currentTodoUnderUpdation.name}
              onChange={(e) => handleEditInputChange(e)}
            />
          </form>
          <button onClick={(e) => handleEditFormSubmit(e)}>Save</button>
          <button onClick={() => setIsUpdating(false)}>Cancel</button>
        </>
      ) : (
        <>
        <h3>Add Todo</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="todo"
            onChange={(e) => handleChange(e)}
            value={todo}
          />
          <button type="submit">Add</button>
        </form>
        </>
      )}

      <TodoDisplay
        todos={todos}
        setTodos={setTodos}
        setIsUpdating={setIsUpdating}
        isUpdating={isUpdating}
        setcurrentTodoUnderUpdation={setcurrentTodoUnderUpdation}
      />
    </main>
  );
};

export default Todo;
