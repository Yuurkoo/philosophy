import React, { useState, useEffect } from "react";
import "./index.css";

const Notice = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("todo");
    if (data) {
      const { list, count } = JSON.parse(data);
      setTasks(list);
      setCount(count);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify({ list: tasks, count }));
  }, [tasks, count]);

  const handleAdd = () => {
    if (inputValue.length > 1) {
      const newTask = { id: count + 1, text: inputValue, done: false };
      setTasks([...tasks, newTask]);
      setCount(count + 1);
      setInputValue("");
    }
  };

  const handleToggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Видалити завдання?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="settings">
      <div className="page">
        <h1 className="title">Нотатки</h1>
        <div className="form">
          <input
            type="text"
            className="form__input"
            placeholder="Зробіть запис..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="form__button" onClick={handleAdd}>
            Додати
          </button>
        </div>
        <main className="task__list">
          {tasks.length === 0
            ? "Наразі список пустий"
            : tasks.map((task) => (
                <div
                  key={task.id}
                  className={`task ${task.done ? "task--done" : ""}`}
                >
                  <span className="task__number">{task.id}.</span>
                  <span className="task__text">{task.text}</span>
                  <button
                    className={`task__button ${
                      task.done ? "task__button--done" : "task__button--do"
                    }`}
                    onClick={() => handleToggleDone(task.id)}
                  />
                  <button
                    className="task__button task__button--cancel"
                    onClick={() => handleDelete(task.id)}
                  />
                </div>
              ))}
        </main>
      </div>
    </div>
  );
};

export default Notice;
