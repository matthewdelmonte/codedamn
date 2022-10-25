import { useRef, useState } from 'react';
import './App.css';

function App() {
  const ref = useRef(null);

  const [todolist, setTodolist] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const addTask = () => {
    setTodolist([...todolist, {task: currentTask, completed: false}])
    ref.current.value = "";
    setCurrentTask("");
  }

  const deleteTask = (taskToDelete) => {
    setTodolist(todolist.filter((item) => {return item.task !== taskToDelete}));
  }

  const completeTask = (taskToComplete) => {
    setTodolist(todolist.map((task) => {
      return task.task === taskToComplete ? {task: taskToComplete, completed: true} : {task: task.task, completed: task.completed ? true : false}
    }));
  }

  return (
    <div className="App">
        <h1>TODO List</h1>
      <div>
        <input ref={ref} type='text' placeholder='Task...' onKeyDown={(event) => {if (event.keyCode === 13) addTask()}} onChange={(event) => {setCurrentTask(event.target.value)}}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <hr />
      <ul>
        {todolist.map((task, key) => {
          return (
            <div id="task">
              <li className={task.completed && "complete"} key={key}>{task.task}</li>
              <button onClick={() => completeTask(task.task)}> Complete </button>
              <button onClick={() => deleteTask(task.task)}> Remove </button>
            </div>
          )
        })
      }
    </ul>
    </div>
  );
}

export default App;
