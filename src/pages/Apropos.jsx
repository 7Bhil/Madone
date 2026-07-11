import { motion } from "framer-motion";
import { Award, Users, Calendar, Target, Heart, Handshake, GraduationCap } from "lucide-react";
import { about, partners } from "../data/content.js";

export default function Apropos() {
  return (
    <section className="py-section px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">À propos</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Notre histoire</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-slate-600 text-lg leading-relaxed">{about.history}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary-50 rounded-2xl p-8 mb-16"
        >
          <div className="flex items-start gap-4">
            <Target className="w-8 h-8 text-primary-700 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Notre mission</h3>
              <p className="text-slate-600">{about.mission}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Nos valeurs</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {about.values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    {index === 0 && <Award className="w-6 h-6 text-primary-700" />}
                    {index === 1 && <Heart className="w-6 h-6 text-primary-700" />}
                    {index === 2 && <Users className="w-6 h-6 text-primary-700" />}
                    {index === 3 && <Handshake className="w-6 h-6 text-primary-700" />}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg mb-2">{value.title}</h4>
                    <p className="text-slate-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Nos statistiques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl p-6 text-center text-white"
              >
                <p className="text-3xl font-bold mb-2">{stat.number}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Notre équipe</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{member.name}</h4>
                    <p className="text-sm text-primary-700 font-medium">{member.role}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">Nos partenaires</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-6 text-center hover:bg-slate-100 transition-all"
              >
                <div className="bg-white rounded-lg p-4 mb-3 mx-auto w-20 h-20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-slate-400">Logo</span>
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{partner.name}</h4>
                <p className="text-sm text-slate-600">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
