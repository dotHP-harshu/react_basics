import { useState } from "react";

export default function InputBox({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const updateTodoList = (todo) => {
    setTodoList([
      ...todoList,
      { id: Date.now(), text: todo, completed: false },
    ]);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            if (inputValue === "") {
              alert("Todo can't be empty");
            } else {
              updateTodoList(inputValue);
              setInputValue("");
            }
          }
        }}
        autoFocus={true}
        type="text"
        placeholder="Press 'Enter' to make a todo."
        className="w-full text-base pb-3 outline-none border-b-[1px] border-gray-600"
      />
    </form>
  );
}
