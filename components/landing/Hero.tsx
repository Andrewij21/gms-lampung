import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import { motion } from "motion/react";
import { IMAGES } from "@/constants";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Hero() {
  const images = IMAGES;
  return (
    <section className="grid place-items-center  min-h-screen">
      <ImagesSlider className="" images={images} direction="right">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-50 relative  w-[80vw] h-[80vh]"
        >
          <Image
            src="/welcome-home.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </motion.div>
      </ImagesSlider>
    </section>
  );
}
