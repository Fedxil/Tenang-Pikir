import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/articles";

export default function Education() {
  return (
    <section id="edukasi" className="py-16 px-6 max-w-7xl mx-auto scroll-mt-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white">
            Edukasi & <span className="text-teal-500">Wawasan</span>
          </h2>
          <p className="text-slate-500 max-w-lg">
            Pahami fenomena kesehatan digital melalui artikel mendalam dari para
            pakar kami.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link
            href={`/edukasi/${article.id}`}
            key={index}
            className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all cursor-pointer block"
          >
            <div className="h-48 overflow-hidden relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-teal-500">
                {article.category}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
