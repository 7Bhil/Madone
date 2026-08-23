import { useState } from "react";
import { motion } from "framer-motion";
import { canteenMenu } from "../../data/content";
import { Utensils, Bus, Clock, ShieldCheck, CheckCircle, Apple, MapPin } from "lucide-react";

export default function CanteenMenu() {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const currentMenu = canteenMenu.days[selectedDayIndex];

  return (
    <section className="py-section px-4 sm:px-6 bg-white border-t border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Canteen section */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Utensils className="w-4 h-4 text-emerald-600" />
                Restauration Bio & Équilibrée
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Le Menu de la Cantine cette Semaine
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Chaque jour, notre chef prépare sur place des repas équilibrés, riches en vitamines et adaptés à la croissance des enfants.
              </p>
            </div>

            {/* Day Selector Buttons */}
            <div className="flex overflow-x-auto gap-2 pb-2">
              {canteenMenu.days.map((d, idx) => (
                <button
                  key={d.day}
                  onClick={() => setSelectedDayIndex(idx)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                    selectedDayIndex === idx
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {d.day}
                </button>
              ))}
            </div>

            {/* Menu Display Card */}
            <motion.div
              key={currentMenu.day}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-emerald-200 pb-3">
                <span className="font-extrabold text-emerald-900 text-lg sm:text-xl">
                  Menu du {currentMenu.day}
                </span>
                <span className="text-xs bg-emerald-200/80 text-emerald-900 px-3 py-1 rounded-full font-bold">
                  100% Frais & Fait Maison
                </span>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider block">Entrée</span>
                    <span className="font-medium text-slate-800">{currentMenu.starter}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider block">Plat Principal</span>
                    <span className="font-bold text-slate-900 text-base">{currentMenu.main}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase text-emerald-800 tracking-wider block">Dessert</span>
                    <span className="font-medium text-slate-800">{currentMenu.dessert}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Transport image & highlights column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/images/canteen_food.png"
                alt="Cantine Scolaire La Madone"
                className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
                  <Apple className="w-4 h-4" /> Qualité Nutritionnelle Certifiée
                </div>
                <h3 className="text-xl font-bold mt-1">Un restaurant scolaire pensé pour les enfants</h3>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 space-y-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-500/20 text-brand-400 rounded-xl">
                  <Bus className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white">Transport Scolaire Sécurisé</h4>
                  <p className="text-xs text-slate-400">3 circuits de bus climatisés à Cotonou</p>
                </div>
              </div>
              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Ceintures de sécurité obligatoires & accompagnatrice dédiée</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Géolocalisation GPS en direct sur l'application des parents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
