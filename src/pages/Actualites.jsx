import { useState } from "react";
import { news } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X } from "lucide-react";

export default function Actualites() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [activeArticle, setActiveArticle] = useState(null);

  const categories = ["Toutes", "Inscriptions", "Excellence", "Innovation", "Événement"];

  const filteredNews = selectedCategory === "Toutes" 
    ? news 
    : news.filter(n => n.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="bg-slate-900 text-white py-14 px-4 sm:px-6 text-center">
        <span className="bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Vie de l'Établissement
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 font-heading">
          Actualités & Événements
        </h1>
        <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Restez informés des projets pédagogiques, des résultats d'examens et des moments forts du campus.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-brand-600" />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg group-hover:text-brand-600 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveArticle(item)}
                  className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  <span>Lire l'article complet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Article Reading Modal with backdrop click close */}
      <AnimatePresence>
        {activeArticle && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col"
            >
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/80 text-white flex items-center justify-center hover:bg-slate-900"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 relative shrink-0">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                  <span className="text-xs font-bold text-gold-400 uppercase">{activeArticle.category} • {activeArticle.date}</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">{activeArticle.title}</h2>
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-slate-700 text-sm leading-relaxed">
                <p>{activeArticle.content}</p>
                <div className="bg-brand-50 p-4 rounded-xl border border-brand-100 text-xs text-brand-800">
                  Pour toute question concernant cet article, contactez le secrétariat au <strong>+229 21 33 45 67</strong>.
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
