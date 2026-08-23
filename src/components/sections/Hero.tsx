import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Award, GraduationCap, Calculator } from "lucide-react";
import { school, about } from "../../data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-900 text-white flex items-center overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-800/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-88px)]">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            {/* Main photo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group aspect-[4/5]">
              <img
                src="/images/hero_building.png"
                alt="Campus La Madone Cotonou"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Badge flottant bas */}
              <div className="absolute bottom-5 left-5 right-5 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                <div className="text-xs text-gold-400 font-bold uppercase tracking-wider mb-0.5">
                  Agrée Ministère de l'Éducation du Bénin
                </div>
                <div className="text-white font-semibold text-sm">
                  Campus Haie Vive, Cotonou — Accueil de 7h à 18h
                </div>
              </div>
            </div>

            {/* Floating stat card — top right */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-5 -right-4 hidden sm:block bg-white text-slate-900 rounded-2xl p-4 shadow-xl border border-slate-100"
            >
              <div className="text-3xl font-extrabold text-brand-600 leading-none">100%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Réussite CEP<br />10 ans consécutifs</div>
            </motion.div>

            {/* Floating STEM card — bottom left */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-4 hidden sm:block bg-brand-600 text-white rounded-2xl p-4 shadow-xl"
            >
              <GraduationCap className="w-6 h-6 text-gold-300 mb-1" />
              <div className="text-xs font-bold">Ateliers STEM<br />& Robotique</div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 lg:order-2 space-y-7 text-center lg:text-left"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-400/30 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Inscriptions Ouvertes 2024-2025 · Cotonou</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
              L'Excellence<br />
              <span className="text-gold-400">pour le Futur</span><br />
              de vos Enfants
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              De la Maternelle au CM2 — bilinguisme anglais dès 3 ans, ateliers robotique STEM et 100% de réussite au CEP depuis 10 ans.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Link
                to="/inscription"
                className="bg-gold-500 hover:bg-gold-400 text-slate-950 px-7 py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider transition-all shadow-lg shadow-gold-500/25 flex items-center justify-center gap-2 group"
              >
                <span>Pré-inscrire mon enfant</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/#simulateur"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-gold-400" />
                <span>Simulateur de tarifs</span>
              </a>
            </div>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 max-w-md mx-auto lg:mx-0">
              {about.stats.slice(0, 3).map((s, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 leading-none">{s.number}</div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-tight">{s.label.split("(")[0].trim()}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}