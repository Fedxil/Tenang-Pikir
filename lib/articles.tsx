import { CheckCircle } from "lucide-react";

export const articles = [
  {
    id: "mitos-algoritma",
    category: "Anxiety Control",
    title: "Mengapa Pusing di Google Berujung 'Tumor'?",
    excerpt:
      "Membedah algoritma mesin pencari yang cenderung memprioritaskan hasil yang paling menghebohkan.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCiAZTWIHdjIGvpnBFWMAx4jZSq1Hcm19A84FfnS0bRYPms-muPODXj5U_w1UGnAsDLgL7e9TmHyLKFEm__xeSS3yP_kCpIQvHj6CXXUn1o35SFceuz7R3ZrbweuvNuW931D5Nn7XYKmrvxwD7L2dtgpcL2_34w2bYVUnBDF6NSgEOrR1jmc3BEbjnDhx7HoRaYKd3SH6Tm9zTpUDqqF9RVjZpJQSDySwY0scdi9A35rqgX-GIVPcvnI9kC7Ypi83PNHbMgsQp6cXY",
    date: "24 Okt 2023",
    readTime: "5 Menit Membaca",
    content: (
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Pernahkah Anda merasa pusing ringan, lalu mencarinya di Google, dan
          lima menit kemudian yakin bahwa Anda mengidap tumor otak langka?&quot;
        </p>

        <p className="mb-8">
          Fenomena ini disebut <strong>Cyberchondria</strong>. Ini adalah
          kecemasan yang meningkat akibat pencarian informasi medis secara
          berlebihan di internet. Algoritma mesin pencari seringkali
          memprioritaskan klik tinggi, yang sayangnya sering datang dari konten
          medis yang sensasional dan menakutkan, bukan yang paling akurat secara
          statistik untuk gejala umum.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Mitos Clickbait Medis
        </h2>
        <p className="mb-8">
          Google tidak didesain untuk mendiagnosis Anda secara akurat. Mesin
          pencari didesain untuk menyajikan informasi yang paling relevan
          berdasarkan kata kunci yang paling sering diklik. Karena manusia
          secara alami lebih cenderung mengeklik judul yang menakutkan (
          <em>Fear-based SEO</em>), konten-konten yang menyebutkan penyakit
          langka atau fatal seringkali muncul di halaman pertama, mengubur fakta
          bahwa 95% pusing hanyalah akibat dehidrasi atau kurang tidur.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Tips Tenang: Menghindari Cyberchondria
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Batasi Waktu:</strong> Beri diri Anda maksimal 10 menit
                untuk mencari info gejala.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Gunakan Situs Terpercaya:</strong> Hanya baca dari
                sumber medis resmi (Alodokter, Halodoc, atau situs Rumah Sakit).
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Konsultasi Ahli:</strong> Jika rasa cemas menetap lebih
                dari 1 jam, gunakan layanan e-Therapy kami daripada terus{" "}
                <em>scrolling</em>.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Mengapa Otak Kita &quot;Membeli&quot; Ketakutan Ini?
        </h2>
        <p className="mb-8">
          Saat kita cemas, otak berada dalam mode <em>fight-or-flight</em>. Kita
          mencari kepastian untuk meredakan ketakutan. Namun, internet
          seringkali memberikan jawaban &quot;paling buruk&quot; yang justru memicu lebih
          banyak hormon stres (kortisol). Ini menciptakan lingkaran setan yang
          sulit diputus tanpa bantuan kesadaran diri yang kuat.
        </p>
      </>
    ),
  },
  {
    id: "dokter-ai-halusinasi",
    category: "Future Tech",
    title: "'Dokter AI': Mengapa ChatGPT Bisa Berhalusinasi...",
    excerpt:
      "Bagaimana kecerdasan buatan menyusun data medis dan risiko kesalahan interpretasi data sensitif.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC6tHb83eQIZlgu-0wUNYYo6RuxyBVK5qB1SnFlx_B6eVPLxfB_Qa6mu9CvB43JjjlFXEq6Wz3Pa4bt5qXaMCQKb6pqyBwpoRQf3cWixNF7y_eOLiZK9s44QRcPY1-V_-xZvsFYgy7gZ2DmyzOrFV4tuhNf68pj7piFEvBHTStvRE-wSG04XlL6pMuVziURnUNc3l567JnSWZnyNhZN0Bf5nakJaMI7cEfXSZTEv-JDY3syO6xq08s9HyK9ADIdC4O4vkTWTQ1QJu4",
    date: "25 Okt 2023",
    readTime: "4 Menit Membaca",
    content: (
      <p>Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
    ),
  },
  {
    id: "fenomena-tiktok-self-diagnose",
    category: "Social Media",
    title: "Fenomena TikTok 'Self-Diagnose'...",
    excerpt:
      "Bahaya melabeli diri sendiri dengan gangguan mental hanya berdasarkan video durasi 15 detik.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtiqoHa21ISVaxZZsGyy_Iyw5bW6rvxDs9pMlax5TwmCgS4TGtyxJQ9Ib2H82tsICD6MHPzcXhogy-vvVnr5_-2AXdjqcgT6fDAxALKlal5BM96y9WZsVmvG6LFs_YRkVCMdjU5D70A_LuMAjxxw_uj_nXU3-gGc7I1E0bVJ_dZ9zqtNH-QcEyw9f4FiaH9ve0ArPZqgk1KGkguvwcx20nRMozkRVhp_yte20h_9My2Nf_QqSlzfp7HoJAScS8ZOkMmc8ohX9pcXw",
    date: "26 Okt 2023",
    readTime: "6 Menit Membaca",
    content: (
      <p>Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
    ),
  },
  {
    id: "seni-bertanya-panduan-googling",
    category: "Digital Literacy",
    title: "Seni Bertanya: Panduan 'Googling'...",
    excerpt:
      "Teknik pencarian informasi yang objektif tanpa memicu respon stres pada sistem saraf Anda.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsi_EN2wbGf7csybRoD1EHSCqmqjvuqM_A51WYJkVKsnbvbMNj_6bU7ckf6QEOurz3c_LMfB5nQ472wpTv7zOjVHmSFrWWuci7Ay4-Ldl3E2Upf9x3mZhp9996MCMXDju6IiOG9yW21-ViR-mQaxpDzftzMSLrOVEYBbsCBqaM3z_bskDhF9vd535dP_vbI_sc0-TaQLcOr1zjW9LgwjkljapCcs-gQh2qfjY0XoZUWk16ABd_ZPWKZPAxVm145aLzv2hNRfZunrI",
    date: "27 Okt 2023",
    readTime: "5 Menit Membaca",
    content: (
      <p>Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
    ),
  },
  {
    id: "digital-detox",
    category: "Wellness",
    title: "Digital Detox...",
    excerpt:
      "Langkah-langkah praktis untuk menjauh dari layar saat kecemasan kesehatan mulai memuncak.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXGDhJ0HXEY1IdlaEGxfveg9CsnRrbZvvJMr3qgexdBcTikz4LRII4TUdIiGApj-2C0eD65Pqe9DtcdSbIkFUMFemPtoUERp8eeGraNCqE8fBJFZQ011V8QEDuojt9v1n0Y4LQDNGTKf_CHbP_C-WPp2BcX7Wx30eMM_HGZXkOm0zSwQyDuAqbQLUkXkqPRe3J07jnOgDAJjSq328vBQiQHPErInjBBDnSQdLRjZpWvMgAL14Hr7evH-XyFVmC-AQ8eaME4QlYyJk",
    date: "28 Okt 2023",
    readTime: "3 Menit Membaca",
    content: (
      <p>Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
    ),
  },
  {
    id: "etherapy-solusi-profesional",
    category: "Modern Therapy",
    title: "e-Therapy: Solusi Profesional...",
    excerpt:
      "Kapan Anda harus berhenti mencari di Google dan mulai berbicara dengan konselor profesional.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBc6OqrhQoa4ooOVO77wYqGFaVgGY-YsfII_RspRqWtAL45cHA0SQXHWJvdupwDm0mm0r0Xbk-YPWIxYtc8Mx_jMVP3cBF5MNgRyzq0I1aAtVAhwoJ3hIxVQAGrjRfU30vElQdkJ8PAVvBaGOv1MnfPD3IWTY7Gz1DLqHfSgEkF2gcE2GlcDm_kyM1EKibCMz9xFBW78lQJaN5YKuRvEoYa3BYQITqs_C0m3SnjophOF88JIsmyXG96QbGs5851ExnImQhP1RWVPlU",
    date: "29 Okt 2023",
    readTime: "7 Menit Membaca",
    content: (
      <p>Artikel ini sedang dalam pengembangan. Silakan kembali lagi nanti.</p>
    ),
  },
];
