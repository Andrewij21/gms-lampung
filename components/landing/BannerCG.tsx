"use client";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function BannerCG() {
  return (
    <motion.section
      className="bg-primary py-14"
      // Animation triggers when the section is in view.
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center container mx-auto gap-4">
        {/* Animate the heading with a slight delay. */}
        <motion.h1
          className="text-4xl text-white flex-1 font-semibold text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Join our Connect Group <br className="hidden md:block" /> a place to
          share life, grow in faith, and build friendships.
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
