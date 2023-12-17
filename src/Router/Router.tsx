import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/block/Layout";
import { HomeScreen } from "../pages/HomeScreen";
import { Detail } from "../pages/test/Detail";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/:id/detail",
    element: <Detail />,
  },
]);
