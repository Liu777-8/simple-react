// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Demo from "./pages/simple-components/demo_0116/index.jsx";
import { BrowserRouter } from "react-router-dom";
import {
  useRoutes,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// 第一种方法是通过useRoutes进行创建
// function BaseRouter() {
//   return useRoutes([
//     {
//       path: "/",
//       element: <App />,
//     },
//     {
//       path: "/demo",
//       element: <Demo />,
//     },
//   ]);
// }
// 第二种方法
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/demo/:id",
    element: <Demo />,
  },
]);
// 第三种方法 createHashRouter hash路由
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
