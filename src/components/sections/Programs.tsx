import { classes } from "../../data/content.js";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const icons = {
  "Maternelle": BookOpen,
  "CI - CP": GraduationCap,
  "CE1 - CE2": Award,
  "CM1 - CM2": BookOpen,
};

export default function Programs() {
  return (
    <section id="classes" className="py-section px-6 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Parcours</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Nos classes</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {classes.map((c, index) => {
            const Icon = icons[c.level as keyof typeof icons] || BookOpen;
            return (
              <motion.div
                key={c.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-xl">{c.level}</h3>
                    <p className="text-slate-600 mt-2">{c.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}