import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import { LoadingSpinner } from "../components/shared/LoadingSpinner";

export const HomeLayouts = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />

      {isPageLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
          <LoadingSpinner label="Memuat halaman" fullscreen />
        </div>
      )}
    </div>
  );
};
