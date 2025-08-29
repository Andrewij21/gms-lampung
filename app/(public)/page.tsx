"use client";
import About from "@/components/landing/About";
import Address from "@/components/landing/Address";
import BannerCG from "@/components/landing/BannerCG";
import Blogs from "@/components/landing/Blogs";
import Hero from "@/components/landing/Hero";
import Schedule from "@/components/landing/Schedule";
import { Fragment } from "react";
export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <BannerCG />
      <Schedule />
      <Blogs />
      <Address />
    </Fragment>
  );
}
