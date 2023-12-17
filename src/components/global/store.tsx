import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reduxState";

export const store = configureStore({
  reducer,
});
