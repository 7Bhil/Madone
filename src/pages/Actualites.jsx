import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { news } from "../data/content.js";

export default function Actualites() {
  return (
    <section className="py-section px-6 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Actualités</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Nouvelles et événements</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {news.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 h-48 flex items-center justify-center">
                <span className="text-slate-400 text-lg">Image: {article.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-slate-600">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{article.title}</h3>
                <p className="text-slate-600 mb-4">{article.excerpt}</p>
                <button className="text-primary-700 font-semibold flex items-center gap-2 hover:text-primary-800 transition-colors">
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-md hover:shadow-lg">
            Voir toutes les actualités
          </button>
        </motion.div>
      </div>
    </section>
  );
}
