import "./CreateTodoButton.css";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const { openModal, setOpenModal } = useContext(TodoContext);
  return (
    <button
      className="createTodoButton"
      onClick={() => setOpenModal(!openModal)}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
