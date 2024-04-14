import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import MovieDetails from "./components/Movie/MovieDetails";
import RootLayOut from "./pages/RootLayOut";
import SearchMovie from "./components/Movie/SearchMovie";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import { WatchList } from "./components/WatchList/WatchList";
import { ProtectiveRoutes } from "./pages/ProtectiveRoutes";
import CheckLogInRoute from "./pages/CheckLogInRoute";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const route = createBrowserRouter([
    {
      path: "",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/login",
          element: (
            <CheckLogInRoute>
              <Login />
            </CheckLogInRoute>
          ),
        },
        {
          path: "/register",
          element: (
            <CheckLogInRoute>
              <Register />
            </CheckLogInRoute>
          ),
        },
        {
          path: "/movie/:id",
          element: <MovieDetails />,
        },
        {
          path: "search",
          element: <SearchMovie />,
        },
        {
          path: "watchlist",
          element: (
            <ProtectiveRoutes>
              <WatchList />
            </ProtectiveRoutes>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={route} />;
}

export default App;
