import { User } from "lucide-react";

const team = [
  {
    name: "Nicholas Chandra",
    nim: "32230136",
  },
  {
    name: "Marcellino Jonathan",
    nim: "322301",
  },
  {
    name: "Elbert Janitra",
    nim: "322301",
  },
];

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="py-18 px-6 max-w-7xl mx-auto scroll-mt-12"
    >
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white">
          Tentang <span className="text-teal-500">Kami</span>
        </h2>
        <p className="text-slate-500">
          Tim di balik Kampanye Literasi Digital TenangPikir
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-12 flex flex-col items-center text-center border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group"
          >
            <div className="w-20 h-20 bg-teal-500/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition-colors">
              <User className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {member.name}
            </h3>
            <p className="text-xs font-bold text-teal-500 tracking-widest uppercase">
              {member.nim}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
