const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center">
        <input type="checkbox" name="" id="" />

        <p>Todo Title</p>
        <p>Time</p>
        <p>Description</p>
        <div>
          <button>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
