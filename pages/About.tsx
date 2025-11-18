import React from 'react';
import Card from '../components/Card';
import { Page } from '../types';

const About: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-pink-900 mb-4">Tentang Kami</h2>
      </div>

      <Card title="Pesan Penulis" className="border-l-4 border-l-pink-400">
        <p className="text-lg italic text-stone-700 mb-6">
          "Perjalanan menuju citra tubuh positif adalah sebuah maraton, bukan sprint. Kesehatan sejati tidak diukur oleh angka di timbangan, melainkan oleh vitalitas, kebahagiaan, dan kesejahteraan mental Anda."
        </p>
        <div className="bg-pink-50 p-4 rounded-lg">
            <p className="font-bold text-pink-800 mb-1">Misi Kami</p>
            <p className="text-sm text-stone-600">
                Mengajak setiap individu untuk merawat tubuh dengan nutrisi, gerakan, dan kebaikan, bukan dengan pembatasan yang menyiksa dan kebencian terhadap diri sendiri.
            </p>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-sage-200 flex items-center justify-center text-2xl font-bold text-sage-700 shadow-inner border-4 border-white">
                LA
            </div>
            <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold text-stone-800">Lisa Aliya Yumna</h3>
                <p className="text-pink-600 font-medium mb-2">Creator & Penulis</p>
                <p className="text-stone-600 leading-relaxed">
                    Berdedikasi untuk menyebarkan kesadaran tentang hubungan harmonis antara kesehatan mental, penerimaan diri, dan nutrisi yang mindful. Aplikasi ini dibuat dengan sepenuh hati untuk membantu Anda mencintai rumah sejati Anda: Tubuh Anda.
                </p>
            </div>
        </div>
      </Card>
    </div>
  );
};

export default About;