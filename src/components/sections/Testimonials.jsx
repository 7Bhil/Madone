import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie K.",
    text: "Mon fils a fait d'énormes progrès depuis son entrée à La Madone. Les enseignants sont très attentionnés.",
    rating: 5
  },
  {
    name: "Jean-Pierre M.",
    text: "Une école à taille humaine où chaque enfant est connu et suivi individuellement. Je recommande vivement.",
    rating: 5
  },
  {
    name: "Sophie A.",
    text: "L'environnement est bienveillant et les valeurs transmises sont excellentes. Ma fille adore y aller.",
    rating: 5
  },
  {
    name: "Marc D.",
    text: "Communication fluide avec l'équipe pédagogique. On se sent vraiment partenaires dans l'éducation de nos enfants.",
    rating: 5
  }
];

export default function Testimonials() {
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
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Témoignages</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Ce que disent les parents</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all"
            >
              <Quote className="w-8 h-8 text-primary-300 mb-4" />
              <p className="text-slate-700 italic text-lg leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center justify-between mt-6">
                <p className="text-slate-800 font-semibold">— {testimonial.name}</p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-primary-500 fill-primary-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}