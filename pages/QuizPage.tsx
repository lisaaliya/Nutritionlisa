import React, { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { QUIZ_QUESTIONS, CHECKLIST_ITEMS } from '../constants';
import { CheckCircle, HelpCircle, AlertCircle } from 'lucide-react';

const QuizPage: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const [checklist, setChecklist] = useState<Record<number, boolean>>({});

  const handleAnswer = (qId: number, optId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optId }));
  };

  const submitQuiz = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });
    setScore(correct);
    setShowResult(true);
  };

  const toggleChecklist = (id: number) => {
    setChecklist(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const checklistCount = Object.values(checklist).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
       <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-pink-900 mb-2">Evaluasi Diri</h2>
        <p className="text-stone-600">Seberapa jauh pemahamanmu?</p>
      </div>

      <Card title="Mini Kuis" icon={<HelpCircle size={24}/>}>
        <div className="space-y-8">
          {QUIZ_QUESTIONS.map((q, idx) => (
            <div key={q.id} className="border-b border-dashed border-stone-200 pb-6 last:border-0">
              <p className="font-bold text-stone-800 mb-3">{idx + 1}. {q.text}</p>
              <div className="space-y-2">
                {q.options.map(opt => (
                  <label key={opt.id} className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${answers[q.id] === opt.id ? 'bg-pink-50 border-pink-300' : 'border-stone-100 hover:bg-stone-50'}`}>
                    <input 
                      type="radio" 
                      name={`q-${q.id}`} 
                      value={opt.id} 
                      checked={answers[q.id] === opt.id}
                      onChange={() => handleAnswer(q.id, opt.id)}
                      disabled={showResult}
                      className="mr-3 accent-pink-600 w-4 h-4"
                    />
                    <span className="text-sm md:text-base">{opt.text}</span>
                    {showResult && opt.id === q.correctAnswer && <span className="ml-auto text-green-600 font-bold text-xs">Benar</span>}
                    {showResult && answers[q.id] === opt.id && opt.id !== q.correctAnswer && <span className="ml-auto text-red-500 font-bold text-xs">Salah</span>}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        {!showResult ? (
          <Button onClick={submitQuiz} fullWidth className="mt-6">Lihat Hasil</Button>
        ) : (
          <div className="mt-6 bg-sage-50 p-6 rounded-xl text-center border border-sage-200 animate-scale-in">
             <p className="text-sage-800 font-bold text-xl mb-2">Skor Kamu: {score} / {QUIZ_QUESTIONS.length}</p>
             <p className="text-sage-700 text-sm">
               {score === QUIZ_QUESTIONS.length ? "Luar biasa! Pemahamanmu sempurna. 🎉" : "Bagus! Terus belajar untuk mencintai tubuhmu. 🌱"}
             </p>
             <Button onClick={() => {setShowResult(false); setAnswers({}); setScore(0)}} variant="outline" className="mt-4 bg-white border-sage-300 text-sage-800 hover:bg-sage-100">Ulangi Kuis</Button>
          </div>
        )}
      </Card>

      <Card title="Checklist Body Image" icon={<AlertCircle size={24}/>} className="mt-8">
        <p className="mb-4 text-stone-600 text-sm">Centang pernyataan yang Anda rasakan sering terjadi.</p>
        <div className="space-y-3">
          {CHECKLIST_ITEMS.map(item => (
            <div key={item.id} className={`flex items-start p-4 rounded-lg border transition-all ${checklist[item.id] ? 'bg-orange-50 border-orange-200' : 'bg-white border-stone-100'}`}>
               <input 
                  type="checkbox" 
                  checked={!!checklist[item.id]} 
                  onChange={() => toggleChecklist(item.id)}
                  className="mt-1 mr-3 w-5 h-5 rounded text-pink-600 focus:ring-pink-500 border-gray-300"
               />
               <label className="text-sm text-stone-700 cursor-pointer select-none" onClick={() => toggleChecklist(item.id)}>{item.text}</label>
            </div>
          ))}
        </div>
        {checklistCount > 0 && (
           <div className="mt-6 p-4 bg-pink-50 rounded-lg border border-pink-100 flex gap-3 items-start animate-fade-in">
              <AlertCircle className="text-pink-600 shrink-0 mt-0.5" size={20} />
              <div className="text-sm text-pink-900">
                <p className="font-bold mb-1">Refleksi Diri</p>
                Anda mencentang {checklistCount} poin. Ini mungkin tanda bahwa Anda sedang berjuang dengan citra tubuh. Cobalah praktikkan <em>Self-Compassion</em> atau bicaralah dengan teman yang dipercaya.
              </div>
           </div>
        )}
      </Card>
    </div>
  );
};

export default QuizPage;