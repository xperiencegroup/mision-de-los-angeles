import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function AmenidadButton({
  amenidad,
  index,
  isActive,
  isIconsVisible,
  onSelect,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isExpanded = isActive || isHovered;

  return (
    <div
      className={`reveal-scale ${isIconsVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: isIconsVisible ? `${index * 0.08}s` : "0s" }}
    >
      <motion.button
        layout
        onClick={onSelect}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transition={{ layout: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } }}
        className={`relative flex justify-center items-center px-[17px] py-[10px] hover:cursor-pointer overflow-hidden ${
          isExpanded
            ? "size-[56px] md:w-auto md:h-[56px] md:gap-[7px] before:absolute before:w-full before:h-[3px] before:bg-verde-confianza before:bottom-0"
            : "size-[56px] bg-celeste-bienestar"
        }`}
      >
        <motion.img
          layout
          src={amenidad.icon}
          alt={amenidad.id}
          className="h-[24.5px]"
        />
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.p
              layout
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="max-sm:hidden whitespace-nowrap overflow-hidden"
            >
              {amenidad.label}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
