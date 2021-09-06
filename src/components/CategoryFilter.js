import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const categoryButtons = categories.map ((category, index) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button 
        onClick={() => onSelectCategory(category)}
        className={className}
        key={index}
      >
        {category}
      </button>
    )
  });
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;


// Whichever button was clicked should have a class of selected. The other buttons should not have any class assigned.
// The list of tasks being displayed should be filtered, so that only tasks that match the category that was clicked are displayed.
// If the button for "All" is selected, all the tasks should be displayed.