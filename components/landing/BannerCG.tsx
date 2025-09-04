"use client";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { TypewriterEffect } from "../ui/typewriter-effect";

export default function BannerCG() {
  const words =
    "Join our Connect Group <br/> a place to share life, grow in faith, and build friendships."
      .split(" ")
      .map((word) => {
        return {
          text: word,
          className: "text-white",
        };
      });
  return (
    <motion.section
      className="bg-primary py-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto gap-4 min-h-50 self-start">
        {/* Animate the heading with a slight delay. */}
        <motion.h1
          className="self-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <TypewriterEffect
            words={words}
            className="max-w-screen-md text-4xl text-white flex-1 font-semibold text-center md:text-left leading-snug"
          />
        </motion.h1>
        {/* Animate the button with a greater delay to appear after the text. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-secondary text-accent text-2xl font-bold p-8 hover:bg-secondary/80"
            size={"lg"}
          >
            Join now
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
