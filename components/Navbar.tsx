"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          href="/#"
          className="flex items-center gap-2 group cursor-pointer"
        >
          <h1 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white uppercase">
            Tenang<span className="text-teal-500">Pikir</span>
          </h1>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/#simulator"
            className="text-sm font-semibold hover:text-teal-500 transition-colors relative group"
          >
            Simulator
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            href="/#edukasi"
            className="text-sm font-semibold hover:text-teal-500 transition-colors relative group"
          >
            Edukasi
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            href="/#diskusi"
            className="text-sm font-semibold hover:text-teal-500 transition-colors relative group"
          >
            Diskusi
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
          <Link
            href="/#etherapy"
            className="text-sm font-semibold hover:text-teal-500 transition-colors relative group"
          >
            e-Therapy
            <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Link>
        </div>

        <Link
          href="/#about-us"
          className="hidden md:block bg-teal-50 dark:bg-teal-500/10 text-slate-900 dark:text-teal-400 px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all border border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/20"
        >
          Tentang Kami
        </Link>

        <button
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <Link
                href="#simulator"
                className="text-sm font-semibold hover:text-teal-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Simulator
              </Link>
              <Link
                href="#edukasi"
                className="text-sm font-semibold hover:text-teal-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Edukasi
              </Link>
              <Link
                href="#diskusi"
                className="text-sm font-semibold hover:text-teal-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Diskusi
              </Link>
              <Link
                href="#etherapy"
                className="text-sm font-semibold hover:text-teal-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                e-Therapy
              </Link>
              <Link
                href="#about-us"
                className="bg-teal-500 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Tentang Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
