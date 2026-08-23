import { Link } from "react-router-dom";
import { GraduationCap, Phone, Mail, MapPin, ShieldCheck, Heart, ArrowRight } from "lucide-react";
import { school, nav } from "../../data/content";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1 & 2: School Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                <GraduationCap className="w-6 h-6 text-gold-400" />
              </div>
              <span className="font-extrabold text-white text-xl tracking-tight">
                COMPLEXE SCOLAIRE LA MADONE
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Établissement privé d'enseignement primaire et maternel d'excellence à Cotonou. Formation intégrale, bilinguisme précoce et ateliers robotique.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Agréé par le Ministère de l'Éducation Maternelle et Primaire du Bénin.</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-brand-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {nav.slice(0, 5).map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="hover:text-gold-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-gold-500 pl-3">
              Services & Liens
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/inscription" className="hover:text-gold-400">Pré-inscription en Ligne</Link></li>
              <li><a href="/#simulateur" className="hover:text-gold-400">Simulateur de Scolarité</a></li>
              <li><Link to="/vie-scolaire" className="hover:text-gold-400">Menu Cantine Bio</Link></li>
              <li><Link to="/faq" className="hover:text-gold-400">Foire Aux Questions</Link></li>
              <li><Link to="/mentions-legales" className="hover:text-gold-400">Mentions Légales</Link></li>
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-3">
              Contact Secrétariat
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-1" />
                <span>{school.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{school.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{school.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {school.fullName}. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1">
            Projet conçu pour excellence académique et accompagnement sur-mesure.
          </div>
        </div>
      </div>
    </footer>
  );
}