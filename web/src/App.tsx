import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Index } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LibrariesPage from "./pages/librariesPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Layout from "./components/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/:categoryId", element: <LibrariesPage /> }],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider defaultColorScheme="auto">
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;
