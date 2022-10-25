import { useRef, useState } from 'react';
import './App.css';

function App() {
  const ref = useRef(null);

  const [todolist, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodolist([...todolist, currentTask])
    ref.current.value = "";
    setCurrentTask("");
    console.log(todolist)
  }

  const deleteTask = (taskToDelete) => {
    setTodolist(todolist.filter((item) => {return item !== taskToDelete}));
  }

  return (
    <div className="App">
        <h1>TODO List</h1>
      <div>
        <input ref={ref} type='text' placeholder='Task...' onChange={(event) => {setCurrentTask(event.target.value)}}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <hr />
      <ul>
        {todolist.map((task, key) => {
          return (
            <div id="task">
              <li key={key}>{task}</li>
              <button onClick={() => deleteTask(task)}> Remove </button>
            </div>
          )
        })
      }
    </ul>
    </div>
  );
}

export default App;
