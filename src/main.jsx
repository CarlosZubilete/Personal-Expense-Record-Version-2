import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
// *Purchases*
import { PurchaseForm } from "./features/purchases/components/PurchaseForm.jsx";
import { PurchasePage } from "./features/purchases/pages/PurchasePage.jsx";
//*Home*
import { Home } from "./features/components/Home.jsx";
//*About Us*
import { AboutUs } from "./features/components/AboutUS.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/purchase-page",
        Component: PurchasePage,
      },
      {
        path: "/purchase-add",
        Component: PurchaseForm,
      },
      {
        path: "/purchase-edit/:id",
        Component: PurchaseForm,
      },
      {
        path: "/about-us",
        Component: AboutUs,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
