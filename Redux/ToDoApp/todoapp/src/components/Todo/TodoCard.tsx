import React from "react";

const TodoCard = () => {
  return (
    <div>
      {" "}
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Tile</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <button>Del</button>
        <button>Edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
