"use client";

import { motion } from "framer-motion";

export default function ScrollDownIndicator() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, 10, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity, delay: 5 }}
      className="fixed bottom-8 right-8 -translate-x-1/2 text-6xl text-gray-600 cursor-pointer"
    >
      ↓
    </motion.div>
  );
}