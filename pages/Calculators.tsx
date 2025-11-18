import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Activity, Zap } from 'lucide-react';

const Calculators: React.FC = () => {
  // BMI State
  const [bmiWeight, setBmiWeight] = useState<string>('');
  const [bmiHeight, setBmiHeight] = useState<string>('');
  const [bmiResult, setBmiResult] = useState<{ value: string; category: string; color: string } | null>(null);

  // TDEE State
  const [tdeeGender, setTdeeGender] = useState<'pria' | 'wanita'>('pria');
  const [tdeeAge, setTdeeAge] = useState<string>('');
  const [tdeeWeight, setTdeeWeight] = useState<string>('');
  const [tdeeHeight, setTdeeHeight] = useState<string>('');
  const [tdeeActivity, setTdeeActivity] = useState<string>('1.55');
  const [tdeeResult, setTdeeResult] = useState<{ bmr: number; tdee: number } | null>(null);

  const calculateBMI = () => {
    const w = parseFloat(bmiWeight);
    const h = parseFloat(bmiHeight);

    if (!w || !h) return;

    const hM = h / 100;
    const bmi = w / (hM * hM);
    const val = bmi.toFixed(2);

    let category = '';
    let color = '';

    if (bmi < 18.5) {
      category = 'Kekurangan Berat Badan';
      color = 'text-blue-600 bg-blue-50';
    } else if (bmi < 25) {
      category = 'Berat Badan Normal (Sehat)';
      color = 'text-green-600 bg-green-50';
    } else if (bmi < 30) {
      category = 'Kelebihan Berat Badan';
      color = 'text-orange-600 bg-orange-50';
    } else {
      category = 'Obesitas';
      color = 'text-red-600 bg-red-50';
    }

    setBmiResult({ value: val, category, color });
  };

  const calculateTDEE = () => {
    const w = parseFloat(tdeeWeight);
    const h = parseFloat(tdeeHeight);
    const a = parseFloat(tdeeAge);
    const act = parseFloat(tdeeActivity);

    if (!w || !h || !a) return;

    let bmr = 0;
    if (tdeeGender === 'pria') {
      bmr = (10 * w) + (6.25 * h) - (5 * a) + 5;
    } else {
      bmr = (10 * w) + (6.25 * h) - (5 * a) - 161;
    }

    const tdee = bmr * act;
    setTdeeResult({ bmr: Math.round(bmr), tdee: Math.round(tdee) });
  };

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-900 mb-2">Alat Kesehatan</h2>
        <p className="text-stone-600">Pahami kebutuhan unik tubuhmu.</p>
      </div>

      {/* BMI Calculator */}
      <Card title="Kalkulator BMI" icon={<Activity size={24}/>} subtitle="Indeks Massa Tubuh">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Berat Badan (kg)</label>
            <input 
              type="number" 
              value={bmiWeight}
              onChange={(e) => setBmiWeight(e.target.value)}
              className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none transition"
              placeholder="Contoh: 60"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Tinggi Badan (cm)</label>
            <input 
              type="number" 
              value={bmiHeight}
              onChange={(e) => setBmiHeight(e.target.value)}
              className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none transition"
              placeholder="Contoh: 165"
            />
          </div>
        </div>
        <Button onClick={calculateBMI} fullWidth>Hitung BMI</Button>
        
        {bmiResult && (
          <div className={`mt-6 p-4 rounded-lg border text-center ${bmiResult.color} border-current border-opacity-20 animate-scale-in`}>
            <p className="text-sm font-semibold uppercase tracking-wide opacity-80">Hasil BMI Anda</p>
            <p className="text-4xl font-black my-2">{bmiResult.value}</p>
            <p className="font-bold text-lg">{bmiResult.category}</p>
          </div>
        )}
      </Card>

      {/* TDEE Calculator */}
      <Card title="Kalkulator TDEE" icon={<Zap size={24}/>} subtitle="Kebutuhan Energi Harian">
        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-1">Jenis Kelamin</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" checked={tdeeGender === 'pria'} onChange={() => setTdeeGender('pria')} className="accent-pink-600" /> Pria
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="gender" checked={tdeeGender === 'wanita'} onChange={() => setTdeeGender('wanita')} className="accent-pink-600" /> Wanita
              </label>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Usia</label>
                <input type="number" value={tdeeAge} onChange={(e) => setTdeeAge(e.target.value)} className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Berat (kg)</label>
                <input type="number" value={tdeeWeight} onChange={(e) => setTdeeWeight(e.target.value)} className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none" />
            </div>
            <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Tinggi (cm)</label>
                <input type="number" value={tdeeHeight} onChange={(e) => setTdeeHeight(e.target.value)} className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none" />
            </div>
          </div>
          <div>
             <label className="block text-sm font-medium text-stone-700 mb-1">Aktivitas Fisik</label>
             <select 
                value={tdeeActivity} 
                onChange={(e) => setTdeeActivity(e.target.value)}
                className="w-full p-3 border border-stone-200 rounded-lg focus:ring-2 focus:ring-pink-300 outline-none bg-white"
             >
                <option value="1.2">Sangat Ringan (Sedikit/tanpa olahraga)</option>
                <option value="1.375">Ringan (Olahraga 1-3x/minggu)</option>
                <option value="1.55">Sedang (Olahraga 3-5x/minggu)</option>
                <option value="1.725">Berat (Olahraga 6-7x/minggu)</option>
                <option value="1.9">Ekstrem (Fisik berat/atlet)</option>
             </select>
          </div>
        </div>
        <Button onClick={calculateTDEE} variant="sage" fullWidth>Hitung Kebutuhan Kalori</Button>

        {tdeeResult && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 animate-scale-in">
            <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-center">
                <p className="text-xs uppercase font-bold text-stone-500">BMR (Energi Istirahat)</p>
                <p className="text-2xl font-black text-stone-700">{tdeeResult.bmr} <span className="text-sm font-normal">kkal/hari</span></p>
            </div>
            <div className="bg-sage-50 p-4 rounded-xl border border-sage-200 text-center">
                <p className="text-xs uppercase font-bold text-sage-600">TDEE (Total Harian)</p>
                <p className="text-2xl font-black text-sage-700">{tdeeResult.tdee} <span className="text-sm font-normal">kkal/hari</span></p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Calculators;