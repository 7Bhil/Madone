import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { tuitionOptions } from "../../data/content";
import { useNavigate } from "react-router-dom";

export default function TuitionSimulator() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState("ci-cp");
  const [canteenIndex, setCanteenIndex] = useState(1);
  const [transportIndex, setTransportIndex] = useState(0);
  const [selectedClubs, setSelectedClubs] = useState(["robotique", "anglais"]);

  const currentLevelObj = tuitionOptions.levels.find((l) => l.value === selectedLevel) || tuitionOptions.levels[1];
  const basePrice = currentLevelObj.basePrice;
  const canteenPrice = tuitionOptions.canteen[canteenIndex].price;
  const transportPrice = tuitionOptions.transport[transportIndex].price;

  const clubsPrice = selectedClubs.reduce((acc, clubId) => {
    const club = tuitionOptions.extracurriculars.find((c) => c.id === clubId);
    return acc + (club ? club.price : 0);
  }, 0);

  const totalPrice = basePrice + canteenPrice + transportPrice + clubsPrice;
  const monthlyPrice = Math.round(totalPrice / 9);

  const toggleClub = (id) => {
    if (selectedClubs.includes(id)) {
      setSelectedClubs(selectedClubs.filter((cId) => cId !== id));
    } else {
      setSelectedClubs([...selectedClubs, id]);
    }
  };

  const handleApply = () => {
    navigate(`/inscription?level=${selectedLevel}`);
  };

  return (
    <section id="simulateur" className="py-section px-4 sm:px-6 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-gold-400" />
            Transparence Totale
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Simulateur de Frais de Scolarité
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            Estimez le budget annuel exact pour la scolarité de votre enfant en incluant les services de restauration, de transport et les activités périscolaires.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-800/80 backdrop-blur-xl border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            {/* Step 1: Level */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>1. Niveau Scolaire</span>
                <span className="text-xs text-gold-400 font-normal">Frais de scolarité inclus</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tuitionOptions.levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => setSelectedLevel(lvl.value)}
                    className={`text-left p-3.5 rounded-xl border transition-all text-sm font-medium ${
                      selectedLevel === lvl.value
                        ? "bg-brand-600 border-brand-400 text-white shadow-lg shadow-brand-600/30 ring-2 ring-brand-400/50"
                        : "bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
                    }`}
                  >
                    <div className="font-bold">{lvl.label}</div>
                    <div className="text-xs mt-1 opacity-80">{lvl.basePrice.toLocaleString("fr-FR")} FCFA / an</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Canteen */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                2. Restauration (Cantine Bio)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tuitionOptions.canteen.map((c, idx) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setCanteenIndex(idx)}
                    className={`text-left p-3.5 rounded-xl border transition-all text-sm font-medium ${
                      canteenIndex === idx
                        ? "bg-brand-600 border-brand-400 text-white shadow-lg shadow-brand-600/30"
                        : "bg-slate-900/60 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div className="font-bold">{c.label}</div>
                    <div className="text-xs mt-1 opacity-80">
                      {c.price === 0 ? "Gratuit" : `+ ${c.price.toLocaleString("fr-FR")} FCFA / an`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Transport */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                3. Transport Scolaire Sécurisé
              </label>
              <select
                value={transportIndex}
                onChange={(e) => setTransportIndex(Number(e.target.value))}
                className="w-full bg-slate-900/90 border border-slate-700 text-slate-100 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
              >
                {tuitionOptions.transport.map((t, idx) => (
                  <option key={t.label} value={idx}>
                    {t.label} {t.price > 0 ? `(+ ${t.price.toLocaleString("fr-FR")} FCFA/an)` : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 4: Clubs */}
            <div>
              <label className="block text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">
                4. Clubs & Activités Périscolaires (Optionnels)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {tuitionOptions.extracurriculars.map((club) => {
                  const isChecked = selectedClubs.includes(club.id);
                  return (
                    <button
                      key={club.id}
                      type="button"
                      onClick={() => toggleClub(club.id)}
                      className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                        isChecked
                          ? "bg-gold-500/20 border-gold-400 text-gold-200 font-semibold"
                          : "bg-slate-900/50 border-slate-700 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className="truncate">{club.label}</div>
                      <div className="text-[11px] text-gold-400 mt-1">+{club.price.toLocaleString("fr-FR")} FCFA</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Results column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-slate-900 border border-brand-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10">
              <Sparkles className="w-32 h-32 text-gold-400" />
            </div>

            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Récapitulatif Estimatif</span>
                <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Tarif Officiel
                </span>
              </div>

              {/* Price Breakdown List */}
              <div className="py-6 space-y-3 text-sm">
                <div className="flex justify-between text-slate-300">
                  <span>Scolarité ({currentLevelObj.label.split(" ")[0]})</span>
                  <span className="font-semibold text-white">{basePrice.toLocaleString("fr-FR")} FCFA</span>
                </div>

                {canteenPrice > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Cantine Bio</span>
                    <span className="font-semibold text-white">+{canteenPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}

                {transportPrice > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Transport Scolaire</span>
                    <span className="font-semibold text-white">+{transportPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}

                {clubsPrice > 0 && (
                  <div className="flex justify-between text-slate-300">
                    <span>Clubs & Périscolaire ({selectedClubs.length})</span>
                    <span className="font-semibold text-white">+{clubsPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}
              </div>

              {/* Total Box */}
              <div className="bg-slate-950/80 border border-brand-500/30 rounded-xl p-5 my-2">
                <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Montant Annuel Total</div>
                <div className="text-3xl sm:text-4xl font-extrabold text-gold-400 mt-1">
                  {totalPrice.toLocaleString("fr-FR")}{" "}
                  <span className="text-sm text-slate-300 font-normal">FCFA / an</span>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                  <span>Option mensuelle (sur 9 mois) :</span>
                  <span className="font-bold text-white bg-slate-800 px-2.5 py-1 rounded">
                    ~ {monthlyPrice.toLocaleString("fr-FR")} FCFA / mois
                  </span>
                </div>
              </div>

              <div className="text-[12px] text-slate-400 flex items-center gap-1.5 my-4">
                <HelpCircle className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                <span>Paiement échelonné en 3 tranches possible à l'inscription.</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleApply}
              className="w-full bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-slate-950 font-bold py-4 px-6 rounded-xl shadow-lg shadow-gold-500/20 transition-all flex items-center justify-center gap-2 group mt-4 text-sm uppercase tracking-wider"
            >
              <span>Valider & Pré-inscrire mon enfant</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
