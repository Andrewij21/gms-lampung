"use client";
import About from "@/components/landing/About";
import BannerCG from "@/components/landing/BannerCG";
import Hero from "@/components/landing/Hero";
import Schedule from "@/components/landing/Schedule";
import AppHeaderPublic from "@/components/layouts/AppHeaderPublic";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen relative">
      <AppHeaderPublic />
      <Hero />
      <About />
      <BannerCG />
      <Schedule />
      <section className="min-h-screen space-y-12">
        <div className="text-center">
          <h1 className="text-xl font-medium">Our Blogs</h1>
          <p className="text-6xl font-bold">GMS lampung life</p>
        </div>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="container mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                <Card className="pt-0 shadow-none rounded-none border-none">
                  <div className="relative min-h-[300px] w-full aspect-square rounded-xl overflow-clip">
                    <Image
                      src="https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="A person sitting in a field of flowers"
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <CardContent className="px-0">
                    <h3 className="text-lg font-semibold text-accent text-ellipsis line-clamp-1">
                      GLOBAL ISSUE lorem200
                    </h3>
                    <h2 className="text-2xl font-bold text-accent line-clamp-2">
                      Lorem ipsum dolor sit amet
                    </h2>
                    <p className="text-muted-foreground">Apr 19,2025</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
