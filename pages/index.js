import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  Button,
  Container,
  Box,
  Typography,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import CreateTodo from "../components/Modals/CreateTodo";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import TodoItem from "../components/TodoItem/TodoItem";
const Home = () => {
  const [select, setSelect] = useState(10);
  const todos = useSelector((state) => state.todoList.todos);

  useEffect(() => {}, []);
  return (
    <div>
      <Head>
        <title>Todo list</title>
        <meta name="description" content="todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="7xl">
        <Typography
          variant="h4"
          component={"h4"}
          fontWeight={600}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
            mt: "4rem",
            mb: "2rem",
          }}
        >
          {" "}
          Todo List
        </Typography>
        <Stack
          direction="row"
          sx={{
            width: { sm: "100%", md: "85%", lg: "65%", xl: "55%" },
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem auto",
          }}
        >
          <CreateTodo />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Age"
            // onChange={'}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
        <div
          sx={{
            width: { sm: "100%", md: "85%", lg: "65%", xl: "55%" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {todos
            ? todos.map((todo, idx) => {
                return <TodoItem key={idx} />;
              })
            : ""}
        </div>
      </Container>
    </div>
  );
};

export default Home;
