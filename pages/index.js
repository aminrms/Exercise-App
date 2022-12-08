import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  Container,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import CreateTodo from "../components/Modals/CreateTodo";
import { useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { selectOptions } from "../utils/constants";
import { updateStatus } from "../feature/reducers/todoSlice";

const Todos = dynamic(() => import("../components/Todos/Todos.js"), {
  ssr: false,
});

const Home = () => {
  const [select, setSelect] = useState("all");
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Todo list</title>
        <meta name="description" content="todo list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxWidth="7xl">
        <Stack
          direction={"row"}
          sx={{
            display: "flex",
            alignItems: "center",
            width: { sm: "100%", md: "85%", lg: "65%", xl: "55%" },
            justifyContent: "center",
            mt: "5rem",
            mb: "2rem",
            mx: "auto",
          }}
        >
          <Typography
            variant="h3"
            component={"h3"}
            fontWeight={600}
            color="white"
          >
            {" "}
            Todo List
          </Typography>
        </Stack>
        <Stack
          sx={{
            width: { sm: "100%", md: "85%", lg: "65%", xl: "55%" },
            display: "flex",
            justifyContent: "center",
            margin: "1rem auto",
          }}
          direction="column"
        >
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin: "1rem auto",
            }}
            direction="row"
          >
            <CreateTodo select={select} />
            <Box sx={{ width: "140px" }}>
              <select
                onChange={(e) => {
                  console.log(e.target?.value);
                  setSelect(e.target?.value);
                  dispatch(updateStatus({ status: e.target?.value }));
                }}
              >
                {selectOptions.map((opt, idx) => {
                  return (
                    <option value={opt.value} key={idx}>
                      {opt.label}
                    </option>
                  );
                })}
              </select>
            </Box>
          </Stack>
          <Stack
            direction="column"
            sx={{
              width: "100%",
              margin: "1rem auto",
            }}
          >
            <Todos select={select} setSelect={setSelect} />
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Home;
