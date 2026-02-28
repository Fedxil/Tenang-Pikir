"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Share2, User, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArticleClient({ article }: any) {
  const [isCopied, setIsCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    const shareData = {
      title: article.title,
      text: article.excerpt,
      url,
    };

    if (
      navigator.share &&
      navigator.canShare &&
      navigator.canShare(shareData)
    ) {
      try {
        await navigator.share(shareData);
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-teal-500/30">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
          <Link href="./" className="hover:text-teal-500 transition-colors">
            Beranda
          </Link>
          <span>&gt;</span>
          <Link
            href="./#edukasi"
            className="hover:text-teal-500 transition-colors"
          >
            Edukasi
          </Link>
          <span>&gt;</span>
          <span className="text-teal-500 font-medium truncate max-w-50">
            {article.title}
          </span>
        </div>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-8">
          <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-teal-600 dark:text-teal-400" />
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white">
              Tim Psikologi TenangPikir
            </p>
            <p className="text-sm text-slate-500">
              {article.readTime} • Diperbarui {article.date}
            </p>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-4/3 w-full rounded-3xl overflow-hidden mb-12 shadow-xl">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
          {article.content}
        </div>

        {/* Engagement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8 border-y border-slate-100 dark:border-slate-800 mt-12">
          <div className="flex gap-4">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:hover:text-white px-4 py-2 transition-colors"
            >
              {isCopied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Share2 className="w-5 h-5" />
              )}
              {isCopied ? "Tersalin!" : "Bagikan"}
            </button>
          </div>
          <div className="flex gap-2 text-sm text-slate-400">
            <span>#{article.category.replace(/\s+/g, "")}</span>
            <span>#TenangPikir</span>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
