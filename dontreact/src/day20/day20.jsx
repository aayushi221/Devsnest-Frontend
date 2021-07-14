import React, { useState } from "react";
import FoodItem from "./foodItems";
import { List } from "./list";
import "./day20.css";

const Day20 = () => {
  const [listItem, setListItem] = useState(List);
  const deleteHandler = (id) => {
    let updatedList = listItem.filter((item) => item.id !== id);
    setListItem(updatedList);
  };

  return (
    <div className="App">
      <header>
        <h1>Calorie Counter</h1>
      </header>
      <div className="container">
        {listItem.length > 0 ? (
          listItem.map((item, index) => {
            return (
              <FoodItem
                key={index}
                item={item}
                deleteHandler={deleteHandler}
              ></FoodItem>
            );
          })
        ) : (
          <h1 id="no-item">No Item</h1>
        )}
      </div>
    </div>
  );
}

export default Day20;