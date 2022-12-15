import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashCan, faListCheck } from "@fortawesome/free-solid-svg-icons";
library.add(faTrashCan, faListCheck);

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  const addNewTask = (event) => {
    event.preventDefault();
    if (input) {
      const obj = { title: input, isDone: false };
      const newTasks = [...tasks];
      newTasks.push(obj);
      setTasks(newTasks);
      setInput("");
    } else {
      setInput("");
      alert("Veuillez remplir le champ");
    }
  };
  const handleCheck = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isDone = !newTasks[index].isDone;
    setTasks(newTasks);
  };
  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="tasks-container">
          {tasks.map((task, index) => {
            return (
              <div key={index} className="task-container">
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheck(index);
                  }}
                  checked={task.isDone}
                />
                <span className={task.isDone ? "is-done" : null}>
                  {task.title}
                </span>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <FontAwesomeIcon className="trash" icon="trash-can" />
                </button>
              </div>
            );
          })}
        </div>

        <form onSubmit={addNewTask}>
          <input
            className="search"
            onChange={(event) => {
              handleInput(event);
            }}
            value={input}
            type="text"
            placeholder="New Task"
          />
          <input className="submit-button" type="submit" value="Add task" />
        </form>
      </main>
    </div>
  );
}

export default App;
