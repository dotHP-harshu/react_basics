import Todo from "./Todo";

export default function TodoList({ todoList, setTodolist }) {
  return (
    <ul className="todolist-container mt-6 max-h-[60vh] h-[60vh] overflow-auto">
      {todoList.length != 0 ? (
        <p className="text-sm text-gray-400">Remaining todos</p>
      ) : (
        <p className="text-sm text-gray-400">No todo. Make a todo!</p>
      )}
      {todoList.map((todo, index) => (
        <Todo todo={todo} key={todo.id} setTodoList={setTodolist} />
      ))}
    </ul>
  );
}
