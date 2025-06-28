import { useState } from "react";
import Todos from "./Todos"; 
import './App.css';
const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => setCount(c => c + 1);
  const addTodo = () => setTodos(t => [...t, "New Todo"]);

  return (
    <>
    <div className="container">
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
      </div>
    </>
  );
};

export default App; 
