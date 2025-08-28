import Image from "next/image";
import { motion } from "motion/react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import TextHighlight from "@/components/shared/TextHighlight";

export default function About() {
  return (
    <motion.section
      className="pt-6 pb-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col justify-center items-center container mx-auto space-y-4 h-[40rem] z-20 relative">
        <div className="rounded-full bg-black w-fit px-6 py-14">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="fill-black"
          />
        </div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-accent dark:text-white leading-relaxed lg:leading-snug text-center mx-auto "
        >
          GMS Lampung adalah rumah rohani bagi setiap generasi, tempat kita
          bertumbuh dalam iman, mengalami kasih Kristus, dan menemukan
          pengharapan sejati untuk menghadapi setiap tantangan <br />{" "}
          <TextHighlight className="text-white">
            hidup dengan iman
          </TextHighlight>
        </motion.h1>
        <div className="w-full">
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
      </div>
    </motion.section>
  );
}
