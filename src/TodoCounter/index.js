import "./TodoCounter.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  if (totalTodos === completedTodos) {
    return <h1 className="TodoCounter">Care Coquito</h1>;
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TODOS
    </h1>
  );
}

export { TodoCounter };
