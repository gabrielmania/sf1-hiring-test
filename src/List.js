import React from "react";

export default function List() {
  const [newItem, setNewItem] = React.useState("");
  const [todoList, setTodoList] = React.useState([]);

  function handleChange(evt) {
    setNewItem(evt.target.value);
  }

  function handleClick(evt) {
    if (newItem === "") {
      // Alerts the user if the input is empty
      return alert("Your todo list cannot be empty");
    }
    setTodoList((prevList) => {
      return [...prevList, newItem];
    });
    // Clears input value after submitting the new item
    setNewItem("");
  }

  return (
    <div>
      <h1>3. Add to a list</h1>
      <input onChange={handleChange} value={newItem} />
      <button onClick={handleClick}>Add Task</button>
      {/* Maps the todo list in a ul */}
      <ul>
        {todoList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
