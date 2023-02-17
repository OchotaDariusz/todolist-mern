import React from "react";
import TodoElement from "../TodoElement/TodoElement";

export default function TodoList({ todoList, setTodoList }) {
  return (
    <div>
      {todoList.map((task) => (
        <TodoElement
          setTodoList={setTodoList}
          taskName={task.title}
          key={task._id}
          taskID={task._id}
        />
      ))}
    </div>
  );
}
