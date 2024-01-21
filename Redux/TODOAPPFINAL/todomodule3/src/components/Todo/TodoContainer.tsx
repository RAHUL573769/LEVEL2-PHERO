import TodoCard from "./TodoCard";
import TodoOperations from "./TodoOperations";

const TodoContainer = () => {
  return (
    <div>
      <TodoOperations></TodoOperations>
      <div className="bg-primary-gradient w-full h-full rounded-xl space-y-7 p-[5px]">
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
