import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Page } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import Materi from './pages/Materi';
import Calculators from './pages/Calculators';
import QuizPage from './pages/QuizPage';
import About from './pages/About';
import AskAI from './pages/AskAI';

// Utility for simple keyframe animations injection
const AnimationStyles = () => (
  <style>{`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
    .animate-scale-in { animation: scaleIn 0.3s ease-out forwards; }
    .animate-slide-down { animation: slideDown 0.2s ease-out forwards; }
  `}</style>
);

const App: React.FC = () => {
  // We use local state to manage 'active tab' for the Layout highlighting
  // but rely on HashRouter for actual rendering to allow back button support if we wanted extended features.
  // However, given the requirements, a simple state-based renderer inside Layout is cleaner for this exact SPA feel.
  // Let's stick to a pure State-based navigation as per the robust SPA requested structure without heavy routing config if not needed.
  // Actually, HashRouter is explicitly allowed and good practice.
  
  const [page, setPage] = useState<Page>(Page.HOME);

  // Sync state with hash manually if needed, or just use state. 
  // For this implementation, we will use simple State Navigation wrapped in the Layout
  // because it provides the smoothest "App-like" feel without browser URL clutter for a simple tool.

  const renderPage = () => {
    switch(page) {
      case Page.HOME: return <Home setPage={setPage} />;
      case Page.MATERI: return <Materi setPage={setPage} />;
      case Page.KALKULATOR: return <Calculators />;
      case Page.KUIS: return <QuizPage />;
      case Page.AI_ASSISTANT: return <AskAI />;
      case Page.TENTANG: return <About />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <>
      <AnimationStyles />
      <Layout currentPage={page} setPage={setPage}>
        {renderPage()}
      </Layout>
    </>
  );
};

export default App;