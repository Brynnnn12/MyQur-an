import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./routes/router";
import { LoadingSpinner } from "./components/shared/LoadingSpinner";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingSpinner fullscreen label="Memuat halaman" />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
