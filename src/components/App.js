import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });
let accessibleTasks = TASKS;

function App() {
  const [category, setCategory] = useState("All");
  const [setTasks] = useState("All");

  function handleAddTask(newTask) {
    
    // Avoid direct state mutation by using the Spread Operator
    accessibleTasks = [...TASKS, newTask]
    
    // Whenever we are updating state via Functional Components, it's necessary
    // that we pass a new object/array to "setState." Otherwise, it won't trigger
    // a re-render.
    // https://jkettmann.com/how-to-accidentally-mutate-state-and-why-not-to#hold-on-were-in-2020-what-about-functional-components
    // return newTasksArray;
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES} handleAddTask={handleAddTask} tasks={TASKS} />
      <TaskList tasks={TASKS}/>
    </div>
  );
}

export default App;
