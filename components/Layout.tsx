import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Heart } from 'lucide-react';

interface LayoutProps {
  currentPage: Page;
  setPage: (page: Page) => void;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ currentPage, setPage, children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.MATERI, label: 'Materi' },
    { id: Page.KALKULATOR, label: 'Kalkulator' },
    { id: Page.KUIS, label: 'Kuis & Ceklis' },
    { id: Page.AI_ASSISTANT, label: 'AI Assistant' },
    { id: Page.TENTANG, label: 'Tentang' },
  ];

  const handleNavClick = (page: Page) => {
    setPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-cream selection:bg-pink-200 selection:text-pink-900">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick(Page.HOME)}>
             <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white shadow-md transform -rotate-3">
                <Heart size={18} fill="currentColor" />
             </div>
             <h1 className="text-xl font-extrabold text-pink-900 tracking-tight">Cinta Tubuh</h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-1 bg-stone-50 p-1 rounded-xl">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  currentPage === item.id 
                    ? 'bg-white text-pink-700 shadow-sm' 
                    : 'text-stone-500 hover:text-stone-800 hover:bg-stone-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-stone-600 p-2 hover:bg-stone-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-xl animate-slide-down">
            <div className="flex flex-col p-4 gap-2">
               {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 rounded-xl font-medium transition-colors ${
                      currentPage === item.id 
                        ? 'bg-pink-50 text-pink-800' 
                        : 'text-stone-600 hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-8 md:py-12">
        {children}
      </main>

      <footer className="bg-stone-800 text-stone-300 py-10 border-t border-stone-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2 font-semibold text-white">Cinta Tubuh, Sehat Jiwa</p>
          <p className="text-sm opacity-60">
            Dibuat dengan ❤️ oleh Lisa Aliya Yumna.
          </p>
          <div className="mt-6 text-xs text-stone-500">
            Disclaimer: Informasi dalam aplikasi ini bukan pengganti saran medis profesional.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;