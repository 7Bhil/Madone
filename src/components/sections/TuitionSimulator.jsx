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
    <section id="simulateur" className="py-section px-4 sm:px-6 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4 text-brand-600" />
            Transparence Totale des Tarifs
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simulateur de Frais de Scolarité
          </h2>
          <p className="text-slate-500 mt-4 text-base sm:text-lg">
            Estimez votre budget annuel exact incluant la restauration, le transport et les activités périscolaires.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6"
          >
            {/* Step 1: Level */}
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>1. Niveau Scolaire</span>
                <span className="text-xs text-brand-600 font-normal normal-case">Frais de scolarité inclus</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tuitionOptions.levels.map((lvl) => (
                  <button
                    key={lvl.value}
                    type="button"
                    onClick={() => setSelectedLevel(lvl.value)}
                    className={`text-left p-3.5 rounded-xl border-2 transition-all text-sm font-medium ${
                      selectedLevel === lvl.value
                        ? "bg-brand-600 border-brand-600 text-white shadow-md shadow-brand-600/20"
                        : "bg-white border-slate-200 text-slate-700 hover:border-brand-300 hover:bg-brand-50"
                    }`}
                  >
                    <div className="font-bold">{lvl.label}</div>
                    <div className={`text-xs mt-1 ${selectedLevel === lvl.value ? "text-brand-200" : "text-slate-400"}`}>
                      {lvl.basePrice.toLocaleString("fr-FR")} FCFA / an
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Canteen */}
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                2. Restauration (Cantine Bio)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tuitionOptions.canteen.map((c, idx) => (
                  <button
                    key={c.label}
                    type="button"
                    onClick={() => setCanteenIndex(idx)}
                    className={`text-left p-3.5 rounded-xl border-2 transition-all text-sm font-medium ${
                      canteenIndex === idx
                        ? "bg-emerald-600 border-emerald-600 text-white shadow-md"
                        : "bg-white border-slate-200 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                    }`}
                  >
                    <div className="font-bold">{c.label}</div>
                    <div className={`text-xs mt-1 ${canteenIndex === idx ? "text-emerald-200" : "text-slate-400"}`}>
                      {c.price === 0 ? "Gratuit" : `+ ${c.price.toLocaleString("fr-FR")} FCFA / an`}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Transport */}
            <div>
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
                3. Transport Scolaire Sécurisé
              </label>
              <select
                value={transportIndex}
                onChange={(e) => setTransportIndex(Number(e.target.value))}
                className="w-full bg-white border-2 border-slate-200 text-slate-800 rounded-xl p-3.5 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none"
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
              <label className="block text-sm font-bold text-slate-700 uppercase tracking-wider mb-3">
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
                      className={`p-3 rounded-xl border-2 text-left text-xs font-medium transition-all ${
                        isChecked
                          ? "bg-gold-50 border-gold-400 text-gold-800"
                          : "bg-white border-slate-200 text-slate-600 hover:border-gold-300"
                      }`}
                    >
                      <div className="truncate font-semibold">{club.label}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">+{club.price.toLocaleString("fr-FR")} FCFA</div>
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
            className="lg:col-span-5 bg-brand-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-brand-600/20 flex flex-col justify-between sticky top-28"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-brand-500">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-200">Récapitulatif</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Tarif Officiel
                </span>
              </div>

              <div className="py-5 space-y-3 text-sm">
                <div className="flex justify-between text-brand-200">
                  <span>Scolarité ({currentLevelObj.label.split(" ")[0]})</span>
                  <span className="font-semibold text-white">{basePrice.toLocaleString("fr-FR")} FCFA</span>
                </div>
                {canteenPrice > 0 && (
                  <div className="flex justify-between text-brand-200">
                    <span>Cantine Bio</span>
                    <span className="font-semibold text-white">+{canteenPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}
                {transportPrice > 0 && (
                  <div className="flex justify-between text-brand-200">
                    <span>Transport Scolaire</span>
                    <span className="font-semibold text-white">+{transportPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}
                {clubsPrice > 0 && (
                  <div className="flex justify-between text-brand-200">
                    <span>Clubs ({selectedClubs.length})</span>
                    <span className="font-semibold text-white">+{clubsPrice.toLocaleString("fr-FR")} FCFA</span>
                  </div>
                )}
              </div>

              <div className="bg-white/15 rounded-xl p-5 my-2">
                <div className="text-xs text-brand-200 font-medium uppercase tracking-wider">Montant Annuel Total</div>
                <div className="text-4xl font-extrabold text-white mt-1">
                  {totalPrice.toLocaleString("fr-FR")}
                  <span className="text-base text-brand-200 font-normal ml-2">FCFA / an</span>
                </div>
                <div className="mt-3 pt-3 border-t border-brand-500 text-xs text-brand-200 flex items-center justify-between">
                  <span>Mensuel (sur 9 mois) :</span>
                  <span className="font-bold text-white bg-brand-700/50 px-2.5 py-1 rounded">
                    ~ {monthlyPrice.toLocaleString("fr-FR")} FCFA
                  </span>
                </div>
              </div>

              <div className="text-[12px] text-brand-200 flex items-center gap-1.5 mt-4">
                <HelpCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Paiement échelonné en 3 tranches possible à l'inscription.</span>
              </div>
            </div>

            <button
              onClick={handleApply}
              className="w-full bg-gold-500 hover:bg-gold-400 text-slate-950 font-bold py-4 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 group mt-6 text-sm uppercase tracking-wider"
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
