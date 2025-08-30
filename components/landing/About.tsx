import Image from "next/image";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import TextHighlight from "@/components/shared/TextHighlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BackgroundBeams } from "../ui/background-beams";

export default function About() {
  return (
    <motion.section viewport={{ amount: 0.11 }} className="relative">
      <motion.div className="flex flex-col justify-center items-center container mx-auto  z-20 relative">
        <motion.div
          className="rounded-full bg-black w-fit px-6 py-14 "
          initial={{ opacity: 0, y: -80 }}
          whileInView={{ opacity: 1, y: -80 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.6 }}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="fill-black object-cover object-center"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <TextGenerateEffect
            className="text-2xl md:text-3xl lg:text-5xl font-bold text-accent dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
            words="Rumah Rohani untuk Setiap Generasi.
Tempat kita bertumbuh dalam iman, mengalami kasih Kristus, dan menemukan harapan sejati untuk setiap langkah hidup."
          />
        </motion.div>

        <div className="w-full z-50 px-4">
          <HoverEffect
            items={[
              {
                title: "Sunday Service",
                description: "Join us every Sunday for worship and fellowship.",
                link: "/services",
                image:
                  "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Connect Groups",
                description:
                  "Grow together in small groups throughout the week.",
                link: "/connect-groups",
                image:
                  "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Youth Community",
                description:
                  "A place for young people to find purpose and hope.",
                link: "/youth",
                image:
                  "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ]}
          />
        </div>
      </motion.div>
      <BackgroundBeams />
    </motion.section>
  );
}
