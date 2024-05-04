import React from "react";

const TodoDisplay = ({
  todos = [],
  setTodos = () => {},
  setIsUpdating,
  isUpdating,
  setcurrentTodoUnderUpdation,
}) => {
  const handleUpdate = (todo) => {
    setIsUpdating(true);
    setcurrentTodoUnderUpdation({ ...todo });
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <main>
      {todos &&
        todos?.map((todo) => {
          return (
            <div key={todo.id}>
              <span>{todo.name}</span>
             
                  <button onClick={() => handleUpdate(todo)}>Update</button>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </div>
          );
        })}
    </main>
  );
};

export default TodoDisplay;
