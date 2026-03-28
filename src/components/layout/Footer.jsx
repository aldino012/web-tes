import { Link } from "react-router-dom";
// Kita gunakan icon yang namanya paling stabil dan pasti ada di semua versi
import * as LucideIcons from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi pembantu untuk memanggil icon dengan aman agar tidak crash
  const Icon = ({ name, ...props }) => {
    const LucideIcon = LucideIcons[name] || LucideIcons.HelpCircle;
    return <LucideIcon {...props} />;
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Info & Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto object-contain bg-white rounded-md p-1"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Menjadi jembatan utama yang mengintegrasikan pembangunan
              infrastruktur dan perdagangan global di Indonesia.
            </p>

            {/* Social Media - Menggunakan pemanggilan Aman agar tidak crash */}
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-blue-600 transition-all"
              >
                <Icon name="Linkedin" className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 rounded-full hover:bg-pink-600 transition-all"
              >
                {/* Kita panggil Camera jika Instagram bermasalah di library Anda */}
                <Icon name="Camera" className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://wa.me/6281123456789"
                className="p-2 bg-slate-800 rounded-full hover:bg-green-600 transition-all"
              >
                <Icon name="MessageCircle" className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Tautan Cepat */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Perusahaan
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Layanan Utama
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/infrastructure"
                  className="hover:text-white transition-colors"
                >
                  Infrastruktur
                </Link>
              </li>
              <li>
                <Link
                  to="/export-import"
                  className="hover:text-white transition-colors"
                >
                  Ekspor Impor
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Kontak Kami
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Icon name="Phone" className="h-5 w-5 text-blue-500" />
                <span>+62 811-2345-6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Icon name="Mail" className="h-5 w-5 text-blue-500" />
                <span>info@eggtosucces.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Icon name="MapPin" className="h-5 w-5 text-blue-500" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} EggToSucces. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
