import React from "react";
import { pizzaData } from "../data.js";
import Pizza from "./Pizza.jsx";
const Menu = () => {
  const menuLength = pizzaData.length;

  return (
    <div className="menu">
      <h2>The Menu</h2>

      {menuLength > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza item={pizza} key={pizza.key} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </div>
  );
};

export default Menu;
