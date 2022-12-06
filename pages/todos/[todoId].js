import Head from "next/head";
import { useRouter } from "next/router";

const Todo = () => {
  const { query } = useRouter();
  return <>{query.todoId}</>;
};

export default Todo;
