"use client";

import React from "react";
import { motion } from "framer-motion";
import { ChatBubbleIcon, EnterIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

const ResizableTextarea = () => {
  const [text, setText] = React.useState("");
  const [rows, setRows] = React.useState(1);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useLayoutEffect(() => {
    adjustRowsAndHeight();
  });

  const adjustRowsAndHeight = () => {
    const textareaLineHeight = 32;
    const previousRows = rows;
    const newRows = Math.min(3, text.split("\n").length);
    setRows(newRows);

    if (previousRows !== newRows && textareaRef.current) {
      const newHeight = newRows * textareaLineHeight;
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    adjustRowsAndHeight();
  };

  return (
    <motion.div
      layout
      transition={{ duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }} // Example ease values
      style={{
        transition: "height 0.3s ease",
        minHeight: "44px",
      }}
      className="relative flex items-center justify-center w-full max-w-lg m-auto gap-2 px-2 divide-x shadow-lg divide-border min-h-12 bg-background border rounded-xl shadow-muted/40 z-10"
    >
      <div className="flex items-center justify-center rounded-l-full">
        <div className="flex items-center outline-none transition-colors focus-visible:ring-gs=gray-400 focus-visible:ring-1 bg-gs-gray-700 text-gs-background-1000 justify-center w-8 h-8 rounded-full shrink-0 hover:bg-gs-gray-600 disabled:opacity-50 disabled:hover:bg-gs-gray-700">
          <ChatBubbleIcon className="text-foreground h-4 w-4" />
        </div>
      </div>
      <div className="flex items-center self-end flex-1 min-w-0">
        <div className="w-full h-full [&amp;_textarea]:pr-11">
          <motion.div
            layout
            className="relative w-full flex items-center transition-all duration-300 min-h-full h-fit"
          >
            <label className="sr-only">Prompt</label>
            <div className="relative flex flex-1 min-w-0 self-start">
              <div className="flex-[1_0_50%] min-w-[50%] overflow-x-visible -ml-[100%] opacity-0 invisible pointer-events-none">
                <div className="pl-3 py-3 sm:min-h-[15px] sm:leading-6 text-base md:text-sm opacity-0 invisible pointer-events-none">
                  A dashboard with a sidebar navigation and table
                </div>
              </div>

              <textarea
                ref={textareaRef}
                value={text}
                onChange={handleChange}
                rows={rows}
                placeholder="Resizable textarea. Add some rows to see it in action!"
                style={{
                  overflowY: rows >= 3 ? "auto" : "hidden",
                  transition: "height 0.3s ease",
                }}
                className="flex-[1_0_50%] min-w-[50%] h-full disabled:opacity-80 text-foreground bg-transparent border-0 shadow-none resize-none outline-none ring-0 disabled:bg-transparent selection:bg-teal-300 selection:text-black placeholder:text-zinc-400 [scroll-padding-block:0.75rem] pl-3 py-3 sm:leading-6 text-base md:text-sm"
              />
            </div>

            <Button size="circle" variant="secondary">
              <EnterIcon className="text-foreground h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResizableTextarea;
