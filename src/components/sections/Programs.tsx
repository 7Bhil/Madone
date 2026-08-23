import { classes } from "../../data/content";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award, Baby, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap: Record<string, any> = {
  maternelle: Baby,
  "ci-cp": BookOpen,
  "ce1-ce2": Award,
  "cm1-cm2": GraduationCap,
};

export default function Programs() {
  return (
    <section id="classes" className="py-section px-4 sm:px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap className="w-4 h-4 text-brand-600" />
            Cursus Complet (2 à 11 ans)
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nos Cycles & Niveaux de Enseignement
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Un accompagnement pédagogique sur-mesure structuré selon le rythme de développement et les besoins de chaque tranche d'âge.
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((c, index) => {
            const Icon = iconMap[c.id] || BookOpen;
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600 shrink-0">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-brand-600 uppercase tracking-wider">
                          Tranche d'âge : {c.age}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                          {c.level}
                        </h3>
                      </div>
                    </div>
                    <span className="bg-slate-100 text-slate-700 font-extrabold px-3 py-1.5 rounded-xl text-xs whitespace-nowrap">
                      {c.annualFee.toLocaleString("fr-FR")} FCFA/an
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {c.detail}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Points Forts du Programme :
                    </h4>
                    {c.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Schedule badge */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Horaires : <strong>{c.schedule}</strong></span>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/inscription?level=${c.id}`}
                    className="text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-md shadow-brand-600/20 flex items-center gap-1.5"
                  >
                    <span>Pré-inscrire à ce niveau</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href="#simulateur"
                    className="text-xs font-semibold text-slate-500 hover:text-brand-600 transition-colors"
                  >
                    Voir dans le simulateur →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}