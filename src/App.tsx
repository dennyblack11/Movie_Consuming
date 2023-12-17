import { useState } from "react";
import pix from "./Assets/775118.jpg";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router/Router";
import { Provider } from "react-redux";
import { store } from "./components/global/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Router} />
      </Provider>
    </>
  );
}

export default App;
