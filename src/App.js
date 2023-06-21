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
  const API = 'https://task-list-api-c17.onrender.com/tasks';

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
      axios
        .patch(`${API}/${updatedTask.id}/mark_complete`)
        .then((result) => {
          console.log(result.data);
          const newTasks = tasks.map(task => {
            if (task.id === updatedTask.id) {
              return updatedTask;
            } else {
              return task;
            }
          });
      
          setTasks(newTasks);
        })
        .catch((error) => {
          console.log(error);
        });
          
      };

  const deleteTask = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then((result) => {
        console.log(result.data)
        const newTasks = [];
        for (let task of tasks) {
          if (task.id !== id) {
            newTasks.push(task);
          }
        }
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
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
