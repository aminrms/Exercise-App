import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";
const Todos = () => {
  const todos = useSelector((state) => state.todoList.todso);

  return (
    <div>
      {todos
        ? todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })
        : ""}
    </div>
  );
};

export default Todos;
