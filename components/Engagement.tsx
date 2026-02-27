"use client";

import { useState, useEffect } from "react";
import { Heart, Loader2 } from "lucide-react";

type Comment = {
  id: number;
  name: string;
  text: string;
  initial: string;
};

export default function Engagement() {
  // State untuk data
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // State untuk form
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // Fetch data saat komponen dimuat
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/engagement");
        if (res.ok) {
          const data = await res.json();
          if (typeof data.likes === "number") setLikes(data.likes);
          if (Array.isArray(data.comments)) setComments(data.comments);
        }
      } catch (error) {
        console.error("Gagal mengambil data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cek apakah user sudah like sebelumnya (disimpan di browser agar tidak like berkali-kali)
    const localLike = localStorage.getItem("tenangpikir_liked");
    if (localLike) setHasLiked(true);
  }, []);

  // Handle Like
  const handleLike = async () => {
    const newHasLiked = !hasLiked;

    // Optimistic update (update tampilan dulu biar terasa cepat)
    setLikes((prev) => (newHasLiked ? prev + 1 : prev - 1));
    setHasLiked(newHasLiked);

    if (newHasLiked) {
      localStorage.setItem("tenangpikir_liked", "true");
    } else {
      localStorage.removeItem("tenangpikir_liked");
    }

    try {
      await fetch("/api/engagement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: newHasLiked ? "like" : "unlike" }),
      });
    } catch (error) {
      console.error("Gagal mengirim like:", error);
      // Opsional: Revert state jika gagal
    }
  };

  // Handle Submit Komentar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/engagement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "comment",
          name: name,
          text: message,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setComments(data.comments);
        setName("");
        setMessage("");
      }
    } catch (error) {
      console.error("Gagal mengirim komentar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="diskusi"
      className="bg-teal-50/30 dark:bg-slate-900/50 py-16 px-6 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-100 dark:border-slate-700">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Bagikan Pengalaman Anda
            </h3>
            <p className="text-slate-500 text-sm">
              Mari berdiskusi dengan sehat di sini.
            </p>

            <div className="flex items-center gap-6">
              <button
                onClick={handleLike}
                className="flex items-center gap-2 group transition-all hover:opacity-80 cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${hasLiked ? "fill-teal-500 text-teal-500" : "text-teal-500 group-hover:fill-teal-500"}`}
                />
                <span
                  className={`font-bold ${hasLiked ? "text-teal-600" : "text-slate-700 dark:text-slate-300"}`}
                >
                  {likes.toLocaleString("id-ID")}
                </span>
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap (Opsional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                />
                <textarea
                  rows={4}
                  placeholder="Tuliskan cerita atau pertanyaan Anda..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !message.trim()}
                className="w-full bg-teal-500 text-white font-bold py-4 rounded-xl hover:shadow-lg transition-all hover:bg-teal-600"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  "Kirim Komentar"
                )}
              </button>
            </form>
          </div>

          <div className="md:w-1/3 border-l border-slate-100 dark:border-slate-700 pl-0 md:pl-12 pt-8 md:pt-0">
            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">
              Diskusi Terkini
            </h4>

            <div className="space-y-6 max-h-125 overflow-y-auto pr-2">
              {isLoading ? (
                <div className="text-center py-8 text-slate-400 flex flex-col items-center gap-2">
                  <Loader2 className="w-6 h-6 animate-spin" />
                  <span className="text-xs">Memuat diskusi...</span>
                </div>
              ) : comments.length > 0 ? (
                comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  >
                    <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center font-bold text-teal-500 shrink-0">
                      {comment.initial}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">
                        {comment.name}
                      </p>
                      <p className="text-xs text-slate-500 italic leading-relaxed">
                        &quot;{comment.text}&quot;
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-slate-500 italic">
                  Belum ada komentar. Jadilah yang pertama!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
