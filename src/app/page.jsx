'use client'
import Image from "next/image";
import HomeHero from "@/components/home/Hero";
import HeroAfter from "@/components/home/HeroAfter";
import DenkaPlatesBenefits from "@/components/home/DenkaPlatesBenefits";
//import DenkaCards from "@/components/home/DenkaCards";
import DenkaPlatinum from "@/components/home/DenkaPlatinum";
import DiscountOffer from "@/components/home/DiscountOffer";
import FooterNavigation from "@/components/footer";
//import UserShortGallery from "@/components/home/UserShortGallery";
import { useRef } from "react";

export default function Home() {

  const heroAfterRef = useRef(null);


  const scrollToHeroAfter = () => {
    if (heroAfterRef.current) {
      heroAfterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      <HomeHero onScrollDownClick={scrollToHeroAfter} />
      <div ref={heroAfterRef}>
        <HeroAfter />
      </div>
      <DenkaPlatesBenefits />
      {/* <DenkaCards /> */}
      <DenkaPlatinum />
      <DiscountOffer />
      {/* <UserShortGallery /> */}
      <FooterNavigation />
    </div>
  );
}
