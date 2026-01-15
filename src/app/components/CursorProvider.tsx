'use client';

import AnimatedCursor from "react-animated-cursor";

export default function CursorProvider() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      color="139, 92, 246"
      outerAlpha={0.5}
      innerScale={0.6}
      outerScale={1.2}
      clickables={["a", "button"]}
    />
  );
}
