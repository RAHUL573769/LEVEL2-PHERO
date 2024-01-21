import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div>
        <button>Add ToDo</button>
        <button>Filter</button>
      </div>

      <div className="bg-red-500 w-full rounded-xl h-[500px] p-5 space-y-3">
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>

        <TodoCard></TodoCard>

        {/* <TodoNoTask></TodoNoTask> */}
      </div>
    </div>
  );
};

export default TodoContainer;
