import React from "react";
import {useState} from "react";


function NewTaskForm({handleAddTask, categories, tasks}) {
const formOptions = categories.map ((category,index) => {
  if (category !== "All") {
    return (
      <option key={index} value={category}>{category}</option>  
    )
  }
});

const [ formData, formDataSetter ] = useState({
  text: "",
  category: ""
});

function manageFormData(event) {
  // Capture name and value from target of event
  let targetName = event.target.name;
  let targetValue = event.target.value;

  // Update formData state with new form submission data
  formDataSetter({
      // what we want to modify
      ...formData,

      // key / value pairing to be updated
      [targetName]: targetValue  
  });
}

function onTaskFormSubmit(event) {
  // console.log("handleSubmit fired");

  // Prevent default form submission behavior
  event.preventDefault();

  // Create newTask JS object with formData and generate
  // a unique ID for each new object
  const newTask = {
      id: tasks.length + 1,
      text: formData.text,
      category: formData.category
  }

  // Use handleAddTask from props to add the newCard JS object
  // to the existing array of Task objects (tasks)
  handleAddTask(newTask);

  // Clear out input values upon form submission using formDataSetter
  formDataSetter({
      title: "",
      content: ""
  });
}

  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input type="text" name="text"  onChange={manageFormData} />
      </label>
      <label>
        Category
        <select name="category">
          {formOptions}
        </select>
      </label>
      <input type="submit" value="Add task"  onChange={manageFormData}/>
    </form>
  );
}

export default NewTaskForm;
