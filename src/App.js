import React from 'react';
import { useState, useEffect} from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {

  const [tasks, setTasks] = useState([]);
  const API = 'https://task-list-api-c17.onrender.com/';

  useEffect(() => {
    axios
      .get(API)
      .then((result) => {
        setTasks(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateTaskData = updatedTask => {
    const newTasks = 
      axios
        .patch(`${API}/${task_id}/mark_incomplete`, {task: newTasks})
        .then((result) => {
          console.log(result.data);
          const
        })
    
    tasks.map(task => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(
      (task) => task.id !== id
    );
    setTasks(newTasks);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={tasks} updateTaskData= {updateTaskData} deleteTask={deleteTask} />}</div>
      </main>
    </div>
  );
};

export default App;
