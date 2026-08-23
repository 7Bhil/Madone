import { useState } from "react";
import { gallery } from "../data/content";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Image as ImageIcon } from "lucide-react";

export default function Galerie() {
  const [selectedCat, setSelectedCat] = useState("Toutes");
  const [activeImage, setActiveImage] = useState(null);

  const filteredImages = selectedCat === "Toutes"
    ? gallery.images
    : gallery.images.filter(img => img.category === selectedCat);

  return (
    <div className="bg-slate-50 min-h-screen pb-12">
      <div className="bg-slate-900 text-white py-10 px-4 sm:px-6 text-center">
        <span className="bg-brand-500/20 text-brand-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
          Visite en Images
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white mt-3 font-heading">
          Galerie Photos du Campus
        </h1>
        <p className="text-slate-300 mt-2 text-sm sm:text-base max-w-2xl mx-auto">
          Explorez nos infrastructures, nos salles interactives, nos terrains de jeux et les moments forts de l'école.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCat === cat
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/30"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredImages.map((img) => (
            <motion.div
              layout
              key={img.id}
              onClick={() => setActiveImage(img)}
              className="relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group h-64 border border-slate-200"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                <span className="text-[11px] font-bold text-gold-400 uppercase">{img.category}</span>
                <h4 className="font-bold text-sm text-white flex items-center justify-between">
                  <span>{img.title}</span>
                  <ZoomIn className="w-4 h-4 text-white" />
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md" onClick={() => setActiveImage(null)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="bg-slate-900 p-4 text-white text-center">
                <span className="text-xs text-gold-400 font-bold uppercase">{activeImage.category}</span>
                <h3 className="font-bold text-base mt-0.5">{activeImage.title}</h3>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
