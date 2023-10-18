import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "../../pages/home";
import Contact from "../../pages/contact";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "contact",
      element: <Contact />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default Router;