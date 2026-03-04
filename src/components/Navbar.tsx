import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (isHome) {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 text-zinc-50 py-5 px-6 md:px-10 flex justify-between items-center">
      <Link 
        to="/"
        onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        className="font-serif text-xl tracking-wide cursor-pointer z-50"
      >
        L.B.
      </Link>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase items-center">
        <a href="/#filosofia" onClick={(e) => handleScrollTo(e, '#filosofia')} className="hover:text-zinc-400 transition-colors">Filosofia</a>
        <a href="/#processo" onClick={(e) => handleScrollTo(e, '#processo')} className="hover:text-zinc-400 transition-colors">Processo</a>
        <Link to="/blog" className={`transition-colors ${location.pathname.startsWith('/blog') ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-200'}`}>Blog</Link>
        <a href="/#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} className="hover:text-zinc-400 transition-colors">Contacto</a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden z-50 text-zinc-50 p-2 -mr-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-zinc-950 border-b border-zinc-800/50 p-6 flex flex-col gap-6 shadow-2xl md:hidden"
          >
            <a href="/#filosofia" onClick={(e) => handleScrollTo(e, '#filosofia')} className="text-lg font-medium tracking-widest uppercase hover:text-zinc-400 transition-colors">Filosofia</a>
            <a href="/#processo" onClick={(e) => handleScrollTo(e, '#processo')} className="text-lg font-medium tracking-widest uppercase hover:text-zinc-400 transition-colors">Processo</a>
            <Link to="/blog" onClick={() => setIsOpen(false)} className={`text-lg font-medium tracking-widest uppercase transition-colors ${location.pathname.startsWith('/blog') ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-200'}`}>Blog</Link>
            <a href="/#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} className="text-lg font-medium tracking-widest uppercase hover:text-zinc-400 transition-colors">Contacto</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
