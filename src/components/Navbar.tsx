import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-serif text-xl tracking-wide cursor-pointer"
      >
        L.B.
      </Link>
      <div className="hidden md:flex gap-8 text-sm font-medium tracking-widest uppercase items-center">
        <a href="/#filosofia" onClick={(e) => handleScrollTo(e, '#filosofia')} className="hover:text-zinc-400 transition-colors">Filosofia</a>
        <a href="/#processo" onClick={(e) => handleScrollTo(e, '#processo')} className="hover:text-zinc-400 transition-colors">Processo</a>
        <Link to="/blog" className={`transition-colors ${location.pathname.startsWith('/blog') ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-200'}`}>Blog</Link>
        <a href="/#contacto" onClick={(e) => handleScrollTo(e, '#contacto')} className="hover:text-zinc-400 transition-colors">Contacto</a>
      </div>
    </nav>
  );
}
