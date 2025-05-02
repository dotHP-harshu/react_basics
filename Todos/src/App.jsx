import { useState } from "react";
import InputBox from "./components/InputBox";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <main className="bg-gray-800 p-6 w-[80%] rounded-2xl overflow-hidden ">
      <h1 className="mb-6 font-bold text-xl ">To-do App</h1>
      <InputBox todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodolist={setTodoList} />
    </main>
  );
}

export default App;
