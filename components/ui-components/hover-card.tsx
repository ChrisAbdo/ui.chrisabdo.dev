"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Button } from "../ui/button";

function HoverCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative p-4">
      <Button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover over me
      </Button>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full p-4 bg-white border border-gray-200 shadow-lg"
        >
          Hovercard content goes here
        </motion.div>
      )}
    </div>
  );
}

export default HoverCard;
