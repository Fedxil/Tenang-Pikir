import { Stethoscope, Smile, Users, ShieldCheck } from 'lucide-react';

const partners = [
  {
    name: "Halodoc",
    desc: "Konsultasi Dokter Umum",
    icon: Stethoscope
  },
  {
    name: "Riliv",
    desc: "Psikolog & Meditasi",
    icon: Smile
  },
  {
    name: "Bicarakan.id",
    desc: "Konseling Online",
    icon: Users
  },
  {
    name: "Alodokter",
    desc: "Informasi Medis Terverifikasi",
    icon: ShieldCheck
  }
];

export default function Partners() {
  return (
    <section id="etherapy" className="py-16 px-6 max-w-7xl mx-auto text-center scroll-mt-12">
      <h2 className="text-3xl font-black mb-2 text-slate-900 dark:text-white">
        Butuh Bantuan <span className="text-teal-500">Profesional?</span>
      </h2>
      <p className="text-slate-500 mb-16">
        Kami merekomendasikan layanan e-Therapy terpercaya berikut ini.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {partners.map((partner, index) => (
          <a 
            key={index} 
            href="#" 
            className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-teal-500 transition-all group hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-teal-50 dark:bg-teal-900/20 rounded-full flex items-center justify-center group-hover:bg-teal-500 group-hover:text-white transition-colors text-teal-500">
              <partner.icon className="w-8 h-8" />
            </div>
            <h4 className="font-bold mb-1 group-hover:text-teal-500 transition-colors text-slate-900 dark:text-white">
              {partner.name}
            </h4>
            <p className="text-[10px] text-slate-400 uppercase tracking-tighter font-bold">
              {partner.desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
