"use client";
import Hero from "@/components/landing/Hero";
import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AppHeaderPublic />
      <Hero />
    </div>
  );
}
