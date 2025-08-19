import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// *Purchases*
import { PurchaseForm } from "./features/purchases/components/PurchaseForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: <h1>INDEX</h1>,
        //Component: Home,
      },
      {
        path: "/purchase",
        Component: PurchaseForm,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
