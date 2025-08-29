"use client";
import About from "@/components/landing/About";
import Address from "@/components/landing/Address";
import BannerCG from "@/components/landing/BannerCG";
import Blogs from "@/components/landing/Blogs";
import Hero from "@/components/landing/Hero";
import Schedule from "@/components/landing/Schedule";
import AppFooter from "@/components/layouts/AppFooter";
import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AppHeaderPublic />
      <Hero />
      <About />
      <BannerCG />
      <Schedule />
      <Blogs />
      <Address />
      <AppFooter />
    </div>
  );
}
