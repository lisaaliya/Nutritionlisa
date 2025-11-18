import { Question, ChecklistItem } from './types';

export const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Body Image Positif berfokus pada apa?",
    options: [
      { id: 'a', text: "Ukuran tubuh ideal." },
      { id: 'b', text: "Kemampuan dan kesehatan tubuh." },
      { id: 'c', text: "Pujian dari orang lain." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 2,
    text: "Apa risiko utama dari Body Image Negatif?",
    options: [
      { id: 'a', text: "Kelebihan berat badan." },
      { id: 'b', text: "Perkembangan Gangguan Makan." },
      { id: 'c', text: "Kurang tidur." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 3,
    text: "Prinsip utama 'Mindful Eating' adalah?",
    options: [
      { id: 'a', text: "Menghitung kalori setiap suapan." },
      { id: 'b', text: "Makan dengan kesadaran penuh, tanpa distraksi." },
      { id: 'c', text: "Makan hanya saat perut sudah terasa sangat lapar." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 4,
    text: "Hormon bahagia (serotonin) didukung oleh nutrisi seimbang, ini berkaitan dengan?",
    options: [
      { id: 'a', text: "Kesehatan Tulang." },
      { id: 'b', text: "Hubungan Gizi & Kesehatan Mental." },
      { id: 'c', text: "Kesehatan Gigi." }
    ],
    correctAnswer: 'b'
  },
  {
    id: 5,
    text: "Berapa porsi sayur/buah ideal dalam 'Isi Piringku'?",
    options: [
      { id: 'a', text: "1/4 piring." },
      { id: 'b', text: "1/2 piring." },
      { id: 'c', text: "3/4 piring." }
    ],
    correctAnswer: 'b'
  }
];

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 1, text: "Apakah saya sering membandingkan tubuh saya dengan orang lain di media sosial?" },
  { id: 2, text: "Apakah makanan memicu rasa bersalah yang intens setelah saya mengonsumsinya?" },
  { id: 3, text: "Apakah saya merasa penampilan saya adalah satu-satunya sumber nilai diri saya?" },
  { id: 4, text: "Apakah saya berolahraga untuk 'menghukum' diri setelah makan?" }
];

export const SYSTEM_INSTRUCTION = `
Anda adalah asisten AI yang ramah dan empatik untuk aplikasi "Cinta Tubuh, Sehat Jiwa".
Tujuan Anda adalah memberikan informasi yang mendukung tentang citra tubuh positif (positive body image) dan gizi seimbang.
Gunakan bahasa yang lembut, tidak menghakimi, dan hindari budaya diet toksik (toxic diet culture).
Jika pengguna bertanya tentang penurunan berat badan ekstrem, arahkan mereka ke pola hidup sehat berkelanjutan.
Anda dapat menjawab pertanyaan seputar nutrisi, kesehatan mental terkait tubuh, dan tips self-love.
`;