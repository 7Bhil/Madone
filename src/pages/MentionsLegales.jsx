import { motion } from "framer-motion";
import { FileText, Shield, Cookie } from "lucide-react";
import { legal } from "../data/content.js";

export default function MentionsLegales() {
  return (
    <section className="py-section px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Légal</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Mentions légales & Confidentialité</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-primary-700" />
              <h3 className="text-2xl font-bold text-slate-800">{legal.mentions.title}</h3>
            </div>
            <div className="space-y-4 text-slate-600">
              <p><strong>Éditeur :</strong> {legal.mentions.editor}</p>
              <p><strong>Adresse :</strong> {legal.mentions.address}</p>
              <p><strong>Téléphone :</strong> {legal.mentions.phone}</p>
              <p><strong>Email :</strong> {legal.mentions.email}</p>
              <p><strong>SIRET :</strong> {legal.mentions.siret}</p>
              <p>{legal.mentions.hosting}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-slate-50 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary-700" />
              <h3 className="text-2xl font-bold text-slate-800">{legal.privacy.title}</h3>
            </div>
            <div className="space-y-6 text-slate-600">
              <p>{legal.privacy.introduction}</p>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Collecte des données</h4>
                <p>{legal.privacy.dataCollection}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Utilisation des données</h4>
                <p>{legal.privacy.dataUsage}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">Vos droits</h4>
                <p>{legal.privacy.dataRights}</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Cookie className="w-5 h-5 text-primary-700 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2">Cookies</h4>
                  <p>{legal.privacy.cookies}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center text-sm text-slate-500"
        >
          <p>Dernière mise à jour : Juillet 2024</p>
        </motion.div>
      </div>
    </section>
  );
}
