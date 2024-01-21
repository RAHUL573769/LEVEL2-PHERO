import { Button } from "../ui/button";

const TodoCard = () => {
  return (
    <div>
      <div className="bg-white rounded-md flex justify-between items-center">
        <input type="checkbox" name="" id="" />

        <p className="font-semibold">Todo Title</p>
        <p className="font-semibold">Time</p>
        <p className="font-semibold">Description</p>
        <div className="space-x-5">
          <Button className="bg-red-500">Delete</Button>
          <Button>Edit</Button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
