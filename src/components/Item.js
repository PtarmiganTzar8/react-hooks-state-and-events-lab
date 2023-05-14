import React, { useState } from "react";

function Item({ name, category }) {
  const [notCart, setIsOn] = useState(true);
  function handleClick() {
    setIsOn((notCart) => !notCart)
  }

  const color = notCart ? "white" : "magenta"

  return (
    <li className={notCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={"add"} style={{ background: color}} onClick={handleClick}>{notCart ? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
