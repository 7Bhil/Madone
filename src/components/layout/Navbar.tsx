import { Link } from "react-router-dom";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { nav, school } from "../../data/content.js";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-slate-800 text-xl">
          <GraduationCap className="w-6 h-6 text-primary-600" />
          {school.name}
        </Link>
        
        <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          {nav.slice(0, 7).map((item) => (
            <Link key={item.href} to={item.href} className="hover:text-primary-700 transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/inscription" className="hidden md:block bg-slate-800 text-white text-sm px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-700 transition-colors shadow-md">
            Inscription
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600 hover:text-primary-700">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-3 max-h-96 overflow-y-auto">
          {nav.slice(0, 7).map((item) => (
            <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="block text-slate-600 hover:text-primary-700 font-medium">
              {item.label}
            </Link>
          ))}
          <Link to="/inscription" onClick={() => setIsOpen(false)} className="block bg-slate-800 text-white text-center px-5 py-2.5 rounded-lg font-semibold">Inscription</Link>
        </nav>
      )}
    </header>
  );
}