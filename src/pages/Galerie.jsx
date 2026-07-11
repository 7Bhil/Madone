import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { gallery } from "../data/content.js";

export default function Galerie() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  const filteredImages = selectedCategory === "Toutes" 
    ? gallery.images 
    : gallery.images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-section px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest text-primary-700 font-semibold">Galerie</span>
          <h2 className="text-4xl font-bold text-slate-800 mt-3">Nos moments</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {gallery.categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative group overflow-hidden rounded-xl aspect-square bg-slate-100 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <span className="text-slate-400 text-sm text-center px-4">{image.alt}</span>
              </div>
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-sm font-medium">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-slate-500">Aucune image dans cette catégorie</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
