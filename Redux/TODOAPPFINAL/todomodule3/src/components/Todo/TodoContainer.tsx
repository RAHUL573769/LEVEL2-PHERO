import TodoCard from "./TodoCard";
import TodoOperations from "./TodoOperations";

const TodoContainer = () => {
  return (
    <div>
      <TodoOperations></TodoOperations>
      <div className=" border border-blue-500 bg-primary-gradient w-full h-full rounded-xl space-y-10 p-[5px]">
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
