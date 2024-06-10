import Navbar from "@/app/(home)/components/navbar";
import HeroSection from "@/app/(home)/components/hero/hero_section";
import FeatureSection from "@/app/(home)/components/hero/feature/feature_section";


export default function Home() {
  return (
    <main className="min-h-screen  ">
       <Navbar />
       <HeroSection />
       <FeatureSection />
    </main>
  );
}
