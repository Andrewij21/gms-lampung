"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

export default function NavLinks({
  title,
  url,
  className,
}: {
  title: string;
  url: string;
  className?: string;
}) {
  return (
    <Button
      asChild
      variant="ghost"
      size={"sm"}
      className="hover:bg-transparent hover:text-white "
    >
      <Link href={`/${url}`} className={`${className} text-white text-lg`}>
        <motion.span
          initial={{ backgroundSize: "0% 2px" }}
          whileHover={{ backgroundSize: "100% 2px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{
            backgroundImage: "linear-gradient(currentColor, currentColor)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "0 100%",
            backgroundSize: "0% 2px",
            display: "inline-block",
          }}
        >
          {title}
        </motion.span>
      </Link>
    </Button>
  );
}
