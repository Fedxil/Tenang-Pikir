import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black leading-[1.1] text-slate-900 dark:text-white">
            Seni Bertanya pada Internet Tanpa{" "}
            <span className="text-teal-500">Rasa Panik</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Pelajari pola pencarian informasi kesehatan yang sehat dan hindari
            jebakan Cyberchondria bersama TenangPikir. Kendalikan rasa cemas
            Anda sebelum ia mengendalikan Anda.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/#simulator"
              className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-teal-500/20 hover:-translate-y-1 transition-transform"
            >
              Uji Gaya Browsing Anda
            </Link>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal-200/40 dark:bg-teal-900/20 rounded-full blur-3xl"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 aspect-4/3">
            <Image
              src="/images/hero1.jpg"
              alt="Cyberchondria"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
