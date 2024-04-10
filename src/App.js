import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import MovieDetails from "./components/Movie/MovieDetails";
import RootLayOut from "./pages/RootLayOut";
import SearchMovie from "./components/Movie/SearchMovie";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
        {
          path: "/movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "search",
          element: <SearchMovie />,
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
