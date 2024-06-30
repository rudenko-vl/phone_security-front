import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainPage from "./pages/MainPage";
import PrivatePage from "./pages/PrivatePage";
import PersonPage from "./pages/PersonPage";
import PrevievPage from "./pages/PrevievPage";
import ErrorPage from "./pages/ErrorPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/t",
    element: <ErrorPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <PrevievPage />,
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
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
