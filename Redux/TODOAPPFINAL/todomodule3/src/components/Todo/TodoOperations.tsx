import { Button } from "../ui/button";

const TodoOperations = () => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <Button>Add ToDo</Button>
        <Button>Filter</Button>
      </div>
    </div>
  );
};

export default TodoOperations;
