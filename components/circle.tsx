import Svg, { Circle } from "react-native-svg";

export default function CircleProgress({ size = 90, strokeWidth = 8, progress = 60 }) {
  const radius = (size - strokeWidth) / 2;
  const krug = 2 * Math.PI * radius;
  const offset = krug - (krug * progress) / 100;

  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#e5e7eb"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
      />

      <Circle
        stroke="#128b61"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={krug}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
    </Svg>
  )
}
