import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, filterBy] = useState("All")
  
  function filterDecision(event) {
    filterBy(event.target.value);
  }

  const displayingOptions = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    }  else return item.category === selectedCategory;
  });
  
  console.log(displayingOptions)
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={filterDecision}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayingOptions.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
