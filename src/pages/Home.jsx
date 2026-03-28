import { Link } from "react-router-dom";
import {
  Building2,
  Truck,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Globe,
  Handshake,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full font-sans overflow-hidden">
      {/* ----- HERO SECTION ----- */}
      <section className="relative bg-slate-900 text-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888088301-e1bc1452661c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Infrastructure Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent"></div>
        </div>

        {/* Hiasan Sudut Arsitektur (Kiri Atas & Kanan Bawah) */}
        <div className="absolute top-8 left-8 w-24 h-24 border-t-2 border-l-2 border-blue-400/30 z-0"></div>
        <div className="absolute bottom-8 right-8 w-24 h-24 border-b-2 border-r-2 border-blue-400/30 z-0"></div>

        {/* Cahaya Biru di Pojok Kanan Atas */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start text-left">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-300 text-xs tracking-widest uppercase font-bold mb-6 backdrop-blur-sm">
            Integrated Business Development
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 max-w-3xl">
            Membangun Masa Depan,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Menghubungkan Peluang.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Menjadi jembatan strategis yang mengintegrasikan pembangunan
            infrastruktur, fasilitas perdagangan global, dan konektivitas bisnis
            eksklusif di Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-900/50 transition-all hover:-translate-y-1"
            >
              Konsultasi Proyek
            </Link>
            <Link
              to="/about"
              className="inline-flex justify-center items-center px-8 py-4 border border-slate-600 text-base font-bold rounded-lg text-white bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm transition-all group hover:-translate-y-1"
            >
              Pelajari Lebih Lanjut
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ----- CORE SERVICES SECTION ----- */}
      {/* Menggunakan bg-slate-50 dengan Dot Grid Pattern */}
      <section className="py-24 relative bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]">
        {/* Hiasan Sudut Section */}
        <div className="absolute top-0 right-0 w-32 h-32 border-t-8 border-r-8 border-white rounded-bl-3xl z-0 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-100 to-transparent opacity-60 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 bg-slate-50/80 backdrop-blur-sm p-4 rounded-2xl">
            <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-2">
              Pilar Layanan Kami
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Sinergi Konstruksi & Perdagangan
            </h3>
            <p className="text-lg text-slate-600 font-medium">
              Kami memfasilitasi kebutuhan bisnis Anda dari hulu ke hilir. Mulai
              dari manajemen proyek fisik hingga ekspansi pasar internasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full z-0 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-blue-200">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                Construction & Infrastructure
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                Mitra strategis dalam manajemen proyek dan penyediaan material.
                Kami menghubungkan Anda dengan kontraktor dan vendor terbaik.
              </p>
              <Link
                to="/infrastructure"
                className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 relative z-10"
              >
                Lihat Detail{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-teal-50 rounded-bl-full z-0 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-teal-200">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                Global Trade Facilitator
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                Menjembatani produk lokal ke pasar global. Kami memastikan
                manajemen logistik dan kepabeanan berjalan tanpa hambatan.
              </p>
              <Link
                to="/export-import"
                className="inline-flex items-center text-teal-600 font-bold hover:text-teal-800 relative z-10"
              >
                Lihat Detail{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-50 rounded-bl-full z-0 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg shadow-amber-200">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                Business Hospitality
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed relative z-10">
                Layanan pendampingan eksklusif bagi investor atau klien yang
                ingin meninjau lokasi proyek langsung di lapangan.
              </p>
              <Link
                to="/tour-guide"
                className="inline-flex items-center text-amber-600 font-bold hover:text-amber-800 relative z-10"
              >
                Lihat Detail{" "}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ----- WHY CHOOSE US SECTION ----- */}
      <section className="py-24 bg-white relative">
        {/* Hiasan Sudut Section */}
        <div className="absolute top-10 left-0 w-16 h-32 bg-blue-50 rounded-r-full z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-2">
                Nilai Tambah Kami
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Mengapa Memilih Kami Sebagai Mitra Anda?
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Sebagai perantara strategis, kami tidak hanya menghubungkan Anda
                dengan penyedia jasa, tetapi memastikan setiap standar kualitas
                dan keamanan terpenuhi.
              </p>

              <div className="space-y-6">
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900">
                      Keamanan & Legalitas
                    </h5>
                    <p className="text-slate-600 mt-1">
                      Mitra kerja kami memiliki legalitas resmi di bidangnya
                      masing-masing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Globe className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900">
                      Jaringan Koneksi Luas
                    </h5>
                    <p className="text-slate-600 mt-1">
                      Akses langsung ke distributor internasional dan kontraktor
                      lokal.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 group">
                  <div className="flex-shrink-0 mt-1 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Handshake className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900">
                      Pendampingan End-to-End
                    </h5>
                    <p className="text-slate-600 mt-1">
                      Kami mendampingi dari tahap perencanaan hingga eksekusi
                      proyek.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              {/* Gambar dengan Corner Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-blue-600 z-20"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-blue-600 z-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Business Meeting"
                  className="w-full h-auto object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply z-10"></div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block z-30">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center">
                    <Building2 className="w-7 h-7 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 font-bold uppercase">
                      Fokus Layanan
                    </p>
                    <p className="text-xl font-black text-slate-900">
                      Infrastruktur & Eksim
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- CTA SECTION ----- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Hiasan Dekoratif di CTA */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-30 z-0"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Siap Membangun Visi Bisnis Anda Bersama Kami?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Diskusikan kebutuhan proyek infrastruktur atau logistik Anda
              dengan tim ahli kami hari ini.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl text-blue-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              Jadwalkan Konsultasi <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
