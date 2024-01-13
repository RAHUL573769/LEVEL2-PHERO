import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <h1>This is Todo Container</h1>

      <div>
        <button>Add To Do</button>
        <button>Filter </button>
      </div>

      <div className=" bg-red-500 w-full h-[500px] rounded-xl p-5">
        <div className="bg-white rounded-md flex justify-between items-center p-4">
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
