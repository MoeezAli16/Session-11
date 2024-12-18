import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todosSlice"; 

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); 


  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id)); 
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Your Todo List</h2>
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="border p-4 rounded-lg shadow flex justify-between items-center"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => handleRemoveTodo(todo.id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No todos available</p>
      )}
    </div>
  );
};

export default Todos;
