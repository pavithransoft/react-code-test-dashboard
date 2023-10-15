import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Income from "./pages/Income";
import Promote from "./pages/Promote";
import Help from "./pages/Help";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/product",
          element: <Product />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/income",
          element: <Income />,
        },
        {
          path: "/promote",
          element: <Promote />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
