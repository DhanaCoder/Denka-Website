import Image from "next/image";
import FooterNavigation from "@/components/footer";
import AboutHero from "@/components/about/Hero";
import { HeroAfter } from "@/components/about/HeroAfter";
import TeamMember from "@/components/about/TeamMember";
import Testimonials from "@/components/about/Testimonials";

export default function About() {
  return (
    <div className="font-raleway overflow-hidden">
      <AboutHero />
      <HeroAfter/>
      <TeamMember/>
      <Testimonials/>
      <FooterNavigation />
    </div>
  );
}
