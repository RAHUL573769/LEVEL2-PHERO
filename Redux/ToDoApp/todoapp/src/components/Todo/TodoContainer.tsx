// import TodoCard from "./TodoCard";

// import { Button } from "../ui/button";
import { DialogDemo } from "./AddModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
// import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <div>
      <h1>This is Todo Container</h1>

      <div className="flex justify-between mb-5">
        <DialogDemo></DialogDemo>
        <TodoFilter></TodoFilter>
        {/* <TodoFilter></TodoFilter> */}
      </div>

      <div className=" bg-red-500 w-full h-[500px] rounded-xl p-5 space-y-4">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
          <TodoCard></TodoCard>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
