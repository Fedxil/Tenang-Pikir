"use client";

import { useState } from "react";
import {
  Search,
  ChevronRight,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  RotateCcw,
  Trophy,
  Map,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const scenarios = [
  {
    id: 1,
    title: "Skenario 1: Muncul Gejala (The Trigger)",
    question:
      "Sudah dua hari kamu merasa pusing di area belakang kepala setelah begadang mengerjakan tugas.",
    subtext: "Apa yang pertama kali kamu ketik di mesin pencari?",
    options: [
      {
        id: "A",
        text: 'Mencari di Google: "apa Penyebab sakit kepala belakang"',
        feedback:
          "Hati-hati! Menggunakan kata kunci pencarian yang tidak tepat akan memunculkan hasil yang pencarian diluar topik yang diinginkan.",
      },
      {
        id: "B",
        text: 'Mencari di Google: "Cara meredakan sakit kepala karena kurang tidur"',
        feedback:
          "Bagus! Kamu fokus pada konteks penyebab (kurang tidur). Ini menjaga hasil pencarian tetap relevan dan tenang.",
      },
    ],
  },
  {
    id: 2,
    title: "Skenario 2: Memilih Sumber (Source Literacy)",
    question: "Hasil pencarian muncul!",
    subtext: "Website mana yang akan kamu klik duluan?",
    options: [
      {
        id: "A",
        text: '"Hanya 1 Hari! Ramuan Rahasia Hilangkan Pusing Selamanya" (Situs: sehat-alami-banget.blogspot.com)',
        feedback:
          "Waspada Clickbait! Situs tanpa penulis medis yang jelas sering melebih-lebihkan informasi demi trafik.",
      },
      {
        id: "B",
        text: '"Mengenal Sakit Kepala Tegang: Gejala dan Penanganan" (Situs: kemkes.go.id atau Alodokter)',
        feedback:
          "Tepat! Memilih domain pemerintah (.go.id) atau platform kesehatan terverifikasi adalah langkah pertama dalam pencarian informasi yang relevan.",
      },
    ],
  },
  {
    id: 3,
    title: "Skenario 3: Membaca Konten (The Rabbit Hole)",
    question:
      "Di dalam artikel, kamu membaca satu kalimat: 'Sakit kepala bisa menjadi tanda kondisi serius'.",
    subtext: "Apa tindakanmu?",
    options: [
      {
        id: "A",
        text: "Terus klik link 'Gejala Stroke' dan 'Kanker Otak' yang ada di artikel tersebut.",
        feedback:
          "Inilah 'Rabbit Hole'. Klik yang tidak terarah pada kondisi langka akan memicu hormon stres (kortisol) kamu meningkat.",
      },
      {
        id: "B",
        text: "Menutup tab browser, minum air putih, dan beristirahat sejenak.",
        feedback:
          "Langkah cerdas! Mengetahui kapan harus berhenti browsing adalah skill penting dalam menjaga kesehatan mental digital.",
      },
    ],
  },
  {
    id: 4,
    title: "Skenario 4: Langkah Selanjutnya (Action)",
    question: "Rasa pusingnya belum hilang sepenuhnya.",
    subtext: "Apa rencana kamu?",
    options: [
      {
        id: "A",
        text: "Bertanya di forum anonim atau grup Facebook dan membandingkan gejala dengan orang asing.",
        feedback:
          "Membandingkan gejala dengan orang asing yang bukan ahli bisa memberikan informasi menyesatkan (misinformasi).",
      },
      {
        id: "B",
        text: "Menjadwalkan konsultasi dengan dokter via aplikasi e-Therapy/Telemedicine resmi.",
        feedback:
          "Sangat bijak! e-Therapy memberikan jawaban dari ahli tanpa risiko 'tersesat' di hasil pencarian internet yang liar.",
      },
    ],
  },
];

export default function Simulator() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentScenario = scenarios[currentScenarioIndex];

  const handleOptionClick = (optionId: string) => {
    if (showFeedback) return;
    setSelectedOption(optionId);
    setShowFeedback(true);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selectedOption!];
    setAnswers(newAnswers);

    if (currentScenarioIndex === scenarios.length - 1) {
      setShowResult(true);
    } else {
      setCurrentScenarioIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowFeedback(false);
    }
  };

  const resetSimulator = () => {
    setCurrentScenarioIndex(0);
    setSelectedOption(null);
    setShowFeedback(false);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    const countB = answers.filter((a) => a === "B").length;

    if (countB >= 3) {
      return {
        title: "Expert Navigator",
        message:
          "Kamu punya literasi digital yang hebat! Kamu tahu cara mengendalikan teknologi, bukan dikendalikan olehnya.",
        icon: Trophy,
        color: "text-yellow-500",
        bg: "bg-yellow-50 dark:bg-yellow-900/20",
        border: "border-yellow-200 dark:border-yellow-800",
      };
    } else if (countB >= 2) {
      return {
        title: "Information Wanderer",
        message:
          "Kamu cukup bijak, tapi terkadang masih tergoda 'lubang kelinci' internet. Yuk, lebih selektif lagi!",
        icon: Map,
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
      };
    } else {
      return {
        title: "The Rabbit Hole Explorer",
        message:
          "Waspada! Cara kamu mencari informasi sangat rentan memicu kecemasan. Tenang, yuk pelajari cara browsing yang lebih sehat di artikel kami.",
        icon: Search,
        color: "text-orange-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
      };
    }
  };

  return (
    <section
      id="simulator"
      className="bg-white dark:bg-slate-900 py-16 px-6 border-y border-slate-100 dark:border-slate-800 scroll-mt-12"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Digital Search Simulator
          </h2>
          <p className="text-slate-500">
            Uji reaksi Anda terhadap informasi medis online
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700 min-h-150 flex flex-col justify-center">
          {showResult ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-8"
            >
              {(() => {
                const result = getResult();
                const ResultIcon = result.icon;
                return (
                  <>
                    <div
                      className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center ${result.bg} ${result.color} mb-6`}
                    >
                      <ResultIcon className="w-12 h-12" />
                    </div>
                    <div className="space-y-4">
                      <h3 className={`text-3xl font-black ${result.color}`}>
                        {result.title}
                      </h3>
                      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
                        {result.message}
                      </p>
                    </div>
                    <button
                      onClick={resetSimulator}
                      className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity mt-8"
                    >
                      <RotateCcw className="w-5 h-5" />
                      Coba Lagi
                    </button>
                  </>
                );
              })()}
            </motion.div>
          ) : (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-teal-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((currentScenarioIndex + 1) / scenarios.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <span className="text-xs font-bold text-teal-500">
                  SKENARIO {currentScenarioIndex + 1}/{scenarios.length}
                </span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/10 p-2 rounded-lg shrink-0">
                    <Search className="text-teal-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                      {currentScenario.title}
                    </h3>
                    <p className="font-medium text-slate-900 dark:text-white mb-1">
                      {currentScenario.question}
                    </p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {currentScenario.subtext}
                    </p>
                  </div>
                </div>

                <div className="grid gap-3">
                  {currentScenario.options.map((option) => {
                    const isSelected = selectedOption === option.id;

                    let buttonClass =
                      "w-full text-left p-5 rounded-xl border transition-all group flex items-center justify-between ";

                    if (showFeedback) {
                      if (isSelected) {
                        buttonClass +=
                          "border-teal-500 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 ring-2 ring-teal-500 ring-offset-2 dark:ring-offset-slate-900";
                      } else {
                        buttonClass +=
                          "border-slate-200 dark:border-slate-700 opacity-50 cursor-not-allowed";
                      }
                    } else {
                      buttonClass +=
                        "border-slate-200 dark:border-slate-700 hover:border-teal-500 hover:bg-teal-50 dark:hover:bg-teal-900/10";
                    }

                    return (
                      <button
                        key={option.id}
                        onClick={() => handleOptionClick(option.id)}
                        disabled={showFeedback}
                        className={buttonClass}
                      >
                        <span className="font-medium pr-4">{option.text}</span>
                        {showFeedback && isSelected && (
                          <CheckCircle className="text-teal-500 w-5 h-5 shrink-0" />
                        )}
                        {!showFeedback && (
                          <ChevronRight className="opacity-0 group-hover:opacity-100 text-teal-500 w-5 h-5 shrink-0 transition-opacity" />
                        )}
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence>
                  {showFeedback && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="mt-8 p-6 bg-teal-50 dark:bg-teal-900/10 rounded-2xl border border-teal-500/20"
                    >
                      <div className="flex gap-4">
                        <Lightbulb className="text-teal-500 w-6 h-6 shrink-0" />
                        <div>
                          <h4 className="font-bold text-slate-900 dark:text-white mb-1">
                            Feedback Edukasi
                          </h4>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {
                              currentScenario.options.find(
                                (o) => o.id === selectedOption,
                              )?.feedback
                            }
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {showFeedback && (
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={handleNext}
                      className="flex items-center gap-2 text-teal-500 font-bold hover:gap-3 transition-all"
                    >
                      {currentScenarioIndex === scenarios.length - 1
                        ? "Lihat Hasil"
                        : "Lanjut ke Skenario Berikutnya"}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
