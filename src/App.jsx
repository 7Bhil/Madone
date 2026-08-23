import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Chatbot from "./components/ui/Chatbot";
import Home from "./pages/Home";
import Classes from "./pages/Classes";
import SchoolLife from "./pages/SchoolLife";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Apropos from "./pages/Apropos";
import Actualites from "./pages/Actualites";
import Galerie from "./pages/Galerie";
import FAQ from "./pages/FAQ";
import MentionsLegales from "./pages/MentionsLegales";

function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="font-sans min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="pt-24 sm:pt-28 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/vie-scolaire" element={<SchoolLife />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/galerie" element={<Galerie />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/inscription" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
          </Routes>
        </main>
        <Footer />
        <Chatbot />
      </div>
    </Router>
  );
}