'use client';

import AnimatedCursor from "react-animated-cursor";

export default function CursorProvider() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="0, 0, 0"
      outerAlpha={0.5}
      innerScale={0.7}
      outerScale={2}
      clickables={["a", "button"]}
    />
  );
}
