import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Award, GraduationCap, CheckCircle2, Calculator, Play } from "lucide-react";
import { school, about } from "../../data/content";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-14 lg:pt-16 lg:pb-20 bg-gradient-to-b from-slate-900 via-brand-950 to-slate-900 text-white overflow-hidden">
      {/* Glow background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-gold-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Inscriptions Ouvertes 2024-2025 • Cotonou, Bénin</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight font-heading">
              L'Excellence Éducative <br />
              <span className="text-gradient-gold">pour le Futur de vos Enfants</span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Du Tout-Petit à la Classe de CM2, nous offrons un environnement bilingue, sécurisé et innovant avec ateliers de robotique STEM et 100% de réussite au CEP.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/inscription"
                className="w-full sm:w-auto bg-gradient-to-r from-gold-500 via-amber-500 to-gold-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 px-8 py-4 rounded-xl font-extrabold text-base transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 group uppercase tracking-wider"
              >
                <span>Pré-inscrire mon enfant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="#simulateur"
                className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-white px-7 py-4 rounded-xl font-bold text-base border border-slate-700 hover:border-slate-500 transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5 text-brand-400" />
                <span>Simulateur de Tarifs</span>
              </a>
            </div>

            {/* Key Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-gold-400">100%</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Réussite CEP (10 ans)</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">25+</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Ans d'expérience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">Bilingue</div>
                <div className="text-xs text-slate-400 mt-1 font-medium">Anglais dès 3 ans</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Campus Image Card */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-brand-500/30 shadow-2xl group">
              <img
                src="/images/hero_building.png"
                alt="Campus Éducatif La Madone Cotonou"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-6 flex flex-col justify-end">
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-slate-700/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-bold uppercase tracking-wider">
                    <span>Cadre Sécurisé & Climatisé</span>
                    <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">Agrée Bénin</span>
                  </div>
                  <div className="text-sm font-bold text-white">
                    Des infrastructures d'exception au cœur de Cotonou (Haie Vive)
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Excellence */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-gold-500/40 shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center text-gold-400">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">École de Référence</div>
                <div className="text-[11px] text-slate-400">Pédagogie active & suivie</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: STEM Robotics */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 bg-slate-900/95 backdrop-blur-md p-3.5 rounded-2xl border border-brand-500/40 shadow-xl hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-600/30 flex items-center justify-center text-brand-300">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Ateliers STEM & Codage</div>
                <div className="text-[11px] text-slate-400">Équipements numériques</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}