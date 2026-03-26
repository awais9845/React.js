import React, { useState } from "react";

const TodList = () => {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  arrayTodoList = [];
  const handleTodoList = (event) => {
    setTodoList([...event.target.value]);
  };
  const handleAddItem = () => {
    arrayTodoList.push(todoList);
  };

  return (
    <div className="w-[300px]  border flex flex-col gap-3">
      <div className="flex border ">
        \{" "}
        <input
          onChange={handleTodoList}
          type="text"
          className="w-full border"
        />
        <button onClick={handleAddItem} className="border">
          add item
        </button>
      </div>
      <div className="border">
        <p>{todoList}</p>
      </div>
    </div>
  );
};

export default TodList;
