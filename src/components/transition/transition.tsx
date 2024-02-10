"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Transition({
  children,
}: {
  children: React.ReactNode;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: reducedMotion? 0 : 0.75 }}
    >
      {children}
    </motion.div>
  );
}