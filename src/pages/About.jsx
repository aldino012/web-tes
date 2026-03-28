import {
  ShieldCheck,
  Target,
  Users,
  Lightbulb,
  CheckCircle2,
  Award,
} from "lucide-react";

export default function About() {
  const values = [
    {
      title: "Integritas Tinggi",
      description:
        "Kepercayaan adalah aset utama kami. Kami menjamin transparansi penuh dalam setiap proses penjembatanan bisnis.",
      icon: ShieldCheck,
      color: "text-blue-600",
      bg: "bg-blue-50 group-hover:bg-blue-600", // Tambahan efek hover pada icon box
      iconHover: "group-hover:text-white",
    },
    {
      title: "Jaringan Luas",
      description:
        "Memiliki koneksi strategis di sektor konstruksi, logistik, dan pemerintahan untuk mempercepat tujuan Anda.",
      icon: Users,
      color: "text-teal-600",
      bg: "bg-teal-50 group-hover:bg-teal-600",
      iconHover: "group-hover:text-white",
    },
    {
      title: "Solusi Adaptif",
      description:
        "Kami tidak hanya memberikan opsi, tapi solusi yang disesuaikan dengan skala dan kebutuhan unik proyek Anda.",
      icon: Lightbulb,
      color: "text-amber-600",
      bg: "bg-amber-50 group-hover:bg-amber-500",
      iconHover: "group-hover:text-white",
    },
  ];

  return (
    <div className="w-full font-sans overflow-hidden bg-white">
      {/* ----- HEADER SECTION ----- */}
      {/* Menggunakan gradient seperti Hero Section di Home */}
      <section className="relative bg-slate-900 py-24 md:py-32 text-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
            className="w-full h-full object-cover"
            alt="Office background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Hiasan Cahaya (Glowing Orbs) */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-600/30 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs tracking-widest uppercase font-bold mb-6 backdrop-blur-sm">
            Company Profile
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Tentang Kami
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed font-light">
            Menghubungkan keahlian lokal dengan peluang global melalui
            infrastruktur yang kokoh dan jaringan perdagangan yang terintegrasi.
          </p>
        </div>
      </section>

      {/* ----- VISION & MISSION ----- */}
      {/* Dot Grid Background */}
      <section className="py-24 relative bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]">
        {/* Hiasan Sudut Section */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-100 to-transparent opacity-60 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 bg-white/60 backdrop-blur-sm p-8 rounded-[2.5rem] shadow-sm border border-white">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-2xl mb-6 shadow-inner">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Visi Kami
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                Menjadi{" "}
                <span className="text-blue-600 font-bold">
                  ekosistem jembatan bisnis nomor satu
                </span>{" "}
                di Indonesia yang menyatukan kebutuhan infrastruktur fisik
                dengan kemudahan akses perdagangan internasional dan kenyamanan
                kunjungan bisnis.
              </p>

              <div className="space-y-5">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-3">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" /> Misi Kami:
                </h3>
                <ul className="space-y-4 ml-2">
                  {[
                    "Memfasilitasi kolaborasi antara pemilik proyek dengan penyedia jasa konstruksi terverifikasi.",
                    "Menyederhanakan alur ekspor-impor bagi pelaku usaha nasional.",
                    "Memberikan layanan pendampingan bisnis yang profesional dan solutif.",
                    "Membangun kepercayaan melalui manajemen proyek yang transparan.",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-4 text-slate-600 font-medium bg-white p-3 rounded-xl shadow-sm border border-slate-50"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full">
              {/* Dekorasi Corner Frame */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-8 border-r-8 border-blue-600 z-0 rounded-tr-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-8 border-l-8 border-blue-600 z-0 rounded-bl-3xl"></div>

              <div className="grid grid-cols-2 gap-4 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
                  className="rounded-3xl shadow-xl mt-12 border-4 border-white object-cover h-64 w-full"
                  alt="Architecture"
                />
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                  className="rounded-3xl shadow-xl mb-12 border-4 border-white object-cover h-64 w-full"
                  alt="Logistics"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-[2rem] shadow-2xl border-4 border-slate-50 text-center z-20 transform hover:scale-105 transition-transform">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
                  Strategic Partnership
                </p>
                <p className="text-3xl font-black text-slate-900 leading-none">
                  TRUSTED
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- VALUES SECTION ----- */}
      {/* Background putih bersih */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Hiasan Dekoratif */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-3">
              Prinsip Kami
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Nilai-Nilai Inti Kami
            </h3>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 font-medium">
              Dasar dari setiap jabat tangan dan kesepakatan yang kami bangun
              bersama mitra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-slate-50 p-10 rounded-[2.5rem] border border-slate-200 hover:bg-white hover:border-slate-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Aksen Garis Atas */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${value.bg.split(" ")[0]} bg-opacity-100 group-hover:h-3 transition-all`}
                ></div>

                <div
                  className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-8 shadow-sm transition-colors duration-300`}
                >
                  <value.icon
                    className={`w-8 h-8 ${value.color} ${value.iconHover} transition-colors duration-300`}
                  />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">
                  {value.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- TEAM PHILOSOPHY ----- */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-3">
              Misi Kami
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
              Filosofi Kerja Kami
            </h3>
          </div>

          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
            {/* Glowing Orbs di sudut */}
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

            <div className="relative z-10">
              <p className="text-xl md:text-3xl font-light leading-relaxed mb-10 text-blue-50">
                <span className="text-4xl md:text-6xl text-blue-400 font-serif leading-none mr-2">
                  "
                </span>
                Kami percaya bahwa setiap proyek besar dimulai dari koneksi yang
                tepat. Tugas kami bukan sekadar menjadi perantara, tetapi
                memastikan setiap pihak memiliki pondasi yang kuat untuk tumbuh
                bersama.
                <span className="text-4xl md:text-6xl text-blue-400 font-serif leading-none ml-2">
                  "
                </span>
              </p>
              <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
            </div>

            {/* Hiasan Pola Garis di Sudut Kanan Bawah */}
            <div className="absolute bottom-4 right-4 flex space-x-1 opacity-20">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-12 bg-white rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
