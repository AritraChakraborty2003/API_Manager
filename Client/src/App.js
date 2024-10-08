import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import FormArea from "./components/FormArea";
import ApiManager from "./components/ApiManager";
import GeneralCMS from "./components/GeneralCMS";
import About from "./components/About";
const AppLayout = () => {
  return (
    <>
      <FormArea />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/ApiManager",
    element: <ApiManager />,
  },
  {
    path: "/dashboard",
    element: <ApiManager />,
  },
  {
    path: "/generalCMS",
    element: <GeneralCMS />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
