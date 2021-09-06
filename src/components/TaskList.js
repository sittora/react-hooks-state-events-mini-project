import React from "react";
import Task from "./Task";

function TaskList({tasks, onDeleteTask}) {
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
        {console.log("tasks: ***", tasks)}
         {tasks.map ((task, index) => (
           <Task key={index} text={task.text} category={task.category}  onDeleteTask={onDeleteTask}/>
         ))}
    </div>
  );
}

export default TaskList;
