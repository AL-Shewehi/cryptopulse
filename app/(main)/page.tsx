import FAQ from "@/components/section/FAQ";
import Hero from "@/components/section/Hero"
import HowItWorks from "@/components/section/HowItWorks";
import MarketRates from "@/components/section/MarketRates";
import PresaleBanner from "@/components/section/PresaleBanner";
import Roadmap from "@/components/section/Roadmap";
import Team from "@/components/section/Team";
import Tokenomics from "@/components/section/Tokenomics";
import ScrollTop from "@/components/ui/ScrollTop";
export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <ScrollTop />
      <Hero />
      <PresaleBanner />
      <MarketRates />
      <HowItWorks />
      <Tokenomics />
      <Roadmap />
      <Team />
      <FAQ />
    </main>
  );
}