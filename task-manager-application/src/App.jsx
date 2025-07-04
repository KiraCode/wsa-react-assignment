import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";

export default function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText };
    setTasks((prev) => [...prev, newTask]);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  return (
    <div className="wrapper">
      <div className="container">
        <TaskInput onAddTask={addTask} />
        {tasks.length > 0 ? (
          <div className="task-list">
            {tasks.map((task) => (
              <TaskItem key={task.id} task={task} onDelete={deleteTask} />
            ))}
          </div>
        ) : (
          <p className="empty-msg">No tasks added yet</p>
        )}
      </div>
    </div>
  );
}
