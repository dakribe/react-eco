import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LibrariesPage from "./pages/librariesPage";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/:categoryId",
    element: <LibrariesPage />,
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
