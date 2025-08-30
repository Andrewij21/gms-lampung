"use client";

import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        // Animate all spans with the class "typewriter-char"
        "span.typewriter-char",
        {
          display: "inline-block",
          opacity: 1,
        },
        {
          duration: 0.2,
          delay: stagger(0.05), // A slightly faster stagger for a more natural feel
          ease: "easeInOut",
        }
      );
    }
  }, [isInView]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          // Use a regular expression to split the text by <br /> tags
          const textParts = word.text.split(/(<br\s*\/?>)/);

          // **THE FIX**: Check what the last meaningful part of the word is.
          // First, remove any empty strings that result from the split.
          const cleanedParts = textParts.filter((part) => part.length > 0);
          // Then, get the very last part.
          const lastPart = cleanedParts[cleanedParts.length - 1];

          return (
            <div key={`word-${idx}`} className="inline-block">
              {textParts.map((part, index) => {
                // Check if the part is a <br /> tag
                if (part.match(/<br\s*\/?>/)) {
                  return <br key={`br-${idx}-${index}`} />;
                }
                // Otherwise, it's text that needs to be animated
                return part.split("").map((char, charIndex) => (
                  <motion.span
                    key={`char-${idx}-${index}-${charIndex}`}
                    className={cn(
                      `typewriter-char dark:text-white text-black opacity-0 hidden`,
                      word.className
                    )}
                  >
                    {char}
                  </motion.span>
                ));
              })}

              {/* **THE FIX**: Only render the space if the last part exists 
              and is NOT a line break tag.
            */}
              {lastPart && !lastPart.match(/<br\s*\/?>/) && (
                <span className="inline-block">&nbsp;</span>
              )}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-bold",
        className
      )}
    >
      {renderWords()}
      {/* The cursor is now inside the main container, so it wraps with the text */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
