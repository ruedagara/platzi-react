import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

const defaultTodos = [
  { text: "Cortar Cebolla", completed: true },
  { text: "Cortar Pastel", completed: false },
  { text: "Tomar Trago", completed: false },
  { text: "Llorar", completed: false },
  { text: "Comer", completed: true },
];

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
