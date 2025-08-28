"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Variants for the staggered animation of the ScheduleCards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between each child animation
      delayChildren: 0.5, // Delay before the first child starts animating
    },
  },
};

// Variants for each individual ScheduleCard
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Schedule() {
  return (
    <motion.section
      className="p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div className="" variants={itemVariants}>
        <h3 className="text-xl">Calendar</h3>
        <h2 className="font-extrabold text-3xl">Our Events</h2>
      </motion.div>
      <motion.div className="" variants={itemVariants}>
        <p className="text-lg mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          fugiat fugit autem magni expedita vel assumenda culpa, iusto
          blanditiis distinctio? Voluptatibus dolorem dolore quis ea pariatur
          impedit, quam, quibusdam eos cum praesentium eum facilis
          necessitatibus? Quia dicta quo cumque, corporis tempore saepe magni
          odio autem ipsa inventore, vel nobis architecto.
        </p>
        <motion.div className="space-y-4" variants={containerVariants}>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export function ScheduleCard() {
  return (
    <motion.div className="flex items-center gap-4" variants={itemVariants}>
      <p className="font-medium">
        <span className="font-bold text-3xl block">20</span>
        JUN,2025
      </p>
      <div>
        <h3 className="font-bold capitalize text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          dolor!
        </h3>
        <p className="text-lg font-medium">
          Pakuwon Mall Surabaya, Lantai Rooftop 2
        </p>
        <p className="text-accent text-sm font-light">09:00 AM - 10:00AM</p>
      </div>
    </motion.div>
  );
}
