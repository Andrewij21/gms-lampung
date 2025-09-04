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
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <section className="space-y-12 py-12">
      <div className="text-center">
        {/* Animate the h1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of h1 is in view
          transition={{ duration: 0.6 }}
          className="text-xl font-medium"
        >
          Our Blogs
        </motion.h1>

        {/* Animate the p, with a slight delay */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Triggers when 50% of p is in view
          transition={{ duration: 0.6, delay: 0.2 }} // Staggered slightly after h1
          className="text-6xl font-bold"
        >
          GMS lampung life
        </motion.p>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="px-0 sm:px-12 container mx-auto"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {Array.from({ length: 8 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                // viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!top-1/3 !-translate-y-1/2 !left-2 sm:-left-14 " />
        <CarouselNext className="!top-1/3 !right-2 sm:-right-12" />
      </Carousel>
    </section>
  );
}
