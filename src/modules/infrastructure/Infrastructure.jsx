import { Link } from "react-router-dom";
import {
  Building2,
  HardHat,
  ClipboardCheck,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Ruler,
} from "lucide-react";

export default function Infrastructure() {
  const services = [
    {
      title: "Contractor Matching",
      description:
        "Menghubungkan proyek Anda dengan kontraktor utama dan sub-kontraktor yang telah terverifikasi rekam jejaknya.",
      icon: HardHat,
    },
    {
      title: "Material Sourcing",
      description:
        "Mencarikan dan mendistribusikan material bangunan berkualitas dengan harga kompetitif dari jaringan supplier kami.",
      icon: Building2,
    },
    {
      title: "Permit & Legal Assist",
      description:
        "Mendampingi proses pengurusan izin mendirikan bangunan dan legalitas proyek agar berjalan sesuai regulasi.",
      icon: ClipboardCheck,
    },
    {
      title: "Project Supervision",
      description:
        "Pengawasan berkala untuk memastikan kualitas bangunan (QC) dan timeline proyek berjalan sesuai kontrak kesepakatan.",
      icon: Ruler,
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Konsultasi Awal",
      desc: "Diskusi mendalam mengenai visi, skala proyek, dan anggaran Anda.",
    },
    {
      step: "02",
      title: "Kurasi Mitra",
      desc: "Kami menyeleksi kontraktor dan vendor yang paling cocok untuk proyek Anda.",
    },
    {
      step: "03",
      title: "Negosiasi & Kontrak",
      desc: "Pendampingan penyusunan kontrak kerja yang aman dan transparan.",
    },
    {
      step: "04",
      title: "Eksekusi & Laporan",
      desc: "Pemantauan proyek berjalan dengan laporan progres berkala kepada Anda.",
    },
  ];

  return (
    <div className="w-full font-sans overflow-hidden bg-slate-50">
      {/* ----- HERO SECTION ----- */}
      <section className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://images.unsplash.com/photo-1541888088301-e1bc1452661c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            className="w-full h-full object-cover"
            alt="Construction Site"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>

        {/* Hiasan Cahaya & Ornamen Sudut */}
        <div className="absolute top-10 right-10 w-32 h-32 border-t-4 border-r-4 border-blue-500/30 z-0"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 rounded-2xl mb-8 backdrop-blur-md border border-blue-500/30">
            <Building2 className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight max-w-4xl">
            Manajemen{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
              Infrastruktur
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed font-light max-w-3xl">
            Mitra strategis Anda dalam merencanakan, menghubungkan, dan
            mengelola proyek konstruksi dari gagasan hingga serah terima.
          </p>
        </div>
      </section>

      {/* ----- ROLE / VALUE PROPOSITION ----- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              {/* Dekorasi Bingkai Siku Ala Arsitek */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-8 border-l-8 border-blue-600 z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-8 border-r-8 border-blue-600 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80"
                className="rounded-2xl shadow-2xl relative z-10 object-cover h-[500px] w-full"
                alt="Blueprint and Helmet"
              />
              {/* Badge */}
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden md:flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-blue-600" />
                <div>
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                    Verifikasi Ketat
                  </p>
                  <p className="text-xl font-black text-slate-900">
                    100% Mitra Resmi
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-3">
                Peran Kami
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Bukan Sekadar Membangun, Kami Memastikan Kualitas.
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                Sebagai konsultan dan fasilitator manajemen proyek, kami
                mengerti bahwa risiko terbesar dalam infrastruktur adalah{" "}
                <strong>salah memilih pelaksana</strong>. Kami hadir untuk
                menjembatani Anda dengan ekosistem konstruksi yang tepat,
                transparan, dan dapat diandalkan.
              </p>

              <ul className="space-y-4">
                {[
                  "Perlindungan dari risiko over-budget dan keterlambatan.",
                  "Akses eksklusif ke kontraktor spesialis.",
                  "Transparansi laporan progres di lapangan.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-slate-700 font-bold bg-slate-50 p-4 rounded-xl border border-slate-100"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ----- SPECIFIC SERVICES GRID ----- */}
      {/* Menggunakan Dot Grid Background untuk tema teknik/arsitektur */}
      <section className="py-24 bg-slate-50 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] relative border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-sm">
            <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-2">
              Ruang Lingkup
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Layanan Manajemen Infrastruktur
            </h3>
            <p className="text-slate-600 font-medium">
              Solusi *end-to-end* untuk memastikan proyek Anda berdiri kokoh
              dari konsep hingga operasional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-[100px] z-0 group-hover:bg-blue-50 transition-colors duration-500"></div>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 mb-4 relative z-10">
                  {service.title}
                </h4>
                <p className="text-slate-600 leading-relaxed font-medium relative z-10">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- WORKFLOW (CARA KERJA) ----- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-sm font-black text-blue-600 tracking-widest uppercase mb-3">
                Alur Kerja
              </h2>
              <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                Langkah Nyata Mewujudkan Proyek Anda
              </h3>
            </div>
            <div className="hidden md:block">
              <Briefcase className="w-16 h-16 text-slate-200" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative group">
                {/* Garis Penghubung (Hanya Desktop) */}
                {index !== workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 z-0"></div>
                )}

                <div className="bg-white relative z-10">
                  <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----- CTA SECTION ----- */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/40 rounded-full blur-3xl z-0 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Punya Rencana Pembangunan?
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Mari kita diskusikan cetak biru (blueprint) proyek Anda. Kami akan
              carikan tim terbaik untuk mengeksekusinya.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold rounded-xl text-slate-900 bg-blue-400 hover:bg-white shadow-xl hover:shadow-blue-500/30 transition-all hover:-translate-y-1"
            >
              Hubungi Tim Kami <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
