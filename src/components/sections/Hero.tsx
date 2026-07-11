import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="bg-gradient-to-br from-primary-50 to-primary-100 px-6 flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '0.5rem' }}>
      <div className="max-w-6xl mx-auto text-center w-full">
        <motion.span 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-primary-700 font-semibold"
        >
          Cours Primaire · Cotonou
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-slate-800 mt-4 leading-tight"
        >
          École La Madone
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 mt-8 max-w-2xl mx-auto text-lg"
        >
          De la maternelle au CM2, un accompagnement attentif pour chaque enfant dans un environnement bienveillant.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center gap-4 flex-wrap"
        >
          <Link to="/inscription" className="bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl">
            Inscrire mon enfant
          </Link>
          <Link to="/#about" className="border-2 border-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 hover:text-white transition-all">
            Découvrir l'école
          </Link>
        </motion.div>
      </div>
    </section>
  );
}