import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string; // 🔥 tambahkan properti image
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group/card block h-full w-full rounded-3xl overflow-hidden"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link href={item?.link}>
            <Card image={item.image} title={item.title}>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
  image,
  title,
}: {
  className?: string;
  children: React.ReactNode;
  image: string;
  title: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-80 w-full rounded-2xl overflow-hidden bg-black  border-transparent dark:border-white/[0.2] group-hover/card:border-slate-700",
        className
      )}
    >
      {/* Background image with zoom effect */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
      />

      {/* Overlay gradient for readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-4">
        <CardTitle>{title}</CardTitle>
        {children}
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        "text-white font-bold tracking-wide text-lg relative inline-block w-fit",
        className
      )}
    >
      {children}
      {/* Animated underline */}
      <span
        className="absolute left-0 -bottom-1 h-[2px] bg-white w-full 
                   scale-x-0 origin-left transition-transform duration-500 
                   group-hover/card:scale-x-100"
      />
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 text-zinc-300 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
