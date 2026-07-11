import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { faq } from "../data/content.js";

export default function FAQ() {
  return (
    <section className="py-section px-6 bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">FAQ</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Questions fréquentes</h2>
        </motion.div>

        <div className="space-y-4">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <HelpCircle className="w-5 h-5 text-primary-700" />
                    </div>
                    <h3 className="font-semibold text-slate-800">{item.question}</h3>
                  </div>
                  <ChevronDown className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-slate-600 leading-relaxed pl-14">{item.answer}</p>
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-800 mb-3">Vous ne trouvez pas votre réponse ?</h3>
          <p className="text-slate-600 mb-6">N'hésitez pas à nous contacter directement</p>
          <a href="/contact" className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-md hover:shadow-lg">
            Nous contacter
          </a>
        </motion.div>
      </div>
    </section>
  );
}
