"use client";
import { useState } from "react";
import '@groww-tech/mint-css/dist/index.css';
import styles from "./page.module.css";


export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task.trim()]);
      setTask("");
    }
  };


  const handleDeleteTask = (index: number): void => {
    const updatedTasks: string[] = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={`${styles.page} contentAccent backgroundSecondary`}>
      <main className={styles.main}>
        <h1 className={styles.title}>Simple Todo App</h1>
        <div className={`${styles.todoContainer} contentPrimary`}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a new task"
            className={`${styles.input} contentPrimary borderPrimary`}
          />
          <button onClick={handleAddTask} className={`${styles.addButton} backgroundAccentSubtle`}>
            Add Task
          </button>
        </div>
        <ul className={styles.taskList}>
          {tasks.map((task, index) => (
            <li key={index} className={styles.taskItem}>
              {task}
                <button
                onClick={() => handleDeleteTask(index)}
                className={`${styles.deleteButton} backgroundNegativeSubtle`}
                >
                Delete
                </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
