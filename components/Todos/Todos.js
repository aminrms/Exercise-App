import { Typography, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const TodoItem = dynamic(() => import("../TodoItem/TodoItem"), {
  ssr: false,
});
const Todos = () => {
  const todos = useSelector((state) => state.todoList.todos);
  const status = useSelector((state) => state.todoList.status);

  const FilterTodos = todos.filter((todo) => {
    if (status === "all") {
      return true;
    }
    return todo.status === status;
  });
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1, transformX: 0 }}
      initial={{ opacity: 0, scale: 1, translateX: "0%" }}
      exit={{
        opacity: 0,
      }}
      transition={{ duration: 0.65 }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {FilterTodos.length > 0 ? (
        FilterTodos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4" fontWeight={500} color="white">
            No todos
          </Typography>
        </Box>
      )}
    </motion.div>
  );
};

export default Todos;
