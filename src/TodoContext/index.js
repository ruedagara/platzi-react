import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: setTodos,
    loading,
    error,
    openModal,
    setOpenModal,
  } = useLocalStorage("", []);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (key) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(({ text }) => text === key);
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (key) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(({ text }) => text === key);
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        loading,
        error,
        completedTodos,
        totalTodos,
        searchedTodos,
        completeTodo,
        deleteTodo,
        setSearchValue,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
