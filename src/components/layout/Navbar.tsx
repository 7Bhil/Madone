import { Link, useLocation } from "react-router-dom";
import { GraduationCap, Menu, X, Phone, Calculator, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { nav, school } from "../../data/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300">
      {/* Top Banner Alert */}
      <div className="bg-gradient-to-r from-brand-900 via-indigo-950 to-brand-900 text-white text-[12px] py-2 px-4 border-b border-brand-800/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-gold-500 text-slate-950 font-bold px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider animate-pulse">
              Urgent
            </span>
            <span className="hidden sm:inline">Inscriptions 2024-2025 ouvertes — Places limitées (25 élèves/classe)</span>
            <span className="sm:hidden">Inscriptions 2024-2025 ouvertes !</span>
          </div>

          <div className="flex items-center gap-4 text-slate-300 text-[11px]">
            <a href={`tel:${school.phone}`} className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden md:inline">{school.phone}</span>
            </a>
            <a href={`https://wa.me/${school.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" className="bg-emerald-600 hover:bg-emerald-500 text-white px-2.5 py-0.5 rounded-md font-semibold transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navbar */}
      <nav className={`transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-slate-200/80 py-3" 
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-4"
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-brand-600/30 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6 text-gold-300" />
            </div>
            <div>
              <span className="font-extrabold text-slate-900 text-lg tracking-tight block leading-none font-heading">
                LA MADONE
              </span>
              <span className="text-[10px] text-brand-600 font-bold tracking-widest uppercase block mt-1">
                Complexe Scolaire
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {nav.slice(0, 6).map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`transition-colors py-1 relative ${
                    isActive ? "text-brand-600 font-bold" : "hover:text-brand-600"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/#simulateur"
              className="text-xs font-bold text-slate-700 hover:text-brand-600 px-3.5 py-2 rounded-xl border border-slate-200 hover:border-brand-300 transition-all flex items-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5 text-brand-600" />
              <span>Simulateur</span>
            </a>

            <Link
              to="/inscription"
              className="bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-700 hover:to-indigo-700 text-white text-xs px-4 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-brand-600/30 flex items-center gap-1.5 uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>Inscrire mon enfant</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-brand-600 rounded-lg"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-200 px-6 py-5 space-y-3 shadow-xl"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-700 hover:text-brand-600 font-semibold py-2 border-b border-slate-100 text-base"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <Link
                to="/inscription"
                onClick={() => setIsOpen(false)}
                className="block bg-brand-600 text-white text-center py-3 rounded-xl font-bold shadow-md"
              >
                Pré-inscription en ligne
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}