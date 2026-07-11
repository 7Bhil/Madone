import { motion } from "framer-motion";
import { Palette, Trophy, BookOpen } from "lucide-react";

const activities = [
  {
    icon: Palette,
    title: "Activités artistiques",
    description: "Dessin, peinture et musique pour développer la créativité",
    color: "bg-purple-100",
    iconColor: "text-purple-700"
  },
  {
    icon: Trophy,
    title: "Sport",
    description: "Éducation physique et activités sportives hebdomadaires",
    color: "bg-green-100",
    iconColor: "text-green-700"
  },
  {
    icon: BookOpen,
    title: "Bibliothèque",
    description: "Emprunt de livres et temps de lecture guidée",
    color: "bg-blue-100",
    iconColor: "text-blue-700"
  }
];

export default function SchoolLife() {
  return (
    <section id="vie-scolaire" className="py-section px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Vie scolaire</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Au-delà des cours</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`${activity.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-7 h-7 ${activity.iconColor}`} />
                </div>
                <h3 className="font-bold text-slate-800 text-xl">{activity.title}</h3>
                <p className="text-slate-600 mt-3">{activity.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}