"use client";

import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AnimatedCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { opacity: 1, height: "auto" },
    closed: { opacity: 0, height: 0 },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <button
        className="flex justify-between items-center w-full bg-blue-500 text-white p-2 rounded mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Toggle</span>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="up"
              initial={{ opacity: 0, rotate: 180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -180 }}
            >
              <ArrowUpIcon />
            </motion.div>
          ) : (
            <motion.div
              key="down"
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 180 }}
            >
              <ArrowDownIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <motion.div
        className="overflow-hidden"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <div className="p-4 border border-t-0 rounded-b bg-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </motion.div>
    </div>
  );
}
