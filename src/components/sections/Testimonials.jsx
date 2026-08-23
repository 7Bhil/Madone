import { motion } from "framer-motion";
import { testimonials } from "../../data/content";
import { Star, Quote, MessageSquare, Play, Sparkles } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-section px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-gold-400" />
            Témoignages & Avis Parents
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Ce que disent les Familles de La Madone
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            La confiance des parents est notre plus grande fierté. Découvrez le témoignage de ceux qui nous confient leurs enfants.
          </p>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-7 flex flex-col justify-between shadow-xl hover:border-gold-400/50 transition-all group"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-gold-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-slate-600 group-hover:text-gold-400 transition-colors" />

                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-6 border-t border-slate-700/60">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold-400"
                />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <span className="text-xs text-slate-400">{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}