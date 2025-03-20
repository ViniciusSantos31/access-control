import { ImageResponse } from "next/og";
import { PiGameControllerDuotone } from "react-icons/pi";

export const size = {
  width: 48,
  height: 48,
};

export default function Icon() {
  return new ImageResponse(
    (
      <PiGameControllerDuotone
        style={{
          transform: "rotate(12deg)",
        }}
        size={48}
      />
    ),
    {
      ...size,
    },
  );
}
