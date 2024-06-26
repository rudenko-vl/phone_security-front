import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import PrivatePage from "./pages/PrivatePage";
import PersonPage from "./pages/PersonPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/workers",
    element: <PrivatePage />,
  },
  {
    path: "/workers/:workerId",
    element: <PersonPage />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={"loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
