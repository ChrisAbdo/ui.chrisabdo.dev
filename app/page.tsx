import AnimatedCollapsible from "@/components/ui-components/animated-collapsible";
import AnimatedTabs from "@/components/ui-components/animated-tabs";
import Dock from "@/components/ui-components/dock";
import HoverCard from "@/components/ui-components/hover-card";
import ResizableTextarea from "@/components/ui-components/resizable-textarea";
import BlinkingDots from "@/components/ui-components/spinners/blinking-dots";
import CircleFadeIn from "@/components/ui-components/spinners/circle-fade-in";
import StreamingComponent from "@/components/ui-components/streaming/streaming-component";
import VolumeSlider from "@/components/ui-components/volume-slider";
import React from "react";

export default function Home() {
  return (
    <div>
      <Dock />
      <ResizableTextarea />
      <AnimatedTabs />
      <CircleFadeIn />
      <BlinkingDots />
      <VolumeSlider />
      <HoverCard />
      <AnimatedCollapsible />
      <StreamingComponent />
    </div>
  );
}
