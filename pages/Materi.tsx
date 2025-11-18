import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Page } from '../types';
import { BookOpen, Brain, Heart, ShieldCheck, Leaf } from 'lucide-react';

interface MateriProps {
  setPage: (page: Page) => void;
}

const Materi: React.FC<MateriProps> = ({ setPage }) => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pink-900 mb-4">Panduan Body Image & Gizi</h2>
        <p className="text-stone-600">Pelajari dasar-dasar membangun hubungan sehat dengan tubuh Anda.</p>
      </div>

      <Card title="1. Mengenal Body Image" icon={<Brain size={24} />} className="hover:shadow-md transition-shadow">
        <p className="mb-4 leading-relaxed">
          <span className="font-bold text-pink-800">Body Image</span> adalah bagaimana Anda melihat, memikirkan, dan merasakan tentang penampilan fisik Anda. Ini lebih dari sekadar pantulan di cermin; ini adalah persepsi mental yang kompleks.
        </p>
        <div className="bg-pink-50 p-4 rounded-xl border border-pink-100">
          <h4 className="font-bold text-pink-800 mb-2 text-sm uppercase tracking-wide">Jenis-jenis Body Image</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> <span><strong>Perseptual:</strong> Cara Anda melihat ukuran/bentuk tubuh Anda.</span></li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> <span><strong>Afektif:</strong> Perasaan Anda tentang tubuh Anda (puas/benci).</span></li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> <span><strong>Kognitif:</strong> Pikiran/keyakinan tentang tubuh Anda.</span></li>
            <li className="flex gap-2"><span className="text-pink-500 font-bold">•</span> <span><strong>Behavioral:</strong> Tindakan yang Anda lakukan (cek cermin, diet).</span></li>
          </ul>
        </div>
      </Card>

      <Card title="2. Faktor Pembentuk" icon={<ShieldCheck size={24} />}>
        <ul className="space-y-3">
            {[
                { t: "Media Sosial", d: "Paparan citra tubuh 'ideal' yang tidak realistis." },
                { t: "Keluarga", d: "Komentar masa kecil tentang berat badan atau penampilan." },
                { t: "Budaya", d: "Standar kecantikan yang sempit dalam masyarakat." },
                { t: "Psikologis", d: "Harga diri, kecemasan, atau depresi." }
            ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                    <div className="min-w-6 h-6 rounded-full bg-sage-100 text-sage-800 flex items-center justify-center text-xs font-bold mt-0.5">{idx + 1}</div>
                    <div>
                        <span className="font-bold text-stone-800">{item.t}:</span> <span className="text-stone-600">{item.d}</span>
                    </div>
                </li>
            ))}
        </ul>
      </Card>

      <Card title="3. Hubungan Gizi & Mental" icon={<Heart size={24} />}>
        <p className="mb-4">
          Ketidakpuasan tubuh sering memicu pola makan ekstrem yang justru merusak kesehatan mental.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="bg-white border border-stone-200 p-4 rounded-lg">
                <h5 className="font-bold text-stone-800 mb-2">🚫 Risiko</h5>
                <p className="text-sm text-stone-600">Diet ketat dapat menyebabkan kekurangan nutrisi (Omega-3, Vit B) yang memicu mood swing dan depresi.</p>
             </div>
             <div className="bg-sage-50 border border-sage-100 p-4 rounded-lg">
                <h5 className="font-bold text-sage-800 mb-2">✅ Manfaat Gizi</h5>
                <p className="text-sm text-stone-600">Makanan seimbang menstabilkan gula darah & mendukung hormon serotonin (bahagia).</p>
             </div>
        </div>
      </Card>

      <Card title="4. Strategi Positif" icon={<Leaf size={24} />}>
        <ul className="space-y-4">
            <li className="bg-stone-50 p-3 rounded-lg">
                <strong className="text-pink-800 block mb-1">Mindful Eating</strong>
                Makan dengan sadar. Nikmati rasa dan tekstur. Dengarkan sinyal lapar dan kenyang tubuh, bukan aturan diet kaku.
            </li>
            <li className="bg-stone-50 p-3 rounded-lg">
                <strong className="text-pink-800 block mb-1">Digital Detox</strong>
                Unfollow akun yang membuat Anda merasa buruk tentang diri sendiri. Curate feed Anda dengan konten inspiratif.
            </li>
            <li className="bg-stone-50 p-3 rounded-lg">
                <strong className="text-pink-800 block mb-1">Self-Compassion</strong>
                Bicaralah pada diri sendiri seperti Anda berbicara pada sahabat. Ganti kritik dengan pengertian.
            </li>
        </ul>
      </Card>

      <Card title="5. Isi Piringku" icon={<BookOpen size={24} />}>
         <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-48 h-48 rounded-full border-4 border-sage-200 relative bg-white shadow-inner flex-shrink-0">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-green-100 rounded-t-full border-b border-sage-200 flex items-center justify-center text-xs font-bold text-green-800">Sayur & Buah (50%)</div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-yellow-50 rounded-bl-full border-r border-sage-200 flex items-center justify-center text-xs font-bold text-yellow-800">Karbo (25%)</div>
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-orange-50 rounded-br-full flex items-center justify-center text-xs font-bold text-orange-800">Protein (25%)</div>
            </div>
            <div className="flex-1">
                <h4 className="font-bold mb-2">Panduan Porsi Makan</h4>
                <p className="text-sm mb-2">Tidak ada makanan jahat. Kuncinya adalah proporsi.</p>
                <ul className="text-sm space-y-1 list-disc pl-4 text-stone-600">
                    <li><strong>1/2 Piring:</strong> Sayuran dan Buah-buahan.</li>
                    <li><strong>1/4 Piring:</strong> Karbohidrat Kompleks (Nasi, Kentang, Oat).</li>
                    <li><strong>1/4 Piring:</strong> Protein (Ikan, Ayam, Tahu, Tempe).</li>
                </ul>
            </div>
         </div>
      </Card>

      <div className="text-center mt-8">
        <Button onClick={() => setPage(Page.KALKULATOR)} variant="sage" className="w-full md:w-auto shadow-lg">
            Coba Kalkulator Kesehatan &rarr;
        </Button>
      </div>
    </div>
  );
};

export default Materi;