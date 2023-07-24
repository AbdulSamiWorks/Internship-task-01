import "./App.css";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    <Home/>
    ),
  },
  {
    path: "/portfolio",
    element: <Portfolio/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);
function App() {

  return (
    <>
         <RouterProvider router={router} />
    </>
  );
}

export default App;
