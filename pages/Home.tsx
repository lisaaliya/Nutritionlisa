import React from 'react';
import { Page } from '../types';
import Button from '../components/Button';
import { BookOpen, Heart, Activity } from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <div className="text-center py-8 md:py-16 animate-fade-in">
      <div className="inline-block px-4 py-1.5 bg-pink-100 text-pink-800 rounded-full text-sm font-semibold mb-6">
        ✨ Selamat Datang
      </div>
      
      <h1 className="text-4xl md:text-6xl font-black text-pink-900 mb-2">
        Cinta Tubuh,
      </h1>
      <h1 className="text-4xl md:text-6xl font-black text-stone-800 mb-8">
        Sehat Jiwa
      </h1>
      
      <p className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-12">
        Body image yang sehat adalah kunci menuju hubungan yang harmonis dengan makanan dan diri sendiri. 
        Temukan panduan lengkap untuk mencintai diri Anda sepenuhnya.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
        <Button onClick={() => setPage(Page.MATERI)} className="text-lg">
          <BookOpen size={20} />
          Mulai Baca Materi
        </Button>
        <Button variant="outline" onClick={() => setPage(Page.AI_ASSISTANT)} className="text-lg">
          <Heart size={20} />
          Tanya Teman AI
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-50 hover:border-pink-200 transition-colors cursor-pointer" onClick={() => setPage(Page.MATERI)}>
          <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center text-pink-800 mb-4">
            <BookOpen size={20} />
          </div>
          <h3 className="font-bold text-lg text-stone-800 mb-2">Edukasi Lengkap</h3>
          <p className="text-stone-500 text-sm">Pelajari hubungan antara nutrisi, mood, dan citra tubuh.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-sage-100 hover:border-sage-200 transition-colors cursor-pointer" onClick={() => setPage(Page.KALKULATOR)}>
          <div className="bg-sage-100 w-10 h-10 rounded-lg flex items-center justify-center text-sage-800 mb-4">
            <Activity size={20} />
          </div>
          <h3 className="font-bold text-lg text-stone-800 mb-2">Cek Kesehatan</h3>
          <p className="text-stone-500 text-sm">Kalkulator BMI dan TDEE untuk memahami kebutuhan tubuhmu.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-pink-50 hover:border-pink-200 transition-colors cursor-pointer" onClick={() => setPage(Page.KUIS)}>
          <div className="bg-pink-100 w-10 h-10 rounded-lg flex items-center justify-center text-pink-800 mb-4">
            <Heart size={20} />
          </div>
          <h3 className="font-bold text-lg text-stone-800 mb-2">Kenali Dirimu</h3>
          <p className="text-stone-500 text-sm">Kuis interaktif dan checklist untuk evaluasi body image.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;