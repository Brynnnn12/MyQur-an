import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../layouts/HomeLayouts";
import { ErrorBoundaryPage } from "../features/error/ErrorBoundaryPage";

const HomePage = lazy(() =>
  import("../pages/HomePage").then((mod) => ({ default: mod.HomePage }))
);
const QuranPage = lazy(() =>
  import("../features/quran/quranPage").then((mod) => ({
    default: mod.QuranPage,
  }))
);
const DetailQuranPage = lazy(() =>
  import("../features/detail/detailQuranPage").then((mod) => ({
    default: mod.DetailQuranPage,
  }))
);
const TafsirPage = lazy(() =>
  import("../features/tafsir/tafsirPage").then((mod) => ({
    default: mod.TafsirPage,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "quran",
        element: <QuranPage />,
      },
      {
        path: "detail/:nomor",
        element: <DetailQuranPage />,
      },
      {
        path: "tafsir/:nomor",
        element: <TafsirPage />,
      },
    ],
  },
]);

export default router;
