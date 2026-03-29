import { Link } from "react-router-dom";
// Menggunakan react-icons yang membungkus FontAwesome (Fa)
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Info & Logo */}
          <div className="space-y-4">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Logo EggToSucces"
                className="h-14 w-auto object-contain bg-white rounded-md p-1.5"
              />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 pr-4">
              Menjadi jembatan utama yang mengintegrasikan pembangunan
              infrastruktur dan perdagangan global di Indonesia dengan standar
              profesional tinggi.
            </p>
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
              <li>
                <Link
                  to="/tour-guide"
                  className="hover:text-white transition-colors"
                >
                  Business Trip
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak & Social Media */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">
              Kontak Kami
            </h3>
            <ul className="space-y-4 text-sm mb-8">
              {/* Ikon Telepon diubah jadi WhatsApp dan dibuat bisa diklik */}
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="h-5 w-5 text-blue-500" />
                <a
                  href="https://wa.me/6285708216255"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 857-0821-6255
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-blue-500" />
                <a
                  href="mailto:eggto.team@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  eggto.team@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-500 mt-1" />
                <span>Banyuwangi, Indonesia</span>
              </li>
            </ul>

            {/* Social Media Section (WhatsApp dihapus dari sini) */}
            <div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-3">
                Ikuti Kami
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2.5 bg-slate-800 rounded-full hover:bg-blue-600 transition-all hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="h-4 w-4 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/eggto.team?igsh=MWt0OWwyZzFvOG45dA=="
                  className="p-2.5 bg-slate-800 rounded-full hover:bg-pink-600 transition-all hover:-translate-y-1"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} EggToSucces. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
