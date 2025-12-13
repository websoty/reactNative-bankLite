import React from "react";
import Svg, { Rect } from "react-native-svg";

export default function MyIcon({ size = 100 }) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <Rect
        x="10"
        y="10"
        width="80"
        height="80"
        fill="#00f"
        stroke="#f00"
      />
    </Svg>
  );
}
