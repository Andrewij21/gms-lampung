"use client";
import About from "@/components/landing/About";
import BannerCG from "@/components/landing/BannerCG";
import Hero from "@/components/landing/Hero";
import Schedule from "@/components/landing/Schedule";
import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AppHeaderPublic />
      <Hero />
      <About />
      <BannerCG />
      <Schedule />
    </div>
  );
}
