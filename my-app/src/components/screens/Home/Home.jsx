import React, { useState } from "react";
import CreateTodoField from "./create-todo-field/CreateTodoField";
import TodoItem from "./item/TodoItem";

const data = [
  {
    _id: 1,
    title: "Finish the essay collabration",
    isCompleted: false,
  },
  {
    _id: 2,
    title: "Read next chapter of the book",
    isCompleted: false,
  },
  {
    _id: 3,
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

function Home() {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id !== id));
  };
	
  return (
    <div className="text-white w-4/5 mx-auto">
      <h4 className="text-2xl font-bold text-center mb-10">My Todo</h4>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
}

export default Home;
