'use client'
import Image from "next/image";
import { useState } from "react";
import HeroSection from "./(components)/HeroSection";
export default function Home() {
  const [sliders, setSliders] = useState([
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic1-1.jpg'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic5.jpg'
    }
  ]);
  return (
    <div>
      <HeroSection />
    </div>
  );
}
