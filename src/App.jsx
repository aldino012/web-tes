import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

// Import Layouts
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Import Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Import Modules
import Infrastructure from "./modules/infrastructure/Infrastructure";
import ExportImport from "./modules/export-import/ExportImport";
import TourGuide from "./modules/tour-guide/TourGuide";

// Fitur Wajib UX: Memastikan layar selalu mulai dari atas saat ganti halaman
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Wrapper utama: min-h-screen memastikan footer selalu di bawah meskipun konten sedikit */}
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans font-medium">
        <Navbar />

        {/* Main Content Area (Area konten utama yang akan berubah-ubah) */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            {/* Routing Modular untuk layanan */}
            <Route path="/infrastructure" element={<Infrastructure />} />

            <Route path="/export-import" element={<ExportImport />} />
            <Route path="/tour-guide" element={<TourGuide />} />

            {/* Halaman 404 jika user mengetik URL yang salah */}
            <Route
              path="*"
              element={
                <div className="flex flex-col items-center justify-center h-[60vh]">
                  <h1 className="text-6xl font-black text-slate-300 mb-4">
                    404
                  </h1>
                  <p className="text-xl text-slate-600 font-bold">
                    Halaman yang Anda cari tidak ditemukan.
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
