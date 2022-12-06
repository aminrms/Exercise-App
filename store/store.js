import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer";

import { createWrapper } from "next-redux-wrapper";

export const store = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const wrapper = createWrapper(store);
