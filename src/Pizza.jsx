import React from "react";

const Pizza = ({ item }) => {
  return (
    <li className={`pizza ${item.soldOut ? "sold-out" : ""}`}>
      <img src={item.photoName} alt={item.name + "pizza"} />
      <div>
        <h3>{item.name}</h3>
        <p>{item.ingredients}</p>
        <span>{item.soldOut ? "SOLD OUT" : "$" + item.price}</span>
      </div>
    </li>
  );
};

export default Pizza;
