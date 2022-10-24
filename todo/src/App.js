import { useRef, useState } from 'react';
import './App.css';

function App() {
  const ref = useRef(null);

  const [todolist, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodolist([...todolist, currentTask])
    ref.current.value = "";
    console.log(todolist)
  }

  const removeTask = () => {
    setTodolist((...todolist) => todolist.filter((_, index) => index !== _.key));
  }

  return (
    <div className="App">
        <h1>TODO List</h1>
      <div>
        <input ref={ref} type='text' placeholder='Task...' onChange={(event) => {setCurrentTask(event.target.value)}}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <hr />
      <div className="list">
        {todolist.map((li, key) => {
          return <div className="list-items">
                    <label key={key}>{li}</label>
                    <input type={"checkbox"} id={key} /> 
                    <button onClick={removeTask}> Remove </button>
                  </div>;
          })
        }
      </div>
    </div>
  );
}

export default App;
