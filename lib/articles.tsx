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
          &quot;Pernahkah Anda merasa pusing ringan, lalu mencarinya di Google,
          dan lima menit kemudian yakin bahwa Anda mengidap tumor otak
          langka?&quot;
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
          seringkali memberikan jawaban &quot;paling buruk&quot; yang justru
          memicu lebih banyak hormon stres (kortisol). Ini menciptakan lingkaran
          setan yang sulit diputus tanpa bantuan kesadaran diri yang kuat.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            International Journal of Environmental Research and Public Health
            (2020). menjelaskan bagaimana intoleransi terhadap ketidakpastian
            memicu kecemasan berlebih saat mencari gejala medis di internet.
          </li>
          <li>
            Mayo Clinic Health System. &quot;The Dangers of Self-Diagnosis via
            the Internet.&quot; Menjelaskan mengapa algoritma mesin pencari
            tidak bisa menggantikan diagnosis klinis dan bagaimana bias
            informasi dapat menyesatkan pasien.
          </li>
        </ul>
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
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Jika AI bisa menjawab hampir semua pertanyaan, apakah itu
          berarti ia selalu benar?&quot;
        </p>

        <p className="mb-8">
          Fenomena ini berkaitan dengan cara kerja model bahasa berbasis
          kecerdasan buatan. AI seperti ChatGPT tidak benar-benar memahami
          informasi seperti manusia. Ia memprediksi kata berikutnya berdasarkan
          pola dari data yang telah dipelajari.
        </p>

        <p className="mb-8">
          Dalam kondisi tertentu, AI dapat menghasilkan jawaban yang terdengar
          sangat logis tetapi tidak sepenuhnya akurat. Fenomena ini sering
          disebut sebagai <strong>AI hallucination</strong> — ketika sistem
          menghasilkan informasi yang tampak valid namun sebenarnya keliru.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Mengapa AI Bisa &quot;Berhalusinasi&quot;?
        </h2>
        <p className="mb-8">
          AI dilatih untuk menghasilkan respons yang koheren dan relevan secara
          statistik, bukan untuk memverifikasi kebenaran secara mandiri. Ia
          tidak memiliki kesadaran, niat, atau kemampuan mengecek fakta secara
          real-time.
        </p>
        <p className="mb-8">
          Karena jawabannya terstruktur rapi dan percaya diri, manusia mudah
          mengalami <em>authority bias</em> — kecenderungan mempercayai sumber
          yang terdengar ahli.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Tips Bijak Menggunakan AI untuk Informasi Kesehatan
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Referensi Awal:</strong> Gunakan AI sebagai referensi
                awal, bukan alat diagnosis.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Verifikasi:</strong> Verifikasi informasi medis di
                sumber resmi.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Profesional:</strong> Jangan mengambil keputusan
                kesehatan tanpa profesional.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            Nature Medicine (2023). &quot;AI in Health Care: The Hope, the Hype,
            and the Hallucinations.&quot; menyoroti bagaimana AI dapat
            memberikan jawaban yang terdengar sangat meyakinkan namun secara
            medis tidak akurat karena keterbatasan algoritma dalam memahami
            logika klinis nyata.
          </li>
          <li>
            World Health Organization (WHO). &quot;Ethics and Governance of
            Artificial Intelligence for Health.&quot; Panduan resmi yang
            memperingatkan tentang risiko bias &quot;otoritas&quot;, di mana
            manusia cenderung terlalu percaya pada saran medis dari AI hanya
            karena bahasanya yang terlihat profesional.
          </li>
        </ul>
      </>
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
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Mengapa setelah menonton satu video tentang ADHD, tiba-tiba
          semua gejalanya terasa ada pada diri kita?&quot;
        </p>

        <p className="mb-8">
          Fenomena ini terjadi karena algoritma media sosial dirancang untuk
          memperkuat minat pengguna. Ketika seseorang menonton satu konten
          kesehatan mental, sistem akan menyajikan lebih banyak konten serupa.
        </p>

        <p className="mb-8">
          Akibatnya muncul <strong>ilusi frekuensi</strong> — seolah-olah topik
          tersebut sangat umum dan relevan dengan diri kita.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Peran Confirmation Bias
        </h2>
        <p className="mb-8">
          Otak manusia memiliki kecenderungan mencari informasi yang mendukung
          keyakinan awal. Ini disebut <em>confirmation bias</em>. Ketika kita
          merasa cocok dengan satu gejala, kita cenderung mengabaikan informasi
          yang bertentangan.
        </p>
        <p className="mb-8">
          Masalahnya, banyak gejala psikologis bersifat umum dan tumpang tindih
          dengan kondisi sehari-hari seperti stres atau kurang tidur.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Tips Tenang
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Edukasi Awal:</strong> Jadikan media sosial sebagai
                edukasi awal, bukan diagnosis.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Video Singkat:</strong> Hindari menyimpulkan hanya dari
                video singkat.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Konsultasi:</strong> Konsultasikan dengan profesional
                jika gejala menetap.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            Nickerson (1998) menjelaskan <em>confirmation bias</em> sebagai
            kecenderungan sistematis dalam memproses informasi yang mendukung
            keyakinan awal.
          </li>
          <li>
            Eyal (2014) dalam konsep <em>Hook Model</em> menjelaskan bagaimana
            desain aplikasi memperkuat keterlibatan pengguna melalui pengulangan
            konten yang relevan.
          </li>
        </ul>
      </>
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
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Apakah cara kita mengetik di Google bisa memengaruhi tingkat
          kecemasan kita?&quot;
        </p>

        <p className="mb-8">
          Mesin pencari bekerja berdasarkan kata kunci. Ketika kita langsung
          mengetik kemungkinan terburuk, algoritma akan menyajikan konten yang
          relevan dengan ketakutan tersebut.
        </p>

        <p className="mb-8">
          Ini dapat memperkuat kecemasan, terutama pada individu yang sensitif
          terhadap ancaman kesehatan.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Negativity Bias dan SEO
        </h2>
        <p className="mb-8">
          Manusia secara alami lebih peka terhadap ancaman dibandingkan
          informasi netral. Ini disebut <em>negativity bias</em>. Konten dengan
          judul menakutkan sering mendapatkan lebih banyak klik, sehingga lebih
          mudah muncul di halaman pertama.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Tips Googling Sehat
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Pertanyaan Netral:</strong> Gunakan pertanyaan netral
                saat mencari informasi.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Baca Isi:</strong> Hindari membaca hanya dari judul yang
                seringkali sensasional.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Cek Sumber:</strong> Periksa tanggal dan sumber artikel
                untuk memastikan validitas.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Batasi Waktu:</strong> Batasi waktu pencarian maksimal
                10 menit.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            Baumeister et al. (2001) menyatakan bahwa &quot;bad is stronger than
            good,&quot; menggambarkan bagaimana informasi negatif lebih
            berpengaruh secara psikologis.
          </li>
          <li>
            White & Horvitz (2009) dalam penelitian tentang{" "}
            <em>cyberchondria</em> menunjukkan bahwa pencarian medis online
            dapat meningkatkan kecemasan secara signifikan.
          </li>
        </ul>
      </>
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
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Apakah menjauh dari layar benar-benar membuat pikiran lebih
          tenang?&quot;
        </p>

        <p className="mb-8">
          Paparan notifikasi yang terus-menerus dapat meningkatkan aktivasi
          sistem saraf dan produksi hormon stres seperti kortisol.
        </p>

        <p className="mb-8">
          Digital detox adalah praktik membatasi penggunaan perangkat digital
          untuk memulihkan keseimbangan psikologis.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Dampak Paparan Berlebihan
        </h2>
        <p className="mb-8">
          Paparan media sosial yang tinggi dikaitkan dengan peningkatan
          kecemasan dan gangguan tidur, terutama pada remaja dan dewasa muda.
        </p>
        <p className="mb-8">
          Otak membutuhkan jeda untuk kembali ke kondisi regulasi emosional yang
          stabil.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Tips Digital Detox
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Pagi Hari:</strong> Hindari media sosial 1 jam setelah
                bangun.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Malam Hari:</strong> Gunakan mode silent di malam hari.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Jadwal:</strong> Jadwalkan hari tanpa scrolling.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Aktivitas Fisik:</strong> Ganti waktu layar dengan
                aktivitas fisik ringan.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            Twenge et al. (2018) menemukan hubungan antara peningkatan
            penggunaan media digital dan meningkatnya gejala depresi pada
            remaja.
          </li>
          <li>
            American Psychological Association (2020) melaporkan bahwa paparan
            media yang berlebihan dapat meningkatkan stres.
          </li>
        </ul>
      </>
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
      <>
        <p className="italic text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
          &quot;Apakah terapi melalui layar bisa sama efektifnya dengan bertemu
          langsung?&quot;
        </p>

        <p className="mb-8">
          Perkembangan teknologi memungkinkan layanan konseling dilakukan secara
          daring melalui video call atau chat.
        </p>

        <p className="mb-8">
          Bagi sebagian orang, terapi online memberikan rasa aman karena
          dilakukan di lingkungan pribadi.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Efektivitas Terapi Online
        </h2>
        <p className="mb-8">
          Penelitian menunjukkan bahwa terapi kognitif-perilaku berbasis online
          efektif untuk mengatasi kecemasan dan depresi ringan hingga sedang.
        </p>
        <p className="mb-8">
          Kunci keberhasilan terapi bukan hanya pada medianya, tetapi pada
          kualitas hubungan terapeutik antara klien dan profesional.
        </p>

        <div className="bg-teal-50 dark:bg-teal-900/10 rounded-2xl p-8 mb-12 border border-teal-100 dark:border-teal-500/20">
          <h3 className="flex items-center gap-2 text-lg font-black text-teal-700 dark:text-teal-400 uppercase tracking-wider mb-6">
            <CheckCircle className="w-5 h-5" />
            Kapan e-Therapy Cocok?
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Kecemasan Ringan:</strong> Untuk kecemasan ringan hingga
                sedang.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Akses Terbatas:</strong> Untuk individu dengan
                keterbatasan akses.
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
              <span className="text-slate-700 dark:text-slate-300">
                <strong>Kenyamanan:</strong> Untuk mereka yang lebih nyaman
                berbicara dari rumah.
              </span>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Referensi
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
          <li>
            Andersson et al. (2014) menyatakan bahwa internet-based CBT memiliki
            efektivitas yang sebanding dengan terapi tatap muka untuk beberapa
            kondisi.
          </li>
          <li>
            Simpson & Reid (2014) menekankan pentingnya therapeutic alliance
            dalam terapi daring.
          </li>
        </ul>
      </>
    ),
  },
];
