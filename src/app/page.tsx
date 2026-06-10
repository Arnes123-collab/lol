import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import Services from "@/components/sections/Services";
import Pricing from "@/components/sections/Pricing";
import HowItWorks from "@/components/sections/HowItWorks";
import Results from "@/components/sections/Results";
import ApplicationForm from "@/components/sections/ApplicationForm";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <WhoIsItFor />
      <Services />
      <Pricing />
      <HowItWorks />
      <Results />
      <ApplicationForm />
      <Footer />
    <div className="fixed bottom-4 right-4 z-50"><a href="/reports/new" className="rounded-full bg-accent-gold px-5 py-3 text-xs font-bold uppercase text-white shadow-lg">Отчёт после тренировки</a></div></main>
  );
}
