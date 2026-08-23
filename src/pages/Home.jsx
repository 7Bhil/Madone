import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Programs from "../components/sections/Programs";
import TuitionSimulator from "../components/sections/TuitionSimulator";
import ParentPortalPreview from "../components/sections/ParentPortalPreview";
import CanteenMenu from "../components/sections/CanteenMenu";
import Testimonials from "../components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <TuitionSimulator />
      <ParentPortalPreview />
      <CanteenMenu />
      <Testimonials />
    </>
  );
}
