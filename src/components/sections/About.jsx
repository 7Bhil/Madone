import { motion } from "framer-motion";
import { about, school } from "../../data/content";
import { Award, Heart, Sparkles, Users, Quote, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-section px-4 sm:px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Top Header & History */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-brand-600" />
              Depuis 1998 à Cotonou
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Une Tradition d'Excellence & un Regard vers le Futur
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {about.history}
            </p>
            <div className="bg-slate-50 border-l-4 border-brand-600 p-5 rounded-r-2xl space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Notre Mission Pédagogique</h3>
              <p className="text-slate-600 text-sm italic">
                "{about.mission}"
              </p>
            </div>
          </motion.div>

          {/* Director Quote Box */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-gradient-to-br from-brand-900 via-slate-900 to-brand-950 text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative"
          >
            <Quote className="w-16 h-16 text-gold-400/20 absolute top-6 right-6 pointer-events-none" />
            <div className="space-y-6 relative z-10">
              <div className="inline-block bg-gold-500/20 border border-gold-400/40 text-gold-300 px-3 py-1 rounded-full text-xs font-bold uppercase">
                Mot de la Direction
              </div>
              <p className="text-slate-200 text-base sm:text-lg italic leading-relaxed">
                "{school.directorQuote}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <div className="w-12 h-12 rounded-full bg-gold-400 text-slate-950 font-bold flex items-center justify-center text-lg">
                  MK
                </div>
                <div>
                  <div className="font-bold text-white text-base">{school.director}</div>
                  <div className="text-xs text-slate-400">{school.directorTitle}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Nos 4 Piliers Éducatifs
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Une pédagogie globale conçue pour l'épanouissement intellectuel, humain et créatif.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((val, idx) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:border-brand-300 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">{val.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Statistics Cards */}
        <div className="bg-gradient-to-r from-brand-900 via-indigo-900 to-brand-950 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-brand-800">
            {about.stats.map((stat, idx) => (
              <div key={idx} className="pt-4 lg:pt-0 px-2">
                <div className="text-4xl sm:text-5xl font-extrabold text-gold-400 font-heading">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}