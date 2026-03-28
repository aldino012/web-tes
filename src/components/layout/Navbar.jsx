import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Building2, Truck, MapPin, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Nomor WhatsApp tujuan (Pastikan mengganti dengan nomor yang benar)
  // Format: 62 diikuti nomor tanpa angka 0 di depan
  const whatsappNumber = "6281123456789";
  const whatsappMessage =
    "Halo tim EggToSucces, saya ingin berdiskusi mengenai layanan Anda.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
    { name: "Infrastruktur", path: "/infrastructure", icon: Building2 },
    { name: "Ekspor Impor", path: "/export-import", icon: Truck },
    { name: "Business Trip", path: "/tour-guide", icon: MapPin },
  ];

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-semibold transition-colors duration-300 px-3 py-1.5 rounded-full
    ${
      isActive
        ? "bg-blue-50 text-blue-900"
        : "text-slate-700 hover:text-blue-900 hover:bg-slate-100"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-base font-semibold transition-colors
    ${
      isActive
        ? "bg-blue-50 text-blue-900"
        : "text-slate-700 hover:bg-slate-100"
    }`;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      {/* Mengubah max-w menjadi lebih longgar agar logo besar punya ruang */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Memperbesar tinggi navbar menjadi h-24 agar proporsional dengan logo baru */}
        <div className="flex items-center justify-between h-24">
          {/* ----- SECTION 1: LOGO ----- */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Company Logo"
                // Logo diperbesar!
                // h-14 (56px) di mobile, h-16 (64px) di desktop.
                // w-auto memastikan rasio gambar tetap terjaga (tidak gepeng)
                className="h-14 md:h-16 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* ----- SECTION 2: DESKTOP MENU ----- */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navLinkClass}>
                {link.icon && <link.icon className="w-4 h-4" />}
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* ----- SECTION 3: TOMBOL CTA (Desktop) -> LANGSUNG KE WHATSAPP ----- */}
          {/* Mengubah tag <Link> (React Router) menjadi tag <a> (HTML biasa) karena ini link eksternal */}
          <div className="hidden lg:flex">
            <a
              href={whatsappLink}
              target="_blank" // Membuka di tab baru
              rel="noopener noreferrer" // Standar keamanan untuk link eksternal
              className="flex items-center gap-2 bg-blue-900 text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-blue-800 transition-all shadow-md hover:shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>

          {/* ----- SECTION 4: TOMBOL HAMBURGER (Mobile) ----- */}
          {/* Muncul di layar kecil (lg ke bawah) */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-900 hover:bg-slate-100 focus:outline-none transition-colors"
            >
              <span className="sr-only">Buka menu</span>
              {isOpen ? (
                <X className="h-7 w-7" />
              ) : (
                <Menu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ----- SECTION 5: MOBILE MENU (Overlay) ----- */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={mobileNavLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.icon && (
                  <link.icon className="w-5 h-5 text-blue-900/70" />
                )}
                {link.name}
              </NavLink>
            ))}

            {/* Tombol WhatsApp di Mobile Menu */}
            <div className="pt-6 pb-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 w-full bg-blue-900 text-white font-bold px-6 py-4 rounded-xl hover:bg-blue-800 shadow-md active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
