import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building2,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "infrastruktur",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Nomor WhatsApp tujuan (Pastikan mengganti dengan nomor yang benar)
  const whatsappNumber = "6285708216255";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi loading pengiriman pesan (1.5 detik)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // OPSI: Otomatis melempar ke WhatsApp setelah submit
      const waMessage = `Halo tim EggToSucces, saya ${formData.name}. Saya tertarik dengan layanan *${formData.service}*.\n\nPesan: ${formData.message}\nEmail saya: ${formData.email}`;
      const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(waMessage)}`;

      // Membuka WhatsApp di tab baru
      window.open(waLink, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        service: "infrastruktur",
        message: "",
      });

      // Hilangkan pesan sukses setelah 5 detik
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full font-sans bg-slate-50 min-h-screen">
      {/* ----- HEADER SECTION ----- */}
      <section className="relative bg-slate-900 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
            alt="Contact Support"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>

        <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs tracking-widest uppercase font-bold mb-6 backdrop-blur-sm">
            Hubungi Kami
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Mari Diskusikan Proyek Anda
          </h1>
          <p className="text-xl text-blue-100/90 leading-relaxed font-light">
            Tim ahli kami siap membantu mewujudkan visi bisnis Anda. Silakan isi
            formulir di bawah atau hubungi kami secara langsung.
          </p>
        </div>
      </section>

      {/* ----- CONTACT CONTENT SECTION ----- */}
      <section className="py-20 relative -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
            {/* KIRI: Informasi Kontak */}
            <div className="lg:w-2/5 bg-slate-900 text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
              {/* Ornamen Background */}
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-8">
                  Informasi Kontak
                </h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Kantor Pusat</h4>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        Jl. Jendral Sudirman No. 123
                        <br />
                        Kawasan Bisnis Sudirman
                        <br />
                        Jakarta Pusat, 10220
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Telepon & WA</h4>
                      <p className="text-slate-300 text-sm mb-2">
                        +62 857-0821-6255
                      </p>
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-bold bg-green-500 text-white px-3 py-1.5 rounded-full hover:bg-green-400 transition-colors"
                      >
                        <MessageCircle className="w-3 h-3 mr-1.5" /> Chat via
                        WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">Email</h4>
                      <p className="text-slate-300 text-sm">
                        eggto.team@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">
                        Jam Operasional
                      </h4>
                      <p className="text-slate-300 text-sm">
                        Senin - Jumat: 09:00 - 17:00 WIB
                        <br />
                        Sabtu & Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Building2 className="w-8 h-8 text-slate-400" />
                  <div>
                    <p className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                      PT EggToSucces Global
                    </p>
                    <p className="text-sm font-medium text-slate-500">
                      Integrated Business Partner
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* KANAN: Form Kontak */}
            <div className="lg:w-3/5 p-10 md:p-14 bg-white relative">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
                Kirimkan Pesan Anda
              </h3>
              <p className="text-slate-500 mb-8 font-medium">
                Kami akan merespons pertanyaan Anda dalam waktu maksimal 1x24
                jam kerja.
              </p>

              {isSubmitted && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold">Pesan Terkirim!</p>
                    <p className="text-sm">
                      Anda akan dialihkan ke WhatsApp untuk melanjutkan
                      percakapan.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Nama */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-bold text-slate-700"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-bold text-slate-700"
                    >
                      Email Perusahaan / Pribadi
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white"
                      placeholder="nama@perusahaan.com"
                    />
                  </div>
                </div>

                {/* Layanan */}
                <div className="space-y-2">
                  <label
                    htmlFor="service"
                    className="text-sm font-bold text-slate-700"
                  >
                    Topik Layanan
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white cursor-pointer"
                  >
                    <option value="infrastruktur">
                      Manajemen Infrastruktur & Konstruksi
                    </option>
                    <option value="ekspor-impor">
                      Fasilitator Ekspor-Impor
                    </option>
                    <option value="tour-guide">
                      Business Trip / Pendampingan VIP
                    </option>
                    <option value="lainnya">Pertanyaan Umum / Kerjasama</option>
                  </select>
                </div>

                {/* Pesan */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-slate-700"
                  >
                    Detail Pesan / Kebutuhan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-slate-50 focus:bg-white resize-none"
                    placeholder="Ceritakan detail proyek atau pertanyaan Anda di sini..."
                  ></textarea>
                </div>

                {/* Tombol Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold rounded-xl text-white transition-all shadow-lg 
                    ${isSubmitting ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-1"}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Memproses...
                    </>
                  ) : (
                    <>
                      Kirim Pesan Sekarang <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
