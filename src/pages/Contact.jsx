import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, User } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-section px-6 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Contact</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Nous contacter</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Informations</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Adresse</p>
                  <p className="text-slate-600">Cotonou, Bénin</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Téléphone</p>
                  <p className="text-slate-600">+229 XX XX XX XX</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <p className="text-slate-600">contact@lamadone.bj</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-5 h-5 text-primary-700" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Horaires</p>
                  <p className="text-slate-600">Lundi - Vendredi : 7h30 - 16h30</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-slate-200 rounded-xl p-8 shadow-lg space-y-6"
          >
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                <User className="w-4 h-4" />
                Nom
              </label>
              <input 
                required 
                placeholder="Votre nom" 
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
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea 
                required 
                placeholder="Votre message..." 
                rows={5}
                className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-slate-800 text-white px-6 py-4 rounded-lg font-semibold hover:bg-slate-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <Send className="w-5 h-5" />
              Envoyer
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
