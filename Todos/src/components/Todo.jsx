import { useState } from "react";

export default function Todo({ todo, setTodoList }) {
  const toggleCompletetion = () => {
    setTodoList((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    setTodoList((prevTodos) => prevTodos.filter((t) => t.id != todo.id));
  };

  return (
    <li
      className={`my-4 flex items-center justify-start gap-2 relative pr-14 ${
        todo.completed ? "line-through" : ""
      }`}
    >
      <span
        className={`inline-block  w-4 h-4 shrink-0 border-white border-2 rounded-full cursor-pointer ${
          todo.completed ? "bg-blue-600" : ""
        }`}
        onClick={() => {
          toggleCompletetion();
        }}
      ></span>
      {todo.text}
      <button
        className="w-6 h-6 cursor-pointer rounded-full absolute top-1/2 right-8 -translate-y-1/2"
        onClick={() => {
          deleteTodo();
        }}
      >
        <img
          src="/images/delete.png"
          alt="delete-btn"
          className="w-full h-full object-center"
        />
      </button>
    </li>
  );
}
