// components/Address.jsx

"use client"; // This is needed for Framer Motion in Next.js 13+ App Router
import { motion } from "framer-motion";
import { Church } from "lucide-react";

export default function Address() {
  // Define a container variant to orchestrate the animation
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2, // Adds a 0.2-second delay between each child
      },
    },
  };

  // Define a child variant for the individual items
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24">
      {/* Use motion.div with variants to control the staggered animation */}
      <motion.div
        className="container flex flex-col sm:flex-row justify-between items-center mx-auto space-y-8 sm:space-y-0"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the container is in view
      >
        {/* Apply the 'item' variant to each child */}
        <motion.div className="text-center" variants={item}>
          <Church className="text-accent size-24 block mx-auto" />
          <h1 className="text-accent font-extrabold text-4xl">GMS Lampung</h1>
          <p className="text-accent font-light text-lg">
            JI. Yos Sudarso No.272, Sukaraja-Bumi Waras
          </p>
        </motion.div>

        <motion.div className="text-center" variants={item}>
          <Church className="text-accent size-24 block mx-auto" />
          <h1 className="text-accent font-extrabold text-4xl">GMS Lampung</h1>
          <p className="text-accent font-light text-lg">
            JI. Yos Sudarso No.272, Sukaraja-Bumi Waras
          </p>
        </motion.div>

        <motion.div className="text-center" variants={item}>
          <Church className="text-accent size-24 block mx-auto" />
          <h1 className="text-accent font-extrabold text-4xl">GMS Lampung</h1>
          <p className="text-accent font-light text-lg">
            JI. Yos Sudarso No.272, Sukaraja-Bumi Waras
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
