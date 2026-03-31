import React, { useState, useEffect, useRef } from 'react';
import {
  Users,
  Target,
  BookOpen,
  PlaySquare,
  Briefcase,
  Camera,
  Code,
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  ExternalLink
} from 'lucide-react';

// --- DATA MOCKUP UNTUK ATM (Bisa diganti dengan data asli dari FB Ads) ---
const atmVideos = [
  {
    id: 1,
    title: "Kelebihan PT Perorangan",
    caption: "Mau punya PT Perorangan, banyak yang diurus kan?\n\nIni bisa nguras waktu tenagamu. Belum lagi kalau sistemnya eror. Dan, dokumen legalitas yang kamu dapet jadi gak lengkap.😩\n\nMakanya, urus di Legal MP aja. Bisa selesai dalam 1-2 hari aja.✅\n\nFasilitas yang kamu dapat:\n- SK Kemenkumham\n- Pernyataan Pendirian Kemenkumham\n- e-NPWP + SKT Pajak\n- Akun OSS RBA\n- NIB (TDP, SIUP, SKU)\n- Sertifikat Standar\n- Pernyataan UMK terkait Tata Ruang\n- SPPL + dll\n- GRATIS 1X Konsultasi Digital Marketing\n- Stempel Perusahaan\n- Dokumen Fisik\n- Desain Template Dokumen Perusahaan\n\nBONUS Pembukaan Rekening atas nama PT\nFREE AKSES Gabung Komunitas Pengusaha Indonesia\n\n👉Klik Tombol Selengkapnya untuk Konsultasi GRATIS!",
    type: "Soft Selling",
    category: "Edukasi & Niche",
    hook: "Fakta Mengejutkan (Surprising Fact) & Agitasi Masalah",
    videoUrl: "/legal-pengaruh-1.mp4"
  },
  {
    id: 2,
    title: "Promo Pendirian PT Cepat",
    caption: "PROMO KHUSUS BULAN INI! Pendirian PT Lengkap mulai dari 2 Jutaan aja. Proses cepat, legalitas aman, tinggal fokus bisnis!",
    type: "Hard Selling",
    category: "Promo",
    hook: "Penawaran harga langsung (Direct Offer)",
    videoUrl: "/Galeri Iklan (5).mp4"
  },
  {
    id: 3,
    title: "A-Z Mengurus Legalitas UMKM",
    caption: "Baru mulai bisnis UMKM tapi bingung legalitasnya mulai dari mana? Teh Pilo jelasin step-by-step nya di video ini. Save biar ga lupa!",
    type: "Soft Selling",
    category: "Tutorial",
    hook: "Menyelesaikan masalah audiens (Problem Solving)",
    videoUrl: "Galeri Iklan (4).mp4"
  },
  {
    id: 4,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Galeri Iklan (3).mp4"
  },
  {
    id: 5,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Galeri Iklan (2).mp4"
  },
  {
    id: 6,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Galeri Iklan (1).mp4"
  },
  {
    id: 7,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Galeri Iklan.mp4"
  },
  {
    id: 8,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Ad Library (2).mp4"
  },
  {
    id: 9,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Ad Library (1).mp4"
  },
  {
    id: 10,
    title: "Testimoni Klien PT Sukses",
    caption: "Alhamdulillah satu lagi klien urusinlegal.com yang puas dengan layanan pendirian PT kami. Sukses terus untuk bisnisnya kak!",
    type: "Soft Selling",
    category: "Social Proof",
    hook: "Bukti nyata kredibilitas (Trust Building)",
    videoUrl: "Ad Library.mp4"
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'team':
        return <TeamRoles />;
      case 'strategy':
        return <ContentStrategy />;
      case 'atm':
        return <AtmGallery />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Navbar */}
      <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Briefcase className="h-8 w-8 mr-3 text-blue-300" />
              <span className="font-bold text-xl tracking-tight">UrusinLegal<span className="text-blue-300"></span></span>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1 items-center">
              <NavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<Target className="w-4 h-4 mr-2" />} text="Agenda" />
              <NavButton active={activeTab === 'team'} onClick={() => setActiveTab('team')} icon={<Users className="w-4 h-4 mr-2" />} text="Tim & Peran" />
              <NavButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')} icon={<BookOpen className="w-4 h-4 mr-2" />} text="Panduan Konten" />
              <NavButton active={activeTab === 'atm'} onClick={() => setActiveTab('atm')} icon={<PlaySquare className="w-4 h-4 mr-2" />} text="Galeri ATM" />
            </div>
          </div>
        </div>
        {/* Mobile Menu (Scrollable horizontal) */}
        <div className="md:hidden flex overflow-x-auto bg-blue-800 p-2 space-x-2 no-scrollbar">
          <MobileNavButton active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} icon={<Target className="w-4 h-4" />} text="Agenda" />
          <MobileNavButton active={activeTab === 'team'} onClick={() => setActiveTab('team')} icon={<Users className="w-4 h-4" />} text="Tim" />
          <MobileNavButton active={activeTab === 'strategy'} onClick={() => setActiveTab('strategy')} icon={<BookOpen className="w-4 h-4" />} text="Panduan" />
          <MobileNavButton active={activeTab === 'atm'} onClick={() => setActiveTab('atm')} icon={<PlaySquare className="w-4 h-4" />} text="ATM" />
        </div>
      </nav>

      {/* Main Content Area */}
      {activeTab === 'atm' ? (
        <main>{renderContent()}</main>
      ) : (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderContent()}
        </main>
      )}

      {/* Footer */}
      {activeTab !== 'atm' && (
        <footer className="bg-slate-900 text-slate-400 py-6 text-center text-sm mt-auto">
          <p>Internal Document &bull; UrusinLegal.com &bull; {new Date().getFullYear()}</p>
          <p className="mt-1">Built for Traffic, SEO, and Engagement.</p>
        </footer>
      )}
    </div>
  );
}

