import React from "react";
import TodoContainer from "./../components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center font-semibold text-3xl ">My Todos</h1>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
