
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-extrabold tracking-tight uppercase">
            Tenang<span className="text-teal-500">Pikir</span>
          </h1>
        </div>

        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-white transition-colors">
            Privasi
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Syarat & Ketentuan
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Kontak
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} TenangPikir Campaign. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
