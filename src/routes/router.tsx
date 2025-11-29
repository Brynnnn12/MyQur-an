import { createBrowserRouter } from "react-router-dom";
import { HomeLayouts } from "../layouts/HomeLayouts";
import { ErrorBoundaryPage } from "../features/error/ErrorBoundaryPage";
import {
  HomePageWrapper,
  QuranPageWrapper,
  DetailQuranPageWrapper,
  TafsirPageWrapper,
} from "./PageWrappers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts />,
    errorElement: <ErrorBoundaryPage />,
    children: [
      {
        index: true,
        element: <HomePageWrapper />,
      },
      {
        path: "quran",
        element: <QuranPageWrapper />,
      },
      {
        path: "detail/:nomor",
        element: <DetailQuranPageWrapper />,
      },
      {
        path: "tafsir/:nomor",
        element: <TafsirPageWrapper />,
      },
    ],
  },
]);

export default router;