/* --- COMPONENTS --- */

const Dashboard = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
        Kickoff Meeting: <span className="text-blue-600">Sosial Media & SEO</span>
      </h1>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-blue-600">
          <TrendingUp className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">1. Traffic & SEO</h3>
        <p className="text-slate-600">Meningkatkan kunjungan organik ke urusinlegal.com melalui konten yang dicari audiens (Keyword targeting).</p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
        <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-indigo-600">
          <Users className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">2. Engagement</h3>
        <p className="text-slate-600">Membangun interaksi, edukasi, dan trust agar audiens merasa butuh dan percaya dengan jasa kita.</p>
      </div>
      <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
        <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-emerald-600">
          <Lightbulb className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2">3. Strategi ATM</h3>
        <p className="text-slate-600">Membedah konten FB/IG Ads & Tiktok kompetitor. Kita liat apa yang works, lalu kita buat versi lebih baiknya.</p>
      </div>
    </div>
  </div>
);

const TeamRoles = () => (
  <div className="space-y-6 animate-fade-in">
    <div className="mb-8 border-b pb-4">
      <h2 className="text-3xl font-bold text-slate-900">Role</h2>
      <p className="text-slate-500 mt-2"></p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* IT */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="bg-slate-800 h-24 relative">
          <div className="absolute -bottom-10 left-6 bg-white p-2 rounded-full shadow-lg">

          </div>
        </div>
        <div className="pt-14 p-6">
          <h3 className="text-2xl font-bold text-slate-900">Mas IT</h3>
          <p className="text-blue-600 font-medium mb-4">Tech, SEO & Analytics</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Riset keyword dan struktur SEO web.</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Optimasi kecepatan dan UI/UX urusinlegal.com.</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Analisa data traffic & konversi iklan/sosmed.</li>
          </ul>
        </div>
      </div>

      {/* Content Creator */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="bg-pink-600 h-24 relative">
          <div className="absolute -bottom-10 left-6 bg-white p-2 rounded-full shadow-lg">

          </div>
        </div>
        <div className="pt-14 p-6">
          <h3 className="text-2xl font-bold text-slate-900">Teh Pilo</h3>
          <p className="text-pink-600 font-medium mb-4">Content Creator & Creative</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Wajah dari UrusinLegal di Socmed.</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Eksekusi script video (Shooting short video).</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Membawakan materi edukasi & soft selling dengan luwes.</li>
          </ul>
        </div>
      </div>

      {/* Admin */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
        <div className="bg-amber-500 h-24 relative">
          <div className="absolute -bottom-10 left-6 bg-white p-2 rounded-full shadow-lg">

          </div>
        </div>
        <div className="pt-14 p-6">
          <h3 className="text-2xl font-bold text-slate-900">Bilqis</h3>
          <p className="text-amber-600 font-medium mb-4">Admin & Operations</p>
          <ul className="space-y-2 text-sm text-slate-600">
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Menangani lead/chat masuk dari Sosmed & Web.</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Eksekusi layanan klien (Pembuatan PT, NIB, dll).</li>
            <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 shrink-0" /> Memastikan kepuasan klien untuk bahan testimoni.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ContentStrategy = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="mb-4 border-b pb-4">
      <h2 className="text-3xl font-bold text-slate-900">Panduan Konten & Branding</h2>
      <p className="text-slate-500 mt-2">Guideline / Manual book untuk Teh Pilo saat produksi konten.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Tone of Voice */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-4 flex items-center text-blue-900">
          <Lightbulb className="w-5 h-5 mr-2 text-blue-500" />
          Persona & Tone of Voice
        </h3>
        <div className="space-y-4 text-slate-700">
          <p><strong>Karakter Teh Pilo:</strong> Profesional tapi santai (Professional-Casual).</p>
          <p><strong>Bahasa:</strong> Campuran baku dan bahasa gaul sehari-hari agar tidak kaku (misal: "Bikin PT itu gampang banget, sini aku kasih tau stepnya!").</p>
          <p><strong>Pakaian/Visual:</strong> Smart casual dengan background rapi.</p>
        </div>
      </div>

      {/* FrameWork ATM */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold mb-4 flex items-center text-emerald-900">
          <Target className="w-5 h-5 mr-2 text-emerald-500" />
          Framework A.T.M Video Pendek
        </h3>
        <ul className="space-y-3 text-slate-700">
          <li><strong>1. Hook (3 detik pertama):</strong> Harus menahan jempol audiens (Amati hook kompetitor yang views-nya tinggi).</li>
          <li><strong>2. Body (Isi):</strong> Edukasi ringan, pain point (masalah UMKM), atau solusi. (Tiru polanya, Modifikasi isinya sesuai layanan kita).</li>
          <li><strong>3. Call to Action (CTA):</strong> Jelas arahnya kemana. "Klik link di bio untuk konsultasi gratis sama tim urusinlegal.com ya!".</li>
        </ul>
      </div>
    </div>

    {/* Soft vs Hard Selling */}
    <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 mt-8">
      <h3 className="text-2xl font-bold mb-6 text-center">Soft Selling Hard Selling</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-800 p-5 rounded-xl">
          <h4 className="font-bold text-emerald-400 text-lg mb-3">Soft Selling (Edukasi & Trust)</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>- "3 Kerugian Bisnis Belum Berbadan Hukum"</li>
            <li>- "Bedanya PT Perorangan vs PT Biasa"</li>
            <li>- "Cara mengecek nama PT yang belum dipakai"</li>
            <li><strong>Goal:</strong> Engagement, Shares, Saves, Trust.</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-5 rounded-xl">
          <h4 className="font-bold text-pink-400 text-lg mb-3">Hard Selling (Konversi)</h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>- "Promo Spesial Pendirian PT bulan ini!"</li>
            <li>- "Nggak mau pusing urus NIB? Kita beresin hari ini juga!"</li>
            <li>- "Layanan All in One Legalitas Usaha, klik link!"</li>
            <li><strong>Goal:</strong> Direct leads calon klien ke WhatsApp.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const AtmVideoItem = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play().then(() => setIsPlaying(true)).catch(error => {
              console.log("Autoplay prevented:", error);
              setIsPlaying(false);
            });
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div
      className="w-full relative flex items-center justify-center bg-black snap-start snap-always"
      style={{ height: '100%' }}
    >
      {video.videoUrl.includes('youtube.com') || video.videoUrl.includes('youtu.be') ? (
        <iframe
          className="w-full h-full border-none"
          src={video.videoUrl}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-full h-full relative cursor-pointer" onClick={togglePlay}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover md:object-contain block"
            loop
            playsInline
            preload="metadata"
          >
            <source src={video.videoUrl} type="video/mp4" />
          </video>
          {/* Custom Play Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black/10">
               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                 <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
               </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AtmGallery = () => (
  <div
    className="h-[calc(100dvh-116px)] md:h-[calc(100dvh-64px)] overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-black"
  >
    {atmVideos.map((video) => (
      <AtmVideoItem key={video.id} video={video} />
    ))}
  </div>
);

/* --- HELPER UI COMPONENTS --- */

const NavButton = ({ active, onClick, icon, text }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-md transition-colors ${active
      ? 'bg-blue-800 text-white font-medium'
      : 'text-blue-100 hover:bg-blue-800/50'
      }`}
  >
    {icon}
    {text}
  </button>
);

const MobileNavButton = ({ active, onClick, icon, text }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap text-sm ${active
      ? 'bg-white text-blue-900 font-bold shadow-sm'
      : 'text-blue-100 hover:bg-blue-700'
      }`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </button>
);