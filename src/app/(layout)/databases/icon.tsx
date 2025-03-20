import { ImageResponse } from "next/og";
import { FaDatabase } from "react-icons/fa";

export const size = {
  width: 32,
  height: 32,
};

export default function Icon() {
  return new ImageResponse(<FaDatabase size={32} />, {
    ...size,
  });
}
