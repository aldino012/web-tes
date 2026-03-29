import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Building2, Truck, MapPin, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Nomor WhatsApp tujuan (Pastikan mengganti dengan nomor yang benar)
  // Format: 62 diikuti nomor tanpa angka 0 di depan
  const whatsappNumber = "6285708216255"; // Contoh: +62 857-0821-6255 -> 6285708216255
  const whatsappMessage =
    "Halo tim EggToSucces, saya ingin berdiskusi mengenai layanan Anda.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Membagi menu menjadi 2 grup untuk memudahkan pemberian garis pemisah di Desktop
  const navGroup1 = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/about" },
  ];

  const navGroup2 = [
    { name: "Infrastruktur", path: "/infrastructure", icon: Building2 },
    { name: "Ekspor Impor", path: "/export-import", icon: Truck },
    { name: "Business Trip", path: "/tour-guide", icon: MapPin },
  ];

  // Menggabungkan array untuk keperluan Mobile Menu (agar lebih mudah di-map)
  const allNavLinks = [...navGroup1, ...navGroup2];

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 text-sm font-semibold transition-colors duration-300 px-4 py-2 rounded-full
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
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* ----- SECTION 1: LOGO ----- */}
          <div className="flex-shrink-0 w-48">
            {" "}
            {/* Memberikan width pasti agar seimbang dengan CTA di kanan */}
            <Link to="/" className="flex items-center">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-14 md:h-16 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105"
              />
            </Link>
          </div>

          {/* ----- SECTION 2: DESKTOP MENU (DIBAGI DUA DENGAN GARIS) ----- */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-grow">
            <div className="flex items-center bg-slate-50/50 p-1 rounded-full border border-slate-100 shadow-sm">
              {/* Grup 1 (Beranda & Tentang) */}
              <div className="flex items-center gap-1 pr-2">
                {navGroup1.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={navLinkClass}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>

              {/* Garis Pemisah (Separator) */}
              <div className="w-px h-6 bg-slate-300 mx-1"></div>

              {/* Grup 2 (Layanan Utama) */}
              <div className="flex items-center gap-1 pl-2">
                {navGroup2.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={navLinkClass}
                  >
                    {link.icon && (
                      <link.icon className="w-4 h-4 text-blue-600/70" />
                    )}
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* ----- SECTION 3: TOMBOL CTA (Desktop) ----- */}
          <div className="hidden lg:flex justify-end w-48">
            {" "}
            {/* Width pasti agar seimbang dengan logo */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-900 text-white text-sm font-bold px-7 py-3 rounded-full hover:bg-blue-800 transition-all shadow-md hover:shadow-lg hover:shadow-blue-900/20 transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Hubungi Kami
            </a>
          </div>

          {/* ----- SECTION 4: TOMBOL HAMBURGER (Mobile) ----- */}
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
            {/* Render semua link di Mobile tanpa garis (karena bentuknya list ke bawah) */}
            {allNavLinks.map((link) => (
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
            <div className="pt-6 pb-2 border-t border-slate-100 mt-4">
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
