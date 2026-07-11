import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, User, GraduationCap, Phone, Mail, Send } from "lucide-react";

export default function Admission() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: brancher un vrai envoi (email, Airtable, ou back-end plus tard)
    setSent(true);
  }

  return (
    <section id="inscription" className="py-section px-6 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-2xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Rejoindre l'école</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Demande de pré-inscription</h2>
        </motion.div>

        {sent ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-green-200 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Demande envoyée !</h3>
              <p className="text-slate-600">
                Merci ! Votre demande a été enregistrée, l'école vous recontactera sous peu.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit} 
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom de l'enfant
              </label>
              <input 
                required 
                placeholder="Entrez le nom de l'enfant" 
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Classe souhaitée
              </label>
              <input 
                required 
                placeholder="Ex: CP, CE1, CM2..." 
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Téléphone du parent
              </label>
              <input 
                required 
                type="tel" 
                placeholder="Ex: +229 XX XX XX XX" 
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <input 
                required 
                type="email" 
                placeholder="votre@email.com" 
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-slate-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Send className="w-5 h-5" />
              Envoyer la demande
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}