import { useState } from "react";
import { faq } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, HelpCircle, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const filteredFaq = faq.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-20 bg-slate-50 min-h-screen pb-16">
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6 text-center">
        <span className="bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Support & Aide Parents
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 font-heading">
          Foire Aux Questions (FAQ)
        </h1>
        <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Retrouvez les réponses aux interrogations les plus fréquentes concernant les admissions, les frais, la cantine et le transport.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto mt-8 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Rechercher une question (ex: frais, bus, horaires)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-brand-400 outline-none"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 space-y-4">
        {filteredFaq.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 sm:p-6 text-left font-bold text-slate-900 flex items-center justify-between gap-4 hover:text-brand-600 transition-colors"
              >
                <span className="text-base sm:text-lg">{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-brand-600" : ""}`} />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5 pb-6 sm:px-6 text-slate-600 text-sm sm:text-base border-t border-slate-100 pt-4 leading-relaxed"
                  >
                    {item.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}

        {/* Contact help box */}
        <div className="bg-gradient-to-r from-brand-900 to-indigo-900 text-white rounded-2xl p-8 text-center space-y-4 mt-12 shadow-xl">
          <HelpCircle className="w-12 h-12 text-gold-400 mx-auto" />
          <h3 className="text-xl font-bold">Vous ne trouvez pas la réponse à votre question ?</h3>
          <p className="text-slate-300 text-sm max-w-md mx-auto">
            Notre secrétariat est à votre entière disposition pour échanger de vive voix et planifier une visite du campus.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="bg-gold-500 hover:bg-gold-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm transition-colors"
            >
              Prendre Rendez-vous de Visite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
