import { Outlet } from "react-router-dom";
import { Navbar } from "../components/home/Navbar";
import Footer from "../components/home/Footer";

export const HomeLayouts = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
