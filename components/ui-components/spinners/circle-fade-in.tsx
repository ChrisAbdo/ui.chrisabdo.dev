import React from "react";

export default function CircleFadeIn() {
  const spinnerData = [
    { delay: "-1.1s", rotation: "30deg" },
    { delay: "-1s", rotation: "60deg" },
    { delay: "-0.9s", rotation: "90deg" },
    { delay: "-0.8s", rotation: "120deg" },
    { delay: "-0.7s", rotation: "150deg" },
    { delay: "-0.6s", rotation: "180deg" },
    { delay: "-0.5s", rotation: "210deg" },
    { delay: "-0.4s", rotation: "240deg" },
    { delay: "-0.3s", rotation: "270deg" },
    { delay: "-0.2s", rotation: "300deg" },
    { delay: "-0.1s", rotation: "330deg" },
  ];
  return (
    <div>
      <div className="[&>span]:before:animate-fadeIn relative h-6 w-6 [&>span]:absolute [&>span]:inset-0 [&>span]:inline-flex [&>span]:h-full [&>span]:w-full [&>span]:before:h-1 [&>span]:before:w-1 [&>span]:before:rounded-full [&>span]:before:bg-foreground">
        <span className=""></span>
        {spinnerData.map((item, index) => (
          <span
            key={index}
            className={`before:!animation-delay-[${item.delay}] rotate-[${item.rotation}]`}
          ></span>
        ))}
      </div>
    </div>
  );
}
