import React from 'react';
import PropTypes from 'prop-types';

import './Task.css';

// const Task = ({ id, title, isComplete })

const Task = (props) => {

  const onTaskCompleteButtonClick = () => {
    const updatedTask = {
      id: props.id,
      title: props.title,
      isComplete: !props.isComplete
    };
    props.update(updatedTask);

  };

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';


  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={onTaskCompleteButtonClick}>
        {props.title}
      </button>
      <button className="tasks__item__remove button" 
      onClick={()=> {props.deleteTask(props.id);
}}>
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

export default Task;
